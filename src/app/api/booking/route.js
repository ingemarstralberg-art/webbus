import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Simple in-memory rate limiter (sliding window)
const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000; // 15 minutes
const MAX_REQUESTS_PER_WINDOW = 5;

// Periodically clean up stale entries to prevent memory growth
if (typeof setInterval !== 'undefined') {
  const cleanupTimer = setInterval(() => {
    const now = Date.now();
    for (const [ip, record] of rateLimitMap.entries()) {
      if (now - record.startTime > RATE_LIMIT_WINDOW_MS) {
        rateLimitMap.delete(ip);
      }
    }
  }, 10 * 60 * 1000);
  if (cleanupTimer.unref) cleanupTimer.unref();
}

function checkRateLimit(ip) {
  const now = Date.now();
  const record = rateLimitMap.get(ip);
  if (!record || now - record.startTime > RATE_LIMIT_WINDOW_MS) {
    rateLimitMap.set(ip, { count: 1, startTime: now });
    return { allowed: true };
  }
  if (record.count >= MAX_REQUESTS_PER_WINDOW) {
    const resetSeconds = Math.ceil((record.startTime + RATE_LIMIT_WINDOW_MS - now) / 1000);
    return { allowed: false, resetSeconds };
  }
  record.count += 1;
  return { allowed: true };
}

