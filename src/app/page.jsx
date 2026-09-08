'use client';



import React from 'react';

import Link from 'next/link';

import Image from 'next/image';

import { useModal } from '../context/ModalContext';

const aiLogos = [
  { name: 'Anthropic Claude', src: '/images/logos/claude-standard.png', width: 334, height: 72 },
  { name: 'OpenAI ChatGPT', src: '/images/logos/chatgpt-standard.png', width: 284, height: 72 },
  { name: 'Google Gemini', src: '/images/logos/gemini-standard.png', width: 319, height: 72 },
  { name: 'xAI Grok', src: '/images/logos/grok-standard.png', width: 198, height: 72 },
  { name: 'Microsoft Copilot', src: '/images/logos/copilot-standard.png', width: 341, height: 72 },
];

export default function HomePage() {

  const { openBooking } = useModal();



  return (

    <div className="flex flex-col w-full">

      {/* HERO SECTION */}

      <section className="relative w-full overflow-hidden pt-space-xl pb-space-3xl lg:pb-space-4xl">

        {/* Atmospheric Arctic Background Glows */}

        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-gradient-to-tr from-primary-fixed-dim/30 via-secondary-fixed/30 to-transparent blur-3xl pointer-events-none -z-10"></div>

        <div className="absolute -top-24 right-10 w-96 h-96 bg-secondary-container/10 rounded-full blur-2xl pointer-events-none -z-10"></div>



        <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop">

          <div className="flex flex-col lg:flex-row items-center gap-space-2xl lg:gap-space-3xl">

            {/* Left: Editorial Content */}

            <div className="flex-1 flex flex-col items-start text-left">

              {/* Top Badge */}

              <div className="inline-flex items-center gap-space-2xs py-space-2xs px-space-md rounded-full bg-surface-container-low shadow-sm mb-space-lg">

                <span className="text-primary font-semibold text-label-sm font-label-sm tracking-wide flex items-center gap-1.5">

                  <span className="w-2 h-2 rounded-full bg-secondary animate-ping"></span>

                  ⚡ Kiruna · Framtidssäkrad IT & AI-transformation

                </span>

              </div>



              {/* Main Heading */}

              <h1 className="font-display-hero text-display-hero text-on-surface tracking-tight mb-space-md">

                Öka företagets produktivitet med <span className="text-primary">AI</span> & Skräddarsydd Systemutveckling

              </h1>



              {/* Subtitle */}

              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl mb-space-xl">

                Webbus hjälper verksamheter att omsätta nästa generations AI i praktisk nytta. Från implementering av marknadsledande AI-modeller till robust, AI-driven mjukvaru- och webbutveckling.

              </p>



              {/* CTAs */}

              <div className="flex flex-wrap items-center gap-space-md mb-space-xl w-full sm:w-auto">

                <Link

                  href="/tjanster"

                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-space-xs py-space-sm px-space-xl rounded-full bg-primary hover:bg-primary-container text-on-primary font-title-md text-title-md shadow-md transition-all active:scale-[0.98]"

                >

                  <span>Utforska våra AI-processer</span>

                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>

                </Link>

                <button

                  onClick={() => openBooking()}

                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-space-xs py-space-sm px-space-xl rounded-full bg-surface-container-low hover:bg-surface-container-high text-on-surface font-title-md text-title-md transition-all border border-surface-container-highest"

                >

                  <span>Boka förutsättningslöst möte</span>

                </button>

              </div>



              {/* Key Attribute Pills */}

              <div className="flex flex-wrap items-center gap-space-xs pt-space-xs">

                <div className="flex items-center gap-space-2xs py-1.5 px-space-sm rounded-full bg-surface-container-lowest shadow-sm text-on-surface font-label-md text-label-md border border-outline-variant/30">

                  <span className="material-symbols-outlined text-primary text-[16px]">verified</span>

                  <span>100% Nöjd-kundgaranti</span>

                </div>

                <div className="flex items-center gap-space-2xs py-1.5 px-space-sm rounded-full bg-surface-container-lowest shadow-sm text-on-surface font-label-md text-label-md border border-outline-variant/30">

                  <span className="material-symbols-outlined text-primary text-[16px]">pin_drop</span>

                  <span>Lokal närvaro i Kiruna</span>

                </div>

                <div className="flex items-center gap-space-2xs py-1.5 px-space-sm rounded-full bg-surface-container-lowest shadow-sm text-on-surface font-label-md text-label-md border border-outline-variant/30">

                  <span className="material-symbols-outlined text-primary text-[16px]">support_agent</span>

                  <span>Direktkontakt med expert</span>

                </div>

              </div>

            </div>



            {/* Right: Modern Framed Tech Workspace Visual */}

            <div className="flex-1 w-full relative">

              <div className="relative mx-auto max-w-lg lg:max-w-none">

                {/* Ambient Glow behind frame */}

                <div className="absolute -inset-2 bg-gradient-to-tr from-primary-fixed-dim/40 to-secondary-container/30 rounded-3xl blur-xl"></div>



                {/* Elevated Mockup Card */}
                <div className="relative bg-surface-container-lowest rounded-2xl shadow-xl p-space-xs border border-outline-variant/40">
                  {/* Window top-bar simulator */}
                  <div className="flex items-center justify-between px-space-md py-space-xs bg-surface-container-low rounded-t-xl mb-space-xs">
                    <div className="flex items-center gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-error/70"></div>
                      <div className="w-3 h-3 rounded-full bg-secondary-container"></div>
                      <div className="w-3 h-3 rounded-full bg-primary/70"></div>
                    </div>
                    <div className="flex items-center gap-space-2xs font-code-mono text-body-sm text-on-surface-variant">
                      <span className="material-symbols-outlined text-[14px]">terminal</span>
                      <span>kiruna-node-01.webbus.internal</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="inline-block w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                      <span className="font-label-sm text-label-sm text-primary font-semibold">SYNCED</span>
                    </div>
                  </div>

                  {/* Main Hero Image */}
                  <div className="relative rounded-xl overflow-hidden aspect-[16/10]">
                    <Image
                      src="/images/workspace_kiruna.jpg"
                      alt="Webbus Kiruna Tech Workspace med subarktisk utsikt och modern AI-infrastruktur"
                      fill
                      className="object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/80 via-inverse-surface/20 to-transparent"></div>

                    {/* Top Right Live Telemetry */}
                    <div className="absolute top-space-sm right-space-sm py-1 px-space-xs rounded-lg bg-surface-container-lowest/90 backdrop-blur-md text-on-surface font-code-mono text-body-sm shadow-sm flex items-center gap-1.5 border border-outline-variant/30">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                      <span>Latency: 4.2ms</span>
                    </div>

                    {/* Bottom Left Operations Info */}
                    <div className="absolute bottom-space-md left-space-md right-space-md flex items-end justify-between">
                      <div className="text-on-primary">
                        <p className="font-label-sm text-label-sm uppercase tracking-widest text-primary-fixed-dim">Operations Center</p>
                        <p className="font-title-md text-title-md font-semibold text-white">Kiruna Arctic Lab · 67.8558° N</p>
                      </div>
                    </div>
                  </div>

                  {/* Floating Live Badge 1 (Left Overlap) */}
                  <div className="absolute top-16 -left-3 sm:-left-6 bg-surface-container-lowest/95 backdrop-blur-md p-space-sm sm:px-space-md sm:py-space-sm rounded-xl shadow-xl flex items-center gap-space-sm max-w-xs border border-outline-variant/30 z-10">
                    <div className="w-10 h-10 rounded-lg bg-primary-fixed flex items-center justify-center text-primary shrink-0">
                      <span className="material-symbols-outlined text-[24px]">psychology</span>
                    </div>
                    <div className="whitespace-nowrap">
                      <div className="flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-primary"></span>
                        <p className="font-label-sm text-label-sm text-primary font-semibold">LLM Orchestration</p>
                      </div>
                      <p className="font-title-md text-body-sm font-bold text-on-surface">Claude & GPT Enterprise</p>
                    </div>
                  </div>

                  {/* Floating Live Badge 2 (Bottom Right Overlap) */}
                  <div className="absolute -bottom-5 -right-2 sm:-right-4 bg-surface-container-lowest/95 backdrop-blur-md p-space-sm sm:px-space-md sm:py-space-sm rounded-xl shadow-xl flex items-center gap-space-sm border border-outline-variant/30 z-10">
                    <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-secondary shrink-0">
                      <span className="material-symbols-outlined text-[24px]">rocket_launch</span>
                    </div>
                    <div className="whitespace-nowrap pr-1">
                      <p className="font-label-sm text-label-sm text-on-surface-variant font-medium">Genomsnittlig leverans</p>
                      <p className="font-headline-sm text-headline-sm font-bold text-primary tracking-tight">2.4x Högre Takt</p>
                    </div>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>



      {/* TWO CORE AREAS SECTION */}

      <section className="w-full py-space-3xl bg-surface-container-low relative border-y border-surface-container-high/60">

        <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop">

          <div className="text-center max-w-2xl mx-auto mb-space-2xl">

            <span className="font-label-sm text-label-sm text-primary font-semibold uppercase tracking-wider">

              Strategisk Inriktning

            </span>

            <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight mt-space-2xs mb-space-xs">

              De två kärnpelarna som driver er framåt

            </h2>

            <p className="font-body-md text-body-md text-on-surface-variant">

              Vi kombinerar direkt AI-implementering med solid ingenjörskonst för att säkerställa att ny teknik blir en integrerad del av er vardag.

            </p>

          </div>



          <div className="grid grid-cols-1 md:grid-cols-2 gap-space-xl">

            {/* Core Area 1: AI-Produktivitet */}

            <div className="group relative bg-surface-container-lowest p-space-xl rounded-2xl border border-outline-variant/50 arctic-card-hover flex flex-col justify-between">

              <div>

                <div className="flex items-center justify-between mb-space-lg">

                  <div className="w-14 h-14 rounded-xl bg-primary-fixed/60 flex items-center justify-center text-primary group-hover:scale-105 transition-transform">

                    <span className="material-symbols-outlined text-[32px]">auto_mode</span>

                  </div>

                  <span className="py-1 px-3 rounded-full bg-surface-container-low text-primary font-code-mono text-body-sm">

                    14 dagars driftstart

                  </span>

                </div>



                <h3 className="font-headline-md text-headline-md text-on-surface tracking-tight mb-space-sm font-bold">

                  AI-produktivitet i verksamheten

                </h3>

                <p className="font-body-md text-body-md text-on-surface-variant mb-space-lg">

                  Praktisk utbildning och integration av marknadsledande AI-modeller. Vi hjälper er personal att bemästra AI på ett säkert sätt utan dataläckage.

                </p>



                <ul className="space-y-space-xs mb-space-xl">

                  <li className="flex items-center gap-space-xs text-body-md text-on-surface">

                    <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>

                    <span>Integration av Anthropic Claude, Google Gemini & ChatGPT-4o</span>

                  </li>

                  <li className="flex items-center gap-space-xs text-body-md text-on-surface">

                    <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>

                    <span>GDPR-säkrade miljöer för känslig företagsdata</span>

                  </li>

                  <li className="flex items-center gap-space-xs text-body-md text-on-surface">

                    <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>

                    <span>Automatisering av dokumentanalys, rapporter och kundärenden</span>

                  </li>

                </ul>

              </div>



              <Link

                href="/tjanster"

                className="inline-flex items-center gap-2 text-primary font-title-md text-title-md font-semibold hover:gap-3 transition-all"

              >

                <span>Läs mer om AI-processer</span>

                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>

              </Link>

            </div>



            {/* Core Area 2: Systemutveckling */}

            <div className="group relative bg-surface-container-lowest p-space-xl rounded-2xl border border-outline-variant/50 arctic-card-hover flex flex-col justify-between">

              <div>

                <div className="flex items-center justify-between mb-space-lg">

                  <div className="w-14 h-14 rounded-xl bg-secondary-container/20 flex items-center justify-center text-secondary group-hover:scale-105 transition-transform">

                    <span className="material-symbols-outlined text-[32px]">code_blocks</span>

                  </div>

                  <span className="py-1 px-3 rounded-full bg-surface-container-low text-secondary font-code-mono text-body-sm">

                    99.98% SLA

                  </span>

                </div>



                <h3 className="font-headline-md text-headline-md text-on-surface tracking-tight mb-space-sm font-bold">

                  AI-driven System- & Webbutveckling

                </h3>

                <p className="font-body-md text-body-md text-on-surface-variant mb-space-lg">

                  Vi bygger robusta företagswebbplatser, moderna webbappar och containeriserade backend-system med hjälp av AI-accelererade utvecklingsprocesser.

                </p>



                <ul className="space-y-space-xs mb-space-xl">

                  <li className="flex items-center gap-space-xs text-body-md text-on-surface">

                    <span className="material-symbols-outlined text-secondary text-[20px]">check_circle</span>

                    <span>Moderna webbappar & API:er med Next.js och React</span>

                  </li>

                  <li className="flex items-center gap-space-xs text-body-md text-on-surface">

                    <span className="material-symbols-outlined text-secondary text-[20px]">check_circle</span>

                    <span>Containeriserad drift med Docker & Kubernetes</span>

                  </li>

                  <li className="flex items-center gap-space-xs text-body-md text-on-surface">

                    <span className="material-symbols-outlined text-secondary text-[20px]">check_circle</span>

                    <span>100/100 Lighthouse prestanda och högsta sökmotorfokus</span>

                  </li>

                </ul>

              </div>



              <Link

                href="/tjanster"

                className="inline-flex items-center gap-2 text-secondary font-title-md text-title-md font-semibold hover:gap-3 transition-all"

              >

                <span>Utforska vår mjukvarustack</span>

                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>

              </Link>

            </div>

          </div>

          {/* Scrolling AI Ecosystem Logo Marquee */}
          <div className="mt-space-2xl pt-space-xl border-t border-surface-container-high/60">
            <div className="text-center mb-space-md">
              <span className="font-label-sm text-label-sm text-on-surface-variant/80 uppercase tracking-widest font-semibold">
                Ledande AI-modeller & plattformar vi integrerar
              </span>
            </div>

            {/* Marquee Wrapper with soft edge fades */}
            <div className="relative w-full overflow-hidden py-2 [mask-image:linear-gradient(to_right,transparent_0%,black_8%,black_92%,transparent_100%)]">
              <div className="flex gap-6 sm:gap-8 w-max animate-marquee py-2">
                {[...aiLogos, ...aiLogos, ...aiLogos, ...aiLogos].map((logo, idx) => (
                  <div
                    key={`${logo.name}-${idx}`}
                    className="flex items-center justify-center h-14 px-6 rounded-xl bg-surface-container-lowest/70 hover:bg-surface-container-lowest border border-outline-variant/30 hover:border-primary/40 shadow-xs hover:shadow-md transition-all duration-300 group"
                  >
                    <Image
                      src={logo.src}
                      alt={logo.name}
                      width={logo.width}
                      height={logo.height}
                      className="h-6 sm:h-7 w-auto object-contain opacity-70 grayscale contrast-125 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </section>



      {/* TECH STACK & MODELS SECTION */}

      <section className="w-full py-space-3xl bg-background">

        <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop">

          <div className="flex flex-col lg:flex-row items-start justify-between gap-space-xl mb-space-2xl">

            <div>

              <span className="font-label-sm text-label-sm text-primary font-semibold uppercase tracking-wider">

                Teknologi & Partnerstack

              </span>

              <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight mt-space-2xs font-bold">

                Spjutspets AI möter stabil drift

              </h2>

            </div>

            <p className="font-body-md text-body-md text-on-surface-variant max-w-lg">

              Vi låser er inte till en enskild leverantör. Vi väljer den modell och infrastruktur som är bäst lämpad för ert specifika affärsbehov och säkerhetskrav.

            </p>

          </div>



          <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">

            {/* Claude */}

            <div className="p-6 rounded-2xl bg-surface-container-lowest border border-outline-variant/40 space-y-3">

              <div className="w-10 h-10 rounded-lg bg-surface-container-low flex items-center justify-center text-primary font-bold">

                Anthropic

              </div>

              <h3 className="font-title-md text-title-md font-bold text-on-surface">Claude 3.5 Sonnet</h3>

              <p className="text-body-sm text-on-surface-variant">

                Överlägsen för komplex kodgenerering, avtalsgranskning och djupgående logiska resonemang utan hallucinationer.

              </p>

              <div className="pt-2 text-xs font-code-mono text-primary flex items-center gap-1">

                <span className="material-symbols-outlined text-[14px]">bolt</span>

                <span>Spjutspets inom resonemang</span>

              </div>

            </div>



            {/* Gemini */}

            <div className="p-6 rounded-2xl bg-surface-container-lowest border border-outline-variant/40 space-y-3">

              <div className="w-10 h-10 rounded-lg bg-surface-container-low flex items-center justify-center text-secondary font-bold">

                Google

              </div>

              <h3 className="font-title-md text-title-md font-bold text-on-surface">Gemini 1.5 Pro</h3>

              <p className="text-body-sm text-on-surface-variant">

                2 miljoner tokens kontextfönster. Kan analysera hela bokföringsår, videofilmer och gigantiska kodbaser i ett enda svep.

              </p>

              <div className="pt-2 text-xs font-code-mono text-secondary flex items-center gap-1">

                <span className="material-symbols-outlined text-[14px]">view_in_ar</span>

                <span>2M Tokens Ultra-kontext</span>

              </div>

            </div>



            {/* OpenAI */}

            <div className="p-6 rounded-2xl bg-surface-container-lowest border border-outline-variant/40 space-y-3">

              <div className="w-10 h-10 rounded-lg bg-surface-container-low flex items-center justify-center text-on-surface font-bold">

                OpenAI

              </div>

              <h3 className="font-title-md text-title-md font-bold text-on-surface">ChatGPT-4o</h3>

              <p className="text-body-sm text-on-surface-variant">

                Bred och snabb multimodal modell. Utmärkt för dynamisk textbearbetning, kundtjänstassistenter och talgränssnitt.

              </p>

              <div className="pt-2 text-xs font-code-mono text-on-surface flex items-center gap-1">

                <span className="material-symbols-outlined text-[14px]">speed</span>

                <span>Omni Multimodal Snabbhet</span>

              </div>

            </div>

          </div>

        </div>

      </section>



      {/* FOUNDER & GUARANTEE SECTION */}

      <section className="w-full py-space-3xl bg-surface-container-low border-t border-surface-container-high/60">

        <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop">

          <div className="bg-surface-container-lowest rounded-3xl p-8 sm:p-12 border border-outline-variant/40 shadow-xl flex flex-col lg:flex-row items-center gap-space-2xl">

            {/* Founder Image & Bio */}

            <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-2xl overflow-hidden shadow-lg flex-shrink-0 border-2 border-primary/20">

              <Image

                src="/images/ingemar.jpg"

                alt="Ingemar Strålberg, grundare Webbus Kiruna"

                fill

                className="object-cover"

              />

            </div>



            <div className="flex-1 space-y-4 text-left">

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-fixed text-primary font-label-sm text-label-sm font-semibold">

                <span className="material-symbols-outlined text-[16px]">person</span>

                <span>Grundare & Huvudarkitekt</span>

              </div>



              <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold">

                "Rätt IT på rätt sätt – utan onödig byråkrati."

              </h2>



              <p className="text-body-lg text-on-surface-variant">

                Jag heter <strong>Ingemar Strålberg</strong> och driver Webbus från Kiruna. I över 25 år har jag hjälpt företag från Malmfälten till Göteborg att bygga, drifta och optimera sina system. Hos mig pratar du alltid direkt med teknikern som utför arbetet — aldrig en säljare.

              </p>



              <div className="flex flex-wrap items-center gap-4 pt-2">

                <Link

                  href="/om-team"

                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-primary hover:bg-primary-container text-on-primary font-semibold text-body-sm transition-all shadow"

                >

                  <span>Läs mer om filosofin & bakgrunden</span>

                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>

                </Link>

                <Link

                  href="/kunder"

                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-surface-container hover:bg-surface-container-high text-on-surface font-semibold text-body-sm transition-all"

                >

                  <span>Se vad våra kunder säger</span>

                </Link>

              </div>

            </div>

          </div>

        </div>

      </section>



      {/* LEAD CONVERSION BANNER */}

      <section className="w-full py-space-3xl bg-gradient-to-br from-primary to-primary-container text-on-primary text-center">

        <div className="max-w-[800px] mx-auto px-margin-mobile space-y-6">

          <span className="inline-block py-1 px-4 rounded-full bg-surface-container-lowest/20 backdrop-blur-md text-xs font-semibold uppercase tracking-wider text-white">

            Ta steget från AI-hype till faktisk affärsnytta

          </span>

          <h2 className="font-display-hero text-headline-lg md:text-display-hero font-bold tracking-tight text-white">

            Redo att frigöra tid och bygga morgondagens lösningar?

          </h2>

          <p className="text-body-lg opacity-90 max-w-xl mx-auto text-white">

            Boka ett 30 minuters förutsättningslöst samtal med Ingemar. Vi kartlägger era behov och identifierar var ni sparar mest tid med AI.

          </p>

          <div className="pt-2">

            <button

              onClick={() => openBooking()}

              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-primary hover:bg-surface-container-lowest font-bold text-title-md transition-all shadow-xl active:scale-[0.98]"

            >

              <span>Boka förutsättningslöst möte nu</span>

              <span className="material-symbols-outlined text-[20px]">calendar_month</span>

            </button>

          </div>

        </div>

      </section>

    </div>

  );

}

