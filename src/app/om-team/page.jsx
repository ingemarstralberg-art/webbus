'use client';



import React from 'react';

import Link from 'next/link';

import Image from 'next/image';

import { useModal } from '../../context/ModalContext';



export default function AboutPage() {

  const { openBooking } = useModal();



  return (

    <div className="flex flex-col w-full">

      {/* Hero / Header Section */}

      <section className="relative w-full overflow-hidden pt-space-xl pb-space-3xl bg-background">

        <div className="absolute top-0 right-1/3 w-[600px] h-[300px] bg-gradient-to-br from-primary-fixed-dim/25 via-secondary-fixed/25 to-transparent blur-3xl pointer-events-none -z-10"></div>



        <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop">

          <div className="max-w-3xl space-y-4">

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-low text-primary font-label-sm text-label-sm font-semibold">

              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>

              <span>Om Webbus & Team · Kiruna</span>

            </div>

            <h1 className="font-display-hero text-headline-lg md:text-display-hero text-on-surface tracking-tight font-bold">

              Teknisk höjd utan overhead

            </h1>

            <p className="font-body-lg text-body-lg text-on-surface-variant">

              Från Kirunas Malmfält till moderna molnarkitekturer. Vi tror inte på uppblåsta konsultbyråer, onödiga mellanled eller säljare utan teknisk insikt. Hos Webbus arbetar du alltid direkt med den tekniska arkitekten.

            </p>

          </div>



          {/* 3 Core Highlights Bento */}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg pt-space-2xl">

            <div className="p-6 rounded-2xl bg-surface-container-lowest border border-outline-variant/40 shadow-sm space-y-2">

              <div className="w-10 h-10 rounded-lg bg-primary-fixed text-primary flex items-center justify-center font-bold">

                <span className="material-symbols-outlined text-[24px]">architecture</span>

              </div>

              <h3 className="font-title-md text-title-md text-on-surface font-bold">Teknisk Höjd utan Overhead</h3>

              <p className="text-body-sm text-on-surface-variant">

                Du slipper betala för glassiga kontor i storstaden. Varje krona investeras direkt i robust kod, AI-processer och maximal drifttid.

              </p>

            </div>



            <div className="p-6 rounded-2xl bg-surface-container-lowest border border-outline-variant/40 shadow-sm space-y-2">

              <div className="w-10 h-10 rounded-lg bg-secondary-container/20 text-secondary flex items-center justify-center font-bold">

                <span className="material-symbols-outlined text-[24px]">troubleshoot</span>

              </div>

              <h3 className="font-title-md text-title-md text-on-surface font-bold">Från Akutstrul till Enterprise</h3>

              <p className="text-body-sm text-on-surface-variant">

                Oavsett om det gäller en kraschad server under fredagskvällen eller en storskalig migrering till Kubernetes finns vi vid din sida.

              </p>

            </div>



            <div className="p-6 rounded-2xl bg-surface-container-lowest border border-outline-variant/40 shadow-sm space-y-2">

              <div className="w-10 h-10 rounded-lg bg-surface-container text-on-surface flex items-center justify-center font-bold">

                <span className="material-symbols-outlined text-[24px]">ac_unit</span>

              </div>

              <h3 className="font-title-md text-title-md text-on-surface font-bold">Sub-arktisk Uthållighet</h3>

              <p className="text-body-sm text-on-surface-variant">

                Med rötterna i norra Sveriges arktiska klimat bygger vi lösningar som tål påfrestningar och levererar dygnet runt, året om.

              </p>

            </div>

          </div>

        </div>

      </section>



      {/* DETAILED INGEMAR PROFILE SECTION */}

      <section className="w-full py-space-3xl bg-surface-container-low border-t border-surface-container-high/60">

        <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop space-y-space-2xl">

          <div className="max-w-2xl">

            <span className="font-label-sm text-label-sm text-primary font-semibold uppercase tracking-wider">

              Arkitekten Bakom Webbus

            </span>

            <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight mt-1 font-bold">

              Möt Ingemar Strålberg

            </h2>

            <p className="font-body-md text-body-md text-on-surface-variant mt-2">

              Över 25 års erfarenhet av IT-infrastruktur, telekom, molntjänster och modern mjukvaruutveckling.

            </p>

          </div>



          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl">

            {/* Left Col: Portrait & Bio (5 cols) */}

            <div className="lg:col-span-5 bg-surface-container-lowest p-6 sm:p-8 rounded-3xl border border-outline-variant/40 shadow-md space-y-6">

              <div className="relative w-full aspect-square max-w-xs mx-auto rounded-2xl overflow-hidden shadow-inner border border-outline-variant/30">

                <Image

                  src="/images/ingemar.jpg"

                  alt="Ingemar Strålberg med glasögon och svart t-shirt"

                  fill

                  className="object-cover"

                />

              </div>



              <div className="space-y-2 text-center sm:text-left">

                <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">Ingemar Strålberg</h3>

                <p className="text-primary font-semibold text-body-sm">Senior Systemarkitekt & Grundare</p>

                <p className="text-body-sm text-on-surface-variant pt-2">

                  Ingemar har under två och ett halvt decennium levererat drift och utveckling till krävande beställare som Vasastaden Holding, Oakleys och Exceed Capital.

                </p>

              </div>



              {/* Direct Quote Box */}

              <div className="p-4 rounded-2xl bg-surface-container-low border-l-4 border-primary italic text-body-sm text-on-surface space-y-2">

                <p>

                  "Teknikens enda uppgift är att göra verksamheten starkare och mer självständig. Det spelar ingen roll hur avancerad en AI-modell eller en serverkluster är om den inte sparar tid eller skapar värde varje dag."

                </p>

                <p className="font-semibold not-italic text-xs text-primary">— Ingemar Strålberg</p>

              </div>



              <div className="pt-2">

                <button

                  onClick={() => openBooking('Samtal med Ingemar')}

                  className="w-full py-3 px-4 rounded-full bg-primary hover:bg-primary-container text-on-primary font-semibold text-body-sm transition-all shadow text-center flex items-center justify-center gap-2"

                >

                  <span>Boka ett möte med Ingemar</span>

                  <span className="material-symbols-outlined text-[18px]">calendar_today</span>

                </button>

              </div>

            </div>



            {/* Right Col: Deep Dive into Tech & Telemetry (7 cols) */}

            <div className="lg:col-span-7 space-y-space-lg">

              {/* Card 1: DevOps & Containers */}

              <div className="p-6 sm:p-8 rounded-3xl bg-surface-container-lowest border border-outline-variant/40 shadow-sm space-y-4">

                <div className="flex items-center gap-3">

                  <div className="w-10 h-10 rounded-xl bg-primary-fixed text-primary flex items-center justify-center">

                    <span className="material-symbols-outlined text-[24px]">terminal</span>

                  </div>

                  <div>

                    <span className="text-xs font-code-mono text-primary font-semibold uppercase">Teknisk Spets</span>

                    <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">

                      Det moderna spåret: Containers, AI & DevOps

                    </h3>

                  </div>

                </div>



                <p className="text-body-md text-on-surface-variant">

                  De senaste åren har Ingemar fördjupat spetskompetensen inom modern mikrotjänstearkitektur och containrar (Docker, Stacker, Kubernetes). Genom att kombinera detta med praktisk prompt engineering och LLM-orkestrering bygger Webbus automatiserade pipelines som sparar hundratals timmar åt beställare.

                </p>



                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">

                  <div className="p-3 rounded-xl bg-surface-container-low text-center">

                    <p className="font-code-mono text-xs text-on-surface-variant">INFRA</p>

                    <p className="font-bold text-body-sm text-on-surface">Kubernetes</p>

                  </div>

                  <div className="p-3 rounded-xl bg-surface-container-low text-center">

                    <p className="font-code-mono text-xs text-on-surface-variant">RUNTIME</p>

                    <p className="font-bold text-body-sm text-on-surface">Docker Engine</p>

                  </div>

                  <div className="p-3 rounded-xl bg-surface-container-low text-center">

                    <p className="font-code-mono text-xs text-on-surface-variant">FRONTEND</p>

                    <p className="font-bold text-body-sm text-on-surface">Next.js & React</p>

                  </div>

                  <div className="p-3 rounded-xl bg-surface-container-low text-center">

                    <p className="font-code-mono text-xs text-on-surface-variant">AI ENGINE</p>

                    <p className="font-bold text-body-sm text-on-surface">Claude / GPT-4o</p>

                  </div>

                </div>

              </div>



              {/* Card 2: Endurance & Precision */}

              <div className="p-6 sm:p-8 rounded-3xl bg-surface-container-lowest border border-outline-variant/40 shadow-sm space-y-4">

                <div className="flex items-center gap-3">

                  <div className="w-10 h-10 rounded-xl bg-secondary-container/20 text-secondary flex items-center justify-center">

                    <span className="material-symbols-outlined text-[24px]">directions_bike</span>

                  </div>

                  <div>

                    <span className="text-xs font-code-mono text-secondary font-semibold uppercase">Uthållighet & Precision</span>

                    <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">

                      Cykelsport, Fysik & Datadriven Telemetri

                    </h3>

                  </div>

                </div>



                <p className="text-body-md text-on-surface-variant">

                  Vid sidan av arkitektur och kod är Ingemar en passionerad cyklist. Uthållighetsidrott på hög nivå handlar precis som serverdrift om millimeternoggrannhet, datainsamling, optimerad energiförbrukning och mental stryktålighet när det blåser snålblåst.

                </p>



                <div className="p-4 rounded-xl bg-surface-container-low text-body-sm text-on-surface space-y-1">

                  <p className="font-semibold text-primary">Samma filosofi tillämpas i varje kodrad:</p>

                  <p className="text-on-surface-variant">

                    Minimal friktion, eliminerad redundans och noggrant mätbara resultat i stället för tomma gissningar.

                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>



      {/* NETWORK MODEL & VALUES */}

      <section className="w-full py-space-3xl bg-background border-t border-surface-container-high/60">

        <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop space-y-space-2xl">

          <div className="text-center max-w-2xl mx-auto">

            <span className="font-label-sm text-label-sm text-primary font-semibold uppercase tracking-wider">

              Arbetssätt & Värderingar

            </span>

            <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight mt-1 font-bold">

              Vår nätverksmodell & värdegrund

            </h2>

            <p className="font-body-md text-body-md text-on-surface-variant mt-2">

              Storbyråns leveransstyrka med partnerns flexibilitet. Du har alltid en enda personlig kontaktpunkt.

            </p>

          </div>



          <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">

            <div className="p-6 rounded-2xl bg-surface-container-low border border-surface-container-highest space-y-3">

              <div className="w-12 h-12 rounded-xl bg-surface-container-lowest flex items-center justify-center text-primary shadow-sm">

                <span className="material-symbols-outlined text-[28px]">verified</span>

              </div>

              <h3 className="font-title-md text-title-md font-bold text-on-surface">

                100% Nöjd-kundgaranti

              </h3>

              <p className="text-body-sm text-on-surface-variant">

                Vi tar fullt ansvar för det vi levererar. Om en funktion eller lösning inte möter överenskommen specifikation åtgärdar vi den tills du är nöjd — utan extra fakturor.

              </p>

            </div>



            <div className="p-6 rounded-2xl bg-surface-container-low border border-surface-container-highest space-y-3">

              <div className="w-12 h-12 rounded-xl bg-surface-container-lowest flex items-center justify-center text-secondary shadow-sm">

                <span className="material-symbols-outlined text-[28px]">support_agent</span>

              </div>

              <h3 className="font-title-md text-title-md font-bold text-on-surface">

                Absolut Tillgänglighet

              </h3>

              <p className="text-body-sm text-on-surface-variant">

                Inga krångliga ärendesystem som läggs på hög. När det krisar når du oss direkt på telefon eller fjärrsupport för snabb och personlig åtgärd.

              </p>

            </div>



            <div className="p-6 rounded-2xl bg-surface-container-low border border-surface-container-highest space-y-3">

              <div className="w-12 h-12 rounded-xl bg-surface-container-lowest flex items-center justify-center text-on-surface shadow-sm">

                <span className="material-symbols-outlined text-[28px]">savings</span>

              </div>

              <h3 className="font-title-md text-title-md font-bold text-on-surface">

                Kostnadseffektiv Arkitektur

              </h3>

              <p className="text-body-sm text-on-surface-variant">

                Vi bygger för långsiktig stabilitet utan onödiga licenskostnader. Våra kunder halverar ofta sina driftkostnader efter genomgång av infrastrukturen.

              </p>

            </div>

          </div>

        </div>

      </section>



      {/* BOTTOM CTA */}

      <section className="w-full py-space-2xl bg-gradient-to-r from-surface-container-lowest to-surface-container border-t border-surface-container-high text-center">

        <div className="max-w-xl mx-auto px-margin-mobile space-y-4">

          <h3 className="font-headline-md text-headline-md text-on-surface font-bold">

            Vill du diskutera ett uppdrag med Ingemar?

          </h3>

          <p className="text-body-md text-on-surface-variant">

            Boka 30 minuter kostnadsfri rådgivning. Vi pratar rakt på sak om era möjligheter och utmaningar.

          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">

            <button

              onClick={() => openBooking()}

              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary hover:bg-primary-container text-on-primary font-bold text-body-sm transition-all shadow"

            >

              <span>Boka förutsättningslöst samtal</span>

              <span className="material-symbols-outlined text-[18px]">calendar_month</span>

            </button>

            <Link

              href="/kontakt"

              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-surface-container hover:bg-surface-container-high text-on-surface font-semibold text-body-sm transition-all border border-outline-variant/40"

            >

              <span>Kontakta Kirunakontoret</span>

            </Link>

          </div>

        </div>

      </section>

    </div>

  );

}