// Security: Escape HTML characters to prevent Email HTML injection & XSS
function escapeHtml(str) {
  if (!str || typeof str !== 'string') return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// Security: Remove carriage returns and newlines from single-line fields to prevent header injection
function sanitizeSingleLine(str, maxLength = 100) {
  if (!str || typeof str !== 'string') return '';
  return str.replace(/[\r\n\t]/g, ' ').trim().slice(0, maxLength);
}

// RFC-compliant standard email format check
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

export async function POST(request) {
  try {
    // 1. IP Rate Limiting
    const forwarded = request.headers.get('x-forwarded-for');
    const clientIp = forwarded ? forwarded.split(',')[0].trim() : (request.headers.get('x-real-ip') || '127.0.0.1');
    const { allowed, resetSeconds } = checkRateLimit(clientIp);

    if (!allowed) {
      return NextResponse.json(
        {
          error: `För många förfrågningar. Vänligen vänta ${Math.ceil((resetSeconds || 60) / 60)} minuter innan du försöker igen.`,
        },
        {
          status: 429,
          headers: {
            'Retry-After': String(resetSeconds || 60),
          },
        }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.error('RESEND_API_KEY is not configured');
      return NextResponse.json(
        {
          error: 'E-posttjänsten är inte konfigurerad (saknar RESEND_API_KEY).',
        },
        { status: 500 }
      );
    }

    let body;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json({ error: 'Ogiltigt JSON-anrop.' }, { status: 400 });
    }

    // 2. Bot Protection (Honeypot field)
    // If the hidden 'website' field is filled, silently succeed without sending email
    if (body.website && String(body.website).trim() !== '') {
      console.warn(`Spambot detected from ${clientIp}, honeypot triggered.`);
      return NextResponse.json({ success: true, id: 'filtered_bot' });
    }

    // 3. Validation & Sanitization
    const rawName = typeof body.name === 'string' ? body.name : '';
    const rawEmail = typeof body.email === 'string' ? body.email : '';

    if (!rawName.trim() || !rawEmail.trim()) {
      return NextResponse.json(
        { error: 'Namn och e-postadress är obligatoriska fält.' },
        { status: 400 }
      );
    }

    const cleanEmail = sanitizeSingleLine(rawEmail, 254);
    if (!EMAIL_REGEX.test(cleanEmail)) {
      return NextResponse.json(
        { error: 'Vänligen ange en giltig e-postadress.' },
        { status: 400 }
      );
    }

    const cleanName = sanitizeSingleLine(rawName, 100);
    const cleanPhone = sanitizeSingleLine(body.phone, 30);
    const cleanCompany = sanitizeSingleLine(body.company, 100);
    const cleanTopic = sanitizeSingleLine(body.topic, 100) || 'AI-produktivitet & Arbetsflöden';
    const cleanDate = sanitizeSingleLine(body.preferredDate, 20);
    const cleanTime = sanitizeSingleLine(body.preferredTime, 10) || '10:00';
    const cleanNotes = typeof body.notes === 'string' ? body.notes.slice(0, 2000) : '';

    const formattedDate = cleanDate
      ? `${cleanDate} kl ${cleanTime}`
      : `Snarast möjligt (kl ${cleanTime})`;

    // Escaped versions for safe HTML rendering
    const safeName = escapeHtml(cleanName);
    const safeEmail = escapeHtml(cleanEmail);
    const safePhone = escapeHtml(cleanPhone) || 'Ej angivet';
    const safeCompany = escapeHtml(cleanCompany) || 'Ej angivet';
    const safeTopic = escapeHtml(cleanTopic);
    const safeFormattedDate = escapeHtml(formattedDate);
    const safeNotesHtml = cleanNotes
      ? escapeHtml(cleanNotes).replace(/\n/g, '<br>')
      : '<em>Inga ytterligare anteckningar angavs.</em>';

    const recipient = process.env.RESEND_TO_EMAIL || 'kontakt@webbus.se';
    const sender = process.env.RESEND_FROM_EMAIL || 'Webbus Bokning <kontakt@webbus.se>';

    const resend = new Resend(apiKey);

    // Email to Webbus admin (kontakt@webbus.se)
    const adminEmailContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f6f8fb; margin: 0; padding: 24px; color: #1e293b; }
            .card { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; border: 1px solid #e2e8f0; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.05); }
            .header { background: linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%); color: #ffffff; padding: 28px 32px; }
            .header h1 { margin: 0 0 6px 0; font-size: 22px; font-weight: 700; }
            .header p { margin: 0; font-size: 14px; opacity: 0.85; }
            .content { padding: 32px; }
            .badge { display: inline-block; padding: 4px 12px; background: #e0f2fe; color: #0369a1; border-radius: 9999px; font-size: 12px; font-weight: 600; margin-bottom: 20px; }
            .detail-row { display: flex; padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-size: 14px; }
            .detail-label { width: 140px; font-weight: 600; color: #64748b; flex-shrink: 0; }
            .detail-value { color: #0f172a; flex: 1; }
            .notes-box { margin-top: 20px; padding: 16px; background: #f8fafc; border-radius: 10px; border-left: 4px solid #3b82f6; font-size: 14px; line-height: 1.6; color: #334155; }
            .footer { padding: 20px 32px; background: #f8fafc; border-top: 1px solid #e2e8f0; font-size: 12px; color: #94a3b8; text-align: center; }
            .reply-btn { display: inline-block; margin-top: 24px; padding: 12px 24px; background: #0284c7; color: #ffffff; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 14px; }
          </style>
        </head>
        <body>
          <div class="card">
            <div class="header">
              <h1>⚡ Ny mötesförfrågan</h1>
              <p>Inkommen via webbus.se (Boka förutsättningslöst möte)</p>
            </div>
            <div class="content">
              <span class="badge">Ny bokning</span>
              <div class="detail-row">
                <span class="detail-label">Kontaktperson:</span>
                <span class="detail-value"><strong>${safeName}</strong></span>
              </div>
              <div class="detail-row">
                <span class="detail-label">E-postadress:</span>
                <span class="detail-value"><a href="mailto:${safeEmail}" style="color: #0284c7; text-decoration: none;">${safeEmail}</a></span>
              </div>
              <div class="detail-row">
                <span class="detail-label">Telefonnummer:</span>
                <span class="detail-value">${safePhone}</span>
              </div>
              <div class="detail-row">
                <span class="detail-label">Företag / Org:</span>
                <span class="detail-value">${safeCompany}</span>
              </div>
              <div class="detail-row">
                <span class="detail-label">Diskussionsområde:</span>
                <span class="detail-value"><strong>${safeTopic}</strong></span>
              </div>
              <div class="detail-row">
                <span class="detail-label">Önskad tidpunkt:</span>
                <span class="detail-value"><strong>${safeFormattedDate}</strong></span>
              </div>
              
              <div style="margin-top: 20px;">
                <span class="detail-label" style="display: block; margin-bottom: 6px;">Beskrivning / Anteckningar:</span>
                <div class="notes-box">
                  ${safeNotesHtml}
                </div>
              </div>

              <div style="text-align: center;">
                <a href="mailto:${safeEmail}?subject=Sv:%20Mötesbokning%20Webbus&body=Hej%20${encodeURIComponent(cleanName)},%0A%0ATack%20för%20din%20mötesförfrågan!" class="reply-btn">Svara direkt via e-post</a>
              </div>
            </div>
            <div class="footer">
              Detta är ett automatiskt meddelande genererat från webbus.se mötesbokningsmodul.
            </div>
          </div>
        </body>
      </html>
    `;

    const subjectLine = `Ny mötesbokning: ${cleanName}${cleanCompany ? ` (${cleanCompany})` : ''}`;

    const { data, error } = await resend.emails.send({
      from: sender,
      to: [recipient],
      replyTo: cleanEmail,
      subject: subjectLine,
      html: adminEmailContent,
      text: `Ny mötesbokning mottagen:\n\nNamn: ${cleanName}\nE-post: ${cleanEmail}\nTelefon: ${cleanPhone || 'Ej angivet'}\nFöretag: ${cleanCompany || 'Ej angivet'}\nÄmne: ${cleanTopic}\nÖnskad tid: ${formattedDate}\n\nMeddelande:\n${cleanNotes || 'Inga anteckningar'}\n`,
    });

    if (error) {
      console.error('Resend API Error:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    // Confirmation email to client
    try {
      await resend.emails.send({
        from: sender,
        to: [cleanEmail],
        subject: `Bekräftelse: Vi har mottagit din mötesförfrågan – Webbus`,
        html: `
          <!DOCTYPE html>
          <html>
            <head>
              <meta charset="utf-8">
              <style>
                body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f6f8fb; margin: 0; padding: 24px; color: #1e293b; }
                .card { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; border: 1px solid #e2e8f0; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.05); }
                .header { background: linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%); color: #ffffff; padding: 28px 32px; }
                .header h1 { margin: 0 0 6px 0; font-size: 22px; font-weight: 700; }
                .content { padding: 32px; font-size: 15px; line-height: 1.6; color: #334155; }
                .summary { background: #f8fafc; border-radius: 10px; padding: 16px; margin: 20px 0; border: 1px solid #e2e8f0; }
                .footer { padding: 20px 32px; background: #f8fafc; border-top: 1px solid #e2e8f0; font-size: 12px; color: #94a3b8; text-align: center; }
              </style>
            </head>
            <body>
              <div class="card">
                <div class="header">
                  <h1>Tack för din förfrågan, ${safeName}!</h1>
                </div>
                <div class="content">
                  <p>Vi har tagit emot din förfrågan om ett förutsättningslöst 30-minuters strategisamtal med Webbus.</p>
                  <p>Ingemar Strålberg kommer att granska önskemålet och återkomma inom kort med en kalenderinbjudan och Teams/Google Meet-länk.</p>
                  
                  <div class="summary">
                    <p style="margin: 0 0 8px 0; font-weight: 600; color: #0f172a;">Sammanfattning av din förfrågan:</p>
                    <p style="margin: 4px 0;"><strong>Ämne:</strong> ${safeTopic}</p>
                    <p style="margin: 4px 0;"><strong>Önskad tid:</strong> ${safeFormattedDate}</p>
                    ${cleanNotes ? `<p style="margin: 4px 0;"><strong>Beskrivning:</strong> ${safeNotesHtml}</p>` : ''}
                  </div>

                  <p>Har du akuta frågor under tiden når du oss alltid direkt på <a href="mailto:kontakt@webbus.se" style="color: #0284c7;">kontakt@webbus.se</a> eller telefon <a href="tel:+46737360489" style="color: #0284c7;">0737-36 04 89</a>.</p>
                  
                  <p style="margin-top: 24px;">Vänliga hälsningar,<br><strong>Ingemar Strålberg</strong><br>Webbus · Kiruna</p>
                </div>
                <div class="footer">
                  Webbus · Kiruna, Sverige · kontakt@webbus.se · https://webbus.se
                </div>
              </div>
            </body>
          </html>
        `,
        text: `Hej ${cleanName}!\n\nTack för din mötesförfrågan till Webbus.\nVi har tagit emot dina uppgifter och återkommer inom kort med kalenderinbjudan för:\nÄmne: ${cleanTopic}\nÖnskad tid: ${formattedDate}\n\nHar du akuta frågor når du oss på kontakt@webbus.se eller 0737-36 04 89.\n\nVänliga hälsningar,\nIngemar Strålberg\nWebbus (kontakt@webbus.se)\n`,
      });
    } catch (confError) {
      console.warn('Could not send confirmation email to client:', confError);
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (err) {
    console.error('Server error during booking:', err);
    return NextResponse.json(
      { error: 'Ett internt fel uppstod vid skickandet av bokningsförfrågan.' },
      { status: 500 }
    );
  }
}
