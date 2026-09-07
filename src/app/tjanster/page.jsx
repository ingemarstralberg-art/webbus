'use client';



import React from 'react';

import Link from 'next/link';

import Image from 'next/image';

import { useModal } from '../../context/ModalContext';

import AiRoiCalculator from '../../components/AiRoiCalculator';



export default function ServicesPage() {

  const { openBooking } = useModal();



  return (

    <div className="flex flex-col w-full">

      {/* Top Banner / Hero */}

      <section className="relative w-full overflow-hidden pt-space-xl pb-space-3xl bg-background">

        <div className="absolute top-0 right-1/4 w-[600px] h-[300px] bg-gradient-to-br from-primary-fixed-dim/20 to-secondary-container/20 blur-3xl pointer-events-none -z-10"></div>



        <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop">

          <div className="max-w-3xl space-y-4">

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-low text-primary font-label-sm text-label-sm font-semibold">

              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>

              <span>Tjänster · AI-produktivitet & Systemutveckling</span>

            </div>

            <h1 className="font-display-hero text-headline-lg md:text-display-hero text-on-surface tracking-tight font-bold">

              Från vision till driftsatt lösning på under 14 dagar

            </h1>

            <p className="font-body-lg text-body-lg text-on-surface-variant">

              Vi hjälper ert företag att gå från spekulation till faktisk affärsnytta. Med spjutspets AI och beprövad systemarkitektur frigör vi tid och bygger lösningar som skalar hållbart.

            </p>

          </div>

        </div>

      </section>



      {/* SECTION 1: AI-PRODUKTIVITET */}

      <section className="w-full py-space-3xl bg-surface-container-low border-t border-surface-container-high/60">

        <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop space-y-space-2xl">

          <div className="max-w-2xl">

            <span className="font-label-sm text-label-sm text-primary font-semibold uppercase tracking-wider">

              Kärnområde 01

            </span>

            <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight mt-1 font-bold">

              AI-Produktivitet i Verksamheten

            </h2>

            <p className="font-body-md text-body-md text-on-surface-variant mt-2">

              Moderna språkmodeller (LLM) är inte bara chattbottar — de är kraftfulla kognitiva beräkningsmotorer. Vi integrerar och anpassar rätt modell för era specifika affärsflöden.

            </p>

          </div>



          {/* Model Trio Cards */}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">

            {/* Claude Card */}

            <div className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/40 shadow-sm flex flex-col justify-between">

              <div>

                <div className="flex items-center justify-between mb-4">

                  <span className="px-2.5 py-1 rounded-md bg-surface-container text-xs font-bold text-primary font-code-mono">

                    ANTHROPIC

                  </span>

                  <span className="text-xs text-on-surface-variant font-medium">Sonnet & Opus</span>

                </div>

                <h3 className="font-title-md text-title-md font-bold text-on-surface mb-2">

                  Anthropic Claude

                </h3>

                <p className="text-body-sm text-on-surface-variant mb-4">

                  Branschens ledande modell för kodning, avtalsgranskning och djupa analytiska resonemang. Minimerar hallucinationer och hanterar nyanserad affärslogik med extrem stringens.

                </p>

                <div className="space-y-1.5 text-body-sm text-on-surface">

                  <div className="flex items-center gap-2">

                    <span className="material-symbols-outlined text-primary text-[18px]">verified</span>

                    <span>Juridisk & avtalsanalys</span>

                  </div>

                  <div className="flex items-center gap-2">

                    <span className="material-symbols-outlined text-primary text-[18px]">verified</span>

                    <span>Automatiserad rapportskrivning</span>

                  </div>

                </div>

              </div>

            </div>



            {/* Gemini Card */}

            <div className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/40 shadow-sm flex flex-col justify-between">

              <div>

                <div className="flex items-center justify-between mb-4">

                  <span className="px-2.5 py-1 rounded-md bg-surface-container text-xs font-bold text-secondary font-code-mono">

                    GOOGLE CLOUD

                  </span>

                  <span className="text-xs text-on-surface-variant font-medium">1.5 Pro</span>

                </div>

                <h3 className="font-title-md text-title-md font-bold text-on-surface mb-2">

                  Google Gemini 1.5 Pro

                </h3>

                <p className="text-body-sm text-on-surface-variant mb-4">

                  Med marknadens största kontextfönster (upp till 2 miljoner tokens) kan Gemini bearbeta hela årsredovisningar, hundratals PDF-dokument eller videoinspelningar i en enda fråga.

                </p>

                <div className="space-y-1.5 text-body-sm text-on-surface">

                  <div className="flex items-center gap-2">

                    <span className="material-symbols-outlined text-secondary text-[18px]">verified</span>

                    <span>Stora datamängder & arkiv</span>

                  </div>

                  <div className="flex items-center gap-2">

                    <span className="material-symbols-outlined text-secondary text-[18px]">verified</span>

                    <span>Multimodal audio & bild</span>

                  </div>

                </div>

              </div>

            </div>



            {/* ChatGPT Card */}

            <div className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/40 shadow-sm flex flex-col justify-between">

              <div>

                <div className="flex items-center justify-between mb-4">

                  <span className="px-2.5 py-1 rounded-md bg-surface-container text-xs font-bold text-on-surface font-code-mono">

                    OPENAI

                  </span>

                  <span className="text-xs text-on-surface-variant font-medium">GPT-4o</span>

                </div>

                <h3 className="font-title-md text-title-md font-bold text-on-surface mb-2">

                  OpenAI ChatGPT-4o

                </h3>

                <p className="text-body-sm text-on-surface-variant mb-4">

                  Ultrasnabb multimodal motor. Idealisk för direkt kundkommunikation, automatiserad ärendehantering, röststyrning och realtidsassistans i interna intranät.

                </p>

                <div className="space-y-1.5 text-body-sm text-on-surface">

                  <div className="flex items-center gap-2">

                    <span className="material-symbols-outlined text-on-surface text-[18px]">verified</span>

                    <span>Kundtjänst & chattagenter</span>

                  </div>

                  <div className="flex items-center gap-2">

                    <span className="material-symbols-outlined text-on-surface text-[18px]">verified</span>

                    <span>Smidig API-integration</span>

                  </div>

                </div>

              </div>

            </div>

          </div>



          {/* 3-Step Implementation Process */}

          <div className="pt-space-xl space-y-space-lg">

            <div className="text-center max-w-xl mx-auto">

              <span className="font-label-sm text-label-sm text-primary font-semibold uppercase tracking-wider">

                Webbus Metodik

              </span>

              <h3 className="font-headline-md text-headline-md text-on-surface font-bold mt-1">

                Från tvekan till mätbar ROI i 3 steg

              </h3>

            </div>



            <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">

              <div className="p-6 rounded-2xl bg-surface-container-lowest border border-outline-variant/40 space-y-3 relative overflow-hidden">

                <div className="w-10 h-10 rounded-full bg-primary-fixed text-primary font-bold flex items-center justify-center text-lg">

                  1

                </div>

                <h4 className="font-title-md text-title-md font-bold text-on-surface">

                  Förstudie & Säkerhetsrevision

                </h4>

                <p className="text-body-sm text-on-surface-variant">

                  Vi kartlägger era arbetsflöden och identifierar repetitiva flaskhalsar. Vi säkerställer GDPR-efterlevnad och ser till att er interna företagsdata aldrig används för att träna publika modeller.

                </p>

              </div>



              <div className="p-6 rounded-2xl bg-surface-container-lowest border border-outline-variant/40 space-y-3 relative overflow-hidden">

                <div className="w-10 h-10 rounded-full bg-primary-fixed text-primary font-bold flex items-center justify-center text-lg">

                  2

                </div>

                <h4 className="font-title-md text-title-md font-bold text-on-surface">

                  Utbildning & Prompt Engineering

                </h4>

                <p className="text-body-sm text-on-surface-variant">

                  Praktiska workshops med er personal. Vi lär teamet hur man formulerar precisa instruktioner, granskar resultat och använder AI som en daglig kraftmultiplikator.

                </p>

              </div>



              <div className="p-6 rounded-2xl bg-surface-container-lowest border border-outline-variant/40 space-y-3 relative overflow-hidden">

                <div className="w-10 h-10 rounded-full bg-primary-fixed text-primary font-bold flex items-center justify-center text-lg">

                  3

                </div>

                <h4 className="font-title-md text-title-md font-bold text-on-surface">

                  Automatisering & Driftsättning

                </h4>

                <p className="text-body-sm text-on-surface-variant">

                  Vi bygger och driftsätter anpassade agenter och pipelines. Resultatet: mätbar tidsbesparing varje vecka och en organisation som ligger steget före konkurrenterna.

                </p>

              </div>

            </div>

          </div>



          {/* Interactive Calculator Component */}

          <div className="pt-space-xl">

            <AiRoiCalculator />

          </div>

        </div>

      </section>



      {/* SECTION 2: SYSTEMUTVECKLING & WEBB */}

      <section className="w-full py-space-3xl bg-background border-t border-surface-container-high/60">

        <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop space-y-space-2xl">

          <div className="max-w-2xl">

            <span className="font-label-sm text-label-sm text-secondary font-semibold uppercase tracking-wider">

              Kärnområde 02

            </span>

            <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight mt-1 font-bold">

              AI-driven System- och Webbutveckling

            </h2>

            <p className="font-body-md text-body-md text-on-surface-variant mt-2">

              Genom att kombinera modern mjukvaruarkitektur med AI-accelererad utveckling bygger vi säkra och blixtsnabba system på en bråkdel av traditionell projekttid.

            </p>

          </div>



          <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">

            <div className="p-6 rounded-2xl bg-surface-container-low border border-surface-container-highest space-y-3">

              <div className="w-12 h-12 rounded-xl bg-surface-container-lowest flex items-center justify-center text-primary shadow-sm">

                <span className="material-symbols-outlined text-[28px]">web</span>

              </div>

              <h3 className="font-title-md text-title-md font-bold text-on-surface">

                Moderna Företagswebbar

              </h3>

              <p className="text-body-sm text-on-surface-variant">

                Byggda i Next.js och React med 100/100 Lighthouse-poäng. Mobilanpassade, blixtsnabba och optimerade för högsta möjliga konvertering.

              </p>

            </div>



            <div className="p-6 rounded-2xl bg-surface-container-low border border-surface-container-highest space-y-3">

              <div className="w-12 h-12 rounded-xl bg-surface-container-lowest flex items-center justify-center text-secondary shadow-sm">

                <span className="material-symbols-outlined text-[28px]">hub</span>

              </div>

              <h3 className="font-title-md text-title-md font-bold text-on-surface">

                API:er & Integrationer

              </h3>

              <p className="text-body-sm text-on-surface-variant">

                Sömlösa kopplingar mellan era affärssystem (Fortnox, Visma, CRM) och externa AI-tjänster eller skräddarsydda databaser.

              </p>

            </div>



            <div className="p-6 rounded-2xl bg-surface-container-low border border-surface-container-highest space-y-3">

              <div className="w-12 h-12 rounded-xl bg-surface-container-lowest flex items-center justify-center text-on-surface shadow-sm">

                <span className="material-symbols-outlined text-[28px]">deployed_code</span>

              </div>

              <h3 className="font-title-md text-title-md font-bold text-on-surface">

                Containers & Molndrift

              </h3>

              <p className="text-body-sm text-on-surface-variant">

                Driftsättning i Docker och Kubernetes. Automatisk skalning, säkerhetskopiering och isolerad infrastruktur med 99.98% drifttid.

              </p>

            </div>

          </div>

        </div>

      </section>



      {/* SECTION 3: PRISMODELLER & SAMARBETEN */}

      <section className="w-full py-space-3xl bg-surface-container-low border-t border-surface-container-high/60">

        <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop space-y-space-2xl">

          <div className="text-center max-w-2xl mx-auto">

            <span className="font-label-sm text-label-sm text-primary font-semibold uppercase tracking-wider">

              Flexibla Samarbetsformer

            </span>

            <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight mt-1 font-bold">

              Transparenta pris- & samarbetsmodeller

            </h2>

            <p className="font-body-md text-body-md text-on-surface-variant mt-2">

              Inga dolda avgifter eller inlåsningseffekter. Välj den modell som matchar er verksamhets storlek och budget.

            </p>

          </div>



          <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg items-stretch">

            {/* Model 1: Timbank */}

            <div className="p-8 rounded-2xl bg-surface-container-lowest border border-outline-variant/40 shadow-sm flex flex-col justify-between">

              <div className="space-y-4">

                <span className="px-3 py-1 rounded-full bg-surface-container-low text-xs font-bold text-on-surface uppercase tracking-wider">

                  Löpande Behov

                </span>

                <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">

                  Löpande Timbank

                </h3>

                <p className="text-body-sm text-on-surface-variant">

                  En flexibel spetsresurs när ni behöver snabb hjälp med system, felsökning eller löpande rådgivning.

                </p>

                <div className="pt-2 border-t border-surface-container-high">

                  <p className="text-xs text-on-surface-variant">Från</p>

                  <p className="font-headline-md text-headline-md font-bold text-primary">1 150 kr <span className="text-xs font-normal text-on-surface-variant">/ h</span></p>

                </div>

                <ul className="space-y-2 text-body-sm text-on-surface pt-2">

                  <li className="flex items-center gap-2">

                    <span className="material-symbols-outlined text-primary text-[18px]">check</span>

                    <span>Ingen bindningstid</span>

                  </li>

                  <li className="flex items-center gap-2">

                    <span className="material-symbols-outlined text-primary text-[18px]">check</span>

                    <span>Fakturering per kvart</span>

                  </li>

                  <li className="flex items-center gap-2">

                    <span className="material-symbols-outlined text-primary text-[18px]">check</span>

                    <span>Full tidsredovisning</span>

                  </li>

                </ul>

              </div>

              <button

                onClick={() => openBooking('Löpande Timbank')}

                className="mt-6 w-full py-2.5 rounded-full border border-outline-variant/60 hover:border-primary text-on-surface font-title-md text-body-sm font-semibold transition-colors text-center"

              >

                Välj Timbank

              </button>

            </div>



            {/* Model 2: Fastpris (Highlighted) */}

            <div className="p-8 rounded-2xl bg-gradient-to-b from-surface-container-lowest to-surface-container-low border-2 border-primary shadow-xl flex flex-col justify-between relative">

              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-on-primary text-xs font-bold uppercase tracking-wider shadow">

                Mest Populärt · 100% Garanti

              </div>

              <div className="space-y-4 pt-2">

                <span className="px-3 py-1 rounded-full bg-primary-fixed text-xs font-bold text-primary uppercase tracking-wider">

                  Projektleverans

                </span>

                <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">

                  Fastprisprojekt

                </h3>

                <p className="text-body-sm text-on-surface-variant">

                  Nyckelfärdig leverans av ny företagswebb, skräddarsydd AI-agent eller systemuppgradering med garanterat resultat.

                </p>

                <div className="pt-2 border-t border-surface-container-high">

                  <p className="text-xs text-on-surface-variant">Fast offert</p>

                  <p className="font-headline-md text-headline-md font-bold text-primary">Enligt specifikation</p>

                </div>

                <ul className="space-y-2 text-body-sm text-on-surface pt-2">

                  <li className="flex items-center gap-2">

                    <span className="material-symbols-outlined text-primary text-[18px]">check</span>

                    <span>100% Nöjd-kundgaranti</span>

                  </li>

                  <li className="flex items-center gap-2">

                    <span className="material-symbols-outlined text-primary text-[18px]">check</span>

                    <span>Fast tidplan och budget</span>

                  </li>

                  <li className="flex items-center gap-2">

                    <span className="material-symbols-outlined text-primary text-[18px]">check</span>

                    <span>Inga oväntade tilläggskostnader</span>

                  </li>

                </ul>

              </div>

              <button

                onClick={() => openBooking('Fastprisprojekt')}

                className="mt-6 w-full py-2.5 rounded-full bg-primary hover:bg-primary-container text-on-primary font-title-md text-body-sm font-semibold transition-all shadow text-center"

              >

                Få ett fast prisförslag

              </button>

            </div>



            {/* Model 3: Helhet & SLA */}

            <div className="p-8 rounded-2xl bg-surface-container-lowest border border-outline-variant/40 shadow-sm flex flex-col justify-between">

              <div className="space-y-4">

                <span className="px-3 py-1 rounded-full bg-surface-container-low text-xs font-bold text-secondary uppercase tracking-wider">

                  Total Trygghet

                </span>

                <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">

                  Helhet & Förvaltning (SLA)

                </h3>

                <p className="text-body-sm text-on-surface-variant">

                  Månatlig drift, övervakning, säkerhetsuppdateringar och prioriterad supportkanal för hela er IT- och AI-miljö.

                </p>

                <div className="pt-2 border-t border-surface-container-high">

                  <p className="text-xs text-on-surface-variant">Fast månadspris</p>

                  <p className="font-headline-md text-headline-md font-bold text-secondary">Från 3 500 kr <span className="text-xs font-normal text-on-surface-variant">/ mån</span></p>

                </div>

                <ul className="space-y-2 text-body-sm text-on-surface pt-2">

                  <li className="flex items-center gap-2">

                    <span className="material-symbols-outlined text-secondary text-[18px]">check</span>

                    <span>Proaktiv 24/7 övervakning</span>

                  </li>

                  <li className="flex items-center gap-2">

                    <span className="material-symbols-outlined text-secondary text-[18px]">check</span>

                    <span>Garanterad inställelsetid</span>

                  </li>

                  <li className="flex items-center gap-2">

                    <span className="material-symbols-outlined text-secondary text-[18px]">check</span>

                    <span>Inkluderade supporttimmar</span>

                  </li>

                </ul>

              </div>

              <button

                onClick={() => openBooking('Helhetsförvaltning & SLA')}

                className="mt-6 w-full py-2.5 rounded-full border border-outline-variant/60 hover:border-secondary text-on-surface font-title-md text-body-sm font-semibold transition-colors text-center"

              >

                Välj Förvaltningsavtal

              </button>

            </div>

          </div>

        </div>

      </section>



      {/* CTA SECTION */}

      <section className="w-full py-space-2xl bg-surface-container-lowest border-t border-surface-container-high text-center">

        <div className="max-w-xl mx-auto px-margin-mobile space-y-4">

          <h3 className="font-headline-md text-headline-md text-on-surface font-bold">

            Osäker på vilken modell som passar bäst?

          </h3>

          <p className="text-body-md text-on-surface-variant">

            Boka ett kort förutsättningslöst möte så går vi igenom era system och ger en ärlig rekommendation.

          </p>

          <button

            onClick={() => openBooking()}

            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary hover:bg-primary-container text-on-primary font-bold text-body-sm transition-all shadow"

          >

            <span>Boka 30 min kostnadsfri rådgivning</span>

            <span className="material-symbols-outlined text-[18px]">calendar_month</span>

          </button>

        </div>

      </section>

    </div>

  );

}

