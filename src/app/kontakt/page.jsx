'use client';



import React, { useState } from 'react';

import { useModal } from '../../context/ModalContext';



export default function ContactPage() {

  const { openRemoteSupport } = useModal();

  const [formData, setFormData] = useState({

    name: '',

    company: '',

    email: '',

    phone: '',

    category: 'AI-konsultation & Processer',

    message: '',

    gdprConsent: false,

  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [isSubmitted, setIsSubmitted] = useState(false);



  const handleSubmit = (e) => {

    e.preventDefault();

    setIsSubmitting(true);

    setTimeout(() => {

      setIsSubmitting(false);

      setIsSubmitted(true);

    }, 600);

  };



  const handleReset = () => {

    setIsSubmitted(false);

    setFormData({

      name: '',

      company: '',

      email: '',

      phone: '',

      category: 'AI-konsultation & Processer',

      message: '',

      gdprConsent: false,

    });

  };



  return (

    <div className="flex flex-col w-full">

      {/* Hero / Introduction Banner */}

      <section className="relative w-full overflow-hidden pt-space-xl pb-space-2xl bg-background">

        <div className="absolute top-0 right-1/4 w-[600px] h-[300px] bg-gradient-to-br from-primary-fixed-dim/20 to-secondary-container/20 blur-3xl pointer-events-none -z-10"></div>



        <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop space-y-space-md">

          <div className="max-w-3xl space-y-3">

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-low text-primary font-label-sm text-label-sm font-semibold">

              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>

              <span>Kontakt & Support · Kiruna</span>

            </div>

            <h1 className="font-display-hero text-headline-lg md:text-display-hero text-on-surface tracking-tight font-bold">

              Hör av dig till Webbus i Kiruna

            </h1>

            <p className="font-body-lg text-body-lg text-on-surface-variant">

              Vi svarar snabbt och löser dina IT- och systemutmaningar. Oavsett om det gäller ett akut problem med en server eller ett förutsättningslöst möte om AI-implementering.

            </p>

          </div>

        </div>

      </section>



      {/* EMERGENCY REMOTE SUPPORT BANNER */}

      <section className="w-full pb-space-2xl bg-background">

        <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop">

          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-surface-container to-surface-container-high border border-surface-container-highest shadow-md flex flex-col md:flex-row items-center justify-between gap-6">

            <div className="flex items-center gap-4">

              <div className="w-12 h-12 rounded-2xl bg-secondary text-on-secondary flex items-center justify-center flex-shrink-0 shadow">

                <span className="material-symbols-outlined text-[28px]">support_agent</span>

              </div>

              <div className="space-y-1">

                <div className="flex items-center gap-2">

                  <span className="w-2 h-2 rounded-full bg-secondary animate-ping"></span>

                  <p className="font-label-sm text-label-sm text-secondary font-bold uppercase tracking-wider">

                    Akut Fjärrsupport

                  </p>

                </div>

                <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">

                  Behöver du fjärrhjälp direkt?

                </h3>

                <p className="text-body-sm text-on-surface-variant">

                  Med TeamViewer QuickSupport kopplar Ingemar upp sig på sekunder för att felsöka din dator eller server.

                </p>

              </div>

            </div>



            <div className="flex flex-wrap items-center gap-3 w-full md:w-auto justify-end">

              <button

                onClick={openRemoteSupport}

                className="flex-1 md:flex-none inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-secondary text-on-secondary hover:opacity-90 font-semibold text-body-sm shadow transition-all active:scale-[0.98]"

              >

                <span className="material-symbols-outlined text-[20px]">download</span>

                <span>Starta Fjärrsupport</span>

              </button>

              <a

                href="tel:+46737360489"

                className="flex-1 md:flex-none inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-surface-container-lowest text-on-surface hover:bg-surface-dim font-semibold text-body-sm border border-outline-variant/50 transition-colors"

              >

                <span className="material-symbols-outlined text-[18px] text-primary">call</span>

                <span>0737-36 04 89</span>

              </a>

            </div>

          </div>

        </div>

      </section>



      {/* 4 CONTACT CHANNELS GRID */}

      <section className="w-full py-space-xl bg-surface-container-low border-t border-surface-container-high/60">

        <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">

            {/* Address */}

            <div className="p-6 rounded-2xl bg-surface-container-lowest border border-outline-variant/40 shadow-sm space-y-2">

              <div className="w-10 h-10 rounded-xl bg-primary-fixed text-primary flex items-center justify-center">

                <span className="material-symbols-outlined text-[22px]">location_on</span>

              </div>

              <h3 className="font-title-md text-title-md font-bold text-on-surface">Besöksadress</h3>

              <p className="text-body-sm text-on-surface">Mäster Palmsgatan 18A</p>

              <p className="text-body-sm text-on-surface-variant">981 37 Kiruna, Sverige</p>

            </div>



            {/* Phone */}

            <div className="p-6 rounded-2xl bg-surface-container-lowest border border-outline-variant/40 shadow-sm space-y-2">

              <div className="w-10 h-10 rounded-xl bg-primary-fixed text-primary flex items-center justify-center">

                <span className="material-symbols-outlined text-[22px]">call</span>

              </div>

              <h3 className="font-title-md text-title-md font-bold text-on-surface">Telefon & Jour</h3>

              <a href="tel:+46737360489" className="text-body-sm font-semibold text-primary block hover:underline">

                +46 737 360489

              </a>

              <p className="text-body-sm text-on-surface-variant">24/7 jour för avtalskunder</p>

            </div>



            {/* Hours */}

            <div className="p-6 rounded-2xl bg-surface-container-lowest border border-outline-variant/40 shadow-sm space-y-2">

              <div className="w-10 h-10 rounded-xl bg-primary-fixed text-primary flex items-center justify-center">

                <span className="material-symbols-outlined text-[22px]">schedule</span>

              </div>

              <h3 className="font-title-md text-title-md font-bold text-on-surface">Öppettider</h3>

              <p className="text-body-sm text-on-surface">Mån - Fre: 08:00 - 17:00</p>

              <p className="text-body-sm text-on-surface-variant">Kvällar vid akuta avbrott</p>

            </div>



            {/* Email */}

            <div className="p-6 rounded-2xl bg-surface-container-lowest border border-outline-variant/40 shadow-sm space-y-2">

              <div className="w-10 h-10 rounded-xl bg-primary-fixed text-primary flex items-center justify-center">

                <span className="material-symbols-outlined text-[22px]">mail</span>

              </div>

              <h3 className="font-title-md text-title-md font-bold text-on-surface">E-post & Support</h3>

              <a href="mailto:kontakt@webbus.se" className="text-body-sm font-semibold text-primary block hover:underline">

                kontakt@webbus.se

              </a>

              <p className="text-body-sm text-on-surface-variant">Svar oftast inom 2 timmar</p>

            </div>

          </div>

        </div>

      </section>



      {/* FORM & KIRUNA BENTO SECTION */}

      <section className="w-full py-space-3xl bg-background border-t border-surface-container-high/60">

        <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">

            {/* Left: Contact Form (7 cols) */}

            <div className="lg:col-span-7 bg-surface-container-lowest p-6 sm:p-8 rounded-3xl border border-outline-variant/40 shadow-md">

              <div className="mb-6">

                <span className="font-label-sm text-label-sm text-primary font-semibold uppercase tracking-wider">

                  Skicka ett meddelande

                </span>

                <h2 className="font-headline-md text-headline-md text-on-surface font-bold mt-1">

                  Hur kan vi hjälpa er verksamhet?

                </h2>

                <p className="text-body-sm text-on-surface-variant mt-1">

                  Fyll i formuläret så återkommer Ingemar personligen till dig inom kort.

                </p>

              </div>



              {isSubmitted ? (

                <div className="text-center py-10 space-y-4">

                  <div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center text-primary mx-auto">

                    <span className="material-symbols-outlined text-[36px]">check_circle</span>

                  </div>

                  <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">

                    Tack för ditt meddelande!

                  </h3>

                  <p className="text-body-md text-on-surface-variant max-w-md mx-auto">

                    Vi har mottagit ditt ärende gällande <strong className="text-on-surface">{formData.category}</strong>. Ingemar återkopplar till <strong className="text-on-surface">{formData.email}</strong> så snart som möjligt.

                  </p>

                  <button

                    onClick={handleReset}

                    className="mt-4 px-6 py-2.5 rounded-full bg-primary hover:bg-primary-container text-on-primary font-semibold text-body-sm transition-all shadow"

                  >

                    Skicka ett nytt meddelande

                  </button>

                </div>

              ) : (

                <form onSubmit={handleSubmit} className="space-y-4">

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                    <div>

                      <label className="block text-body-sm font-medium text-on-surface mb-1">Ditt namn *</label>

                      <input

                        type="text"

                        required

                        placeholder="För- och efternamn"

                        value={formData.name}

                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}

                        className="w-full px-3 py-2 rounded-lg border border-outline-variant/60 bg-surface-container-lowest focus:border-primary focus:outline-none text-body-sm"

                      />

                    </div>

                    <div>

                      <label className="block text-body-sm font-medium text-on-surface mb-1">Företagsnamn</label>

                      <input

                        type="text"

                        placeholder="Företag AB"

                        value={formData.company}

                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}

                        className="w-full px-3 py-2 rounded-lg border border-outline-variant/60 bg-surface-container-lowest focus:border-primary focus:outline-none text-body-sm"

                      />

                    </div>

                  </div>



                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                    <div>

                      <label className="block text-body-sm font-medium text-on-surface mb-1">E-postadress *</label>

                      <input

                        type="email"

                        required

                        placeholder="namn@foretag.se"

                        value={formData.email}

                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}

                        className="w-full px-3 py-2 rounded-lg border border-outline-variant/60 bg-surface-container-lowest focus:border-primary focus:outline-none text-body-sm"

                      />

                    </div>

                    <div>

                      <label className="block text-body-sm font-medium text-on-surface mb-1">Telefonnummer</label>

                      <input

                        type="tel"

                        placeholder="07X-XXX XX XX"

                        value={formData.phone}

                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}

                        className="w-full px-3 py-2 rounded-lg border border-outline-variant/60 bg-surface-container-lowest focus:border-primary focus:outline-none text-body-sm"

                      />

                    </div>

                  </div>



                  <div>

                    <label className="block text-body-sm font-medium text-on-surface mb-1">Typ av förfrågan</label>

                    <select

                      value={formData.category}

                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}

                      className="w-full px-3 py-2 rounded-lg border border-outline-variant/60 bg-surface-container-lowest focus:border-primary focus:outline-none text-body-sm"

                    >

                      <option value="AI-konsultation & Processer">AI-konsultation & Processautomatisering</option>

                      <option value="System- & Webbutveckling">System- & Webbutveckling (Next.js/React)</option>

                      <option value="Serverdrift & Containers">Serverdrift, Moln & Containers (Docker/K8s)</option>

                      <option value="Akut IT-support">Akut IT-support & Felsökning</option>

                      <option value="Övrigt ärende">Övrigt</option>

                    </select>

                  </div>



                  <div>

                    <label className="block text-body-sm font-medium text-on-surface mb-1">Beskrivning av ärendet *</label>

                    <textarea

                      required

                      rows="4"

                      placeholder="Beskriv vad du vill ha hjälp med, befintliga system eller önskat resultat..."

                      value={formData.message}

                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}

                      className="w-full px-3 py-2 rounded-lg border border-outline-variant/60 bg-surface-container-lowest focus:border-primary focus:outline-none text-body-sm"

                    ></textarea>

                  </div>



                  <div className="flex items-center gap-2 pt-1">

                    <input

                      type="checkbox"

                      id="gdpr"

                      required

                      checked={formData.gdprConsent}

                      onChange={(e) => setFormData({ ...formData, gdprConsent: e.target.checked })}

                      className="w-4 h-4 accent-primary rounded cursor-pointer"

                    />

                    <label htmlFor="gdpr" className="text-xs text-on-surface-variant cursor-pointer">

                      Jag godkänner att Webbus behandlar mina personuppgifter för att besvara denna förfrågan.

                    </label>

                  </div>



                  <div className="pt-3">

                    <button

                      type="submit"

                      disabled={isSubmitting}

                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-primary hover:bg-primary-container text-on-primary font-bold text-body-sm transition-all shadow-md active:scale-[0.98] disabled:opacity-50"

                    >

                      {isSubmitting ? (

                        <>

                          <span className="w-4 h-4 border-2 border-on-primary border-t-transparent rounded-full animate-spin"></span>

                          <span>Skickar meddelande...</span>

                        </>

                      ) : (

                        <>

                          <span>Skicka meddelande</span>

                          <span className="material-symbols-outlined text-[18px]">send</span>

                        </>

                      )}

                    </button>

                  </div>

                </form>

              )}

            </div>



            {/* Right: Kiruna Focus & Map Info (5 cols) */}

            <div className="lg:col-span-5 space-y-space-lg">

              {/* Map Simulator Card */}

              <div className="bg-surface-container-lowest p-6 rounded-3xl border border-outline-variant/40 shadow-md space-y-4">

                <div className="flex items-center justify-between">

                  <div className="flex items-center gap-2">

                    <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse"></span>

                    <h3 className="font-title-md text-title-md font-bold text-on-surface">Kiruna Arktisk Närvaro</h3>

                  </div>

                  <span className="font-code-mono text-xs text-primary bg-primary-fixed px-2 py-0.5 rounded-full">

                    67.8558° N

                  </span>

                </div>



                {/* Google Maps Embed */}
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] w-full bg-surface-container-high border border-outline-variant/40 shadow-inner">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1504.0185679605413!2d20.24764141394566!3d67.85423707971385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x45d0ba76bd8943c9%3A0xb21c31e12187f686!2sM%C3%A4ster%20Palmsgatan%2018A%2C%20981%2037%20Kiruna!5e0!3m2!1ssv!2sse!4v1788798689571!5m2!1ssv!2sse"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                    className="w-full h-full"
                    title="Webbus Kiruna Karta"
                  ></iframe>
                </div>



                <div className="space-y-2 text-body-sm text-on-surface-variant pt-2">

                  <p>

                    Beläget i Kiruna med arktisk precision och personlig närvaro. Vi bistår lokala organisationer i Malmfälten och nationella företag i hela Sverige via modern fjärrstyrning och säkra molntjänster.

                  </p>

                </div>

              </div>



              {/* SLA & Security Guarantee */}

              <div className="p-6 rounded-2xl bg-surface-container-low border border-surface-container-highest space-y-2">

                <div className="flex items-center gap-2 text-primary font-bold text-body-sm">

                  <span className="material-symbols-outlined text-[20px]">security</span>

                  <span>Säkerhet & Tillgänglighet</span>

                </div>

                <p className="text-body-sm text-on-surface-variant">

                  Alla våra support- och konsultationssessioner hanteras med 256-bitars kryptering och enligt strikt GDPR-standard. Ingen information delas med tredje part.

                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

    </div>

  );

}

