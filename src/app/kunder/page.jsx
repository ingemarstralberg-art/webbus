'use client';



import React from 'react';

import Link from 'next/link';

import Image from 'next/image';

import { useModal } from '../../context/ModalContext';



export default function ClientsPage() {

  const { openBooking } = useModal();



  return (

    <div className="flex flex-col w-full">

      {/* Top Banner / Hero */}

      <section className="relative w-full overflow-hidden pt-space-xl pb-space-3xl bg-background">

        <div className="absolute top-0 left-1/3 w-[600px] h-[300px] bg-gradient-to-br from-primary-fixed-dim/20 to-secondary-container/20 blur-3xl pointer-events-none -z-10"></div>



        <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop space-y-space-xl">

          <div className="max-w-3xl space-y-4">

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-low text-primary font-label-sm text-label-sm font-semibold">

              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>

              <span>Kunder & Referenser · Webbus Kiruna</span>

            </div>

            <h1 className="font-display-hero text-headline-lg md:text-display-hero text-on-surface tracking-tight font-bold">

              Verifierade resultat som bygger långsiktigt förtroende

            </h1>

            <p className="font-body-lg text-body-lg text-on-surface-variant">

              Från fastighetskoncerner till finansiella rådgivare och nischade handelsföretag. Se hur vi hjälpt företag i Sverige att halvera IT-kostnader, automatisera arbetsflöden och säkra problemfri drift.

            </p>

          </div>



          {/* Key Metrics Strip */}

          <div className="grid grid-cols-2 md:grid-cols-4 gap-space-md pt-space-md">

            <div className="p-6 rounded-2xl bg-surface-container-lowest border border-outline-variant/40 shadow-sm text-center">

              <p className="font-display-hero text-headline-lg md:text-display-hero font-bold text-primary">-50%</p>

              <p className="font-title-md text-title-md font-semibold text-on-surface mt-1">IT-kostnadssänkning</p>

              <p className="text-body-sm text-on-surface-variant mt-0.5">Verifierad i kundcase</p>

            </div>



            <div className="p-6 rounded-2xl bg-surface-container-lowest border border-outline-variant/40 shadow-sm text-center">

              <p className="font-display-hero text-headline-lg md:text-display-hero font-bold text-secondary">15+ år</p>

              <p className="font-title-md text-title-md font-semibold text-on-surface mt-1">Kundrelationer</p>

              <p className="text-body-sm text-on-surface-variant mt-0.5">Långsiktigt förtroende</p>

            </div>



            <div className="p-6 rounded-2xl bg-surface-container-lowest border border-outline-variant/40 shadow-sm text-center">

              <p className="font-display-hero text-headline-lg md:text-display-hero font-bold text-primary">99.98%</p>

              <p className="font-title-md text-title-md font-semibold text-on-surface mt-1">Verifierad SLA</p>

              <p className="text-body-sm text-on-surface-variant mt-0.5">Drifttid på servernätverk</p>

            </div>



            <div className="p-6 rounded-2xl bg-surface-container-lowest border border-outline-variant/40 shadow-sm text-center">

              <p className="font-display-hero text-headline-lg md:text-display-hero font-bold text-on-surface">24/7</p>

              <p className="font-title-md text-title-md font-semibold text-on-surface mt-1">Akut Jour</p>

              <p className="text-body-sm text-on-surface-variant mt-0.5">För kritiska incidenter</p>

            </div>

          </div>

        </div>

      </section>



      {/* DETAILED CUSTOMER CASES */}

      <section className="w-full py-space-3xl bg-surface-container-low border-t border-surface-container-high/60">

        <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop space-y-space-2xl">

          <div className="max-w-2xl">

            <span className="font-label-sm text-label-sm text-primary font-semibold uppercase tracking-wider">

              Kundcitat & Testimonials

            </span>

            <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight mt-1 font-bold">

              Direkta ord från verksamhetsledare

            </h2>

            <p className="font-body-md text-body-md text-on-surface-variant mt-2">

              Vi bygger inte relationer som varar i månader — vi bygger partnerskap som varar i decennier.

            </p>

          </div>



          <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg items-stretch">

            {/* Case 1: Jonas Dahlgren / Exceed Capital */}

            <div className="p-8 rounded-3xl bg-surface-container-lowest border border-outline-variant/40 shadow-md flex flex-col justify-between space-y-6">

              <div className="space-y-4">

                <div className="flex items-center gap-1 text-primary">

                  {[...Array(5)].map((_, i) => (

                    <span key={i} className="material-symbols-outlined text-[20px]">star</span>

                  ))}

                </div>



                <p className="text-body-lg text-on-surface italic">

                  "Ingemar och Webbus har halverat våra IT-kostnader samtidigt som driftsäkerheten och prestandan förbättrades drastiskt. Snabbheten och det personliga engagemanget är helt unikt i branschen."

                </p>

              </div>



              <div className="pt-4 border-t border-surface-container-high">

                <p className="font-headline-sm text-headline-sm font-bold text-on-surface">Jonas Dahlgren</p>

                <p className="text-body-sm text-primary font-medium">Partner & Senior Rådgivare, Exceed Capital</p>

                <div className="flex flex-wrap gap-1.5 pt-3">

                  <span className="px-2.5 py-0.5 rounded-full bg-surface-container-low text-xs text-on-surface-variant font-code-mono">

                    -50% Kostnadsminskning

                  </span>

                  <span className="px-2.5 py-0.5 rounded-full bg-surface-container-low text-xs text-on-surface-variant font-code-mono">

                    Molnmigrering

                  </span>

                </div>

              </div>

            </div>



            {/* Case 2: Niclas Eriksson / Vasastaden Holding */}

            <div className="p-8 rounded-3xl bg-surface-container-lowest border border-outline-variant/40 shadow-md flex flex-col justify-between space-y-6">

              <div className="space-y-4">

                <div className="flex items-center gap-1 text-primary">

                  {[...Array(5)].map((_, i) => (

                    <span key={i} className="material-symbols-outlined text-[20px]">star</span>

                  ))}

                </div>



                <p className="text-body-lg text-on-surface italic">

                  "Webbus har varit vår trygga IT-partner i över 15 år. Oavsett om det gäller akut hårdvaruhaveri eller storskalig utveckling av våra interna system vet vi att Ingemar löser det på sekunden."

                </p>

              </div>



              <div className="pt-4 border-t border-surface-container-high">

                <p className="font-headline-sm text-headline-sm font-bold text-on-surface">Niclas Eriksson</p>

                <p className="text-body-sm text-primary font-medium">Koncernchef & Ägare, Vasastaden Holding</p>

                <div className="flex flex-wrap gap-1.5 pt-3">

                  <span className="px-2.5 py-0.5 rounded-full bg-surface-container-low text-xs text-on-surface-variant font-code-mono">

                    Helhetsdrift & Nätverk

                  </span>

                  <span className="px-2.5 py-0.5 rounded-full bg-surface-container-low text-xs text-on-surface-variant font-code-mono">

                    15+ år samarbete

                  </span>

                </div>

              </div>

            </div>



            {/* Case 3: Rebecca Gunnarsson / Oakleys Göteborg */}

            <div className="p-8 rounded-3xl bg-surface-container-lowest border border-outline-variant/40 shadow-md flex flex-col justify-between space-y-6">

              <div className="space-y-4">

                <div className="flex items-center gap-1 text-primary">

                  {[...Array(5)].map((_, i) => (

                    <span key={i} className="material-symbols-outlined text-[20px]">star</span>

                  ))}

                </div>



                <p className="text-body-lg text-on-surface italic">

                  "När våra system och butiksmiljöer behöver specialiststöd finns det ingen vi litar på mer. Webbus förstår butiksdrift och vikten av att aldrig ha en minuts stillestånd."

                </p>

              </div>



              <div className="pt-4 border-t border-surface-container-high">

                <p className="font-headline-sm text-headline-sm font-bold text-on-surface">Rebecca Gunnarsson</p>

                <p className="text-body-sm text-primary font-medium">Platschef, Oakleys Göteborg</p>

                <div className="flex flex-wrap gap-1.5 pt-3">

                  <span className="px-2.5 py-0.5 rounded-full bg-surface-container-low text-xs text-on-surface-variant font-code-mono">

                    Butikssystem & POS

                  </span>

                  <span className="px-2.5 py-0.5 rounded-full bg-surface-container-low text-xs text-on-surface-variant font-code-mono">

                    Direkt fjärrsupport

                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>



      {/* DELIVERED SOLUTIONS SHOWCASE */}

      <section className="w-full py-space-3xl bg-background border-t border-surface-container-high/60">

        <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop space-y-space-2xl">

          <div className="max-w-2xl">

            <span className="font-label-sm text-label-sm text-secondary font-semibold uppercase tracking-wider">

              Leveransbibliotek

            </span>

            <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight mt-1 font-bold">

              Exempel på levererade lösningar

            </h2>

            <p className="font-body-md text-body-md text-on-surface-variant mt-2">

              Konkreta projekt där arkitektur och automation skapat verklig nytta.

            </p>

          </div>



          <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">

            <div className="p-6 rounded-2xl bg-surface-container-lowest border border-outline-variant/40 shadow-sm space-y-3">

              <div className="w-10 h-10 rounded-xl bg-primary-fixed text-primary flex items-center justify-center">

                <span className="material-symbols-outlined text-[24px]">speed</span>

              </div>

              <h3 className="font-title-md text-title-md font-bold text-on-surface">

                Modernisering av Företagswebbar

              </h3>

              <p className="text-body-sm text-on-surface-variant">

                Ombyggnad av legacy-sajter till modern Next.js-arkitektur. Resultat: laddtider under 0.4 sekunder och direkt fördubbling av inkommande offertförfrågningar.

              </p>

            </div>



            <div className="p-6 rounded-2xl bg-surface-container-lowest border border-outline-variant/40 shadow-sm space-y-3">

              <div className="w-10 h-10 rounded-xl bg-secondary-container/20 text-secondary flex items-center justify-center">

                <span className="material-symbols-outlined text-[24px]">psychology</span>

              </div>

              <h3 className="font-title-md text-title-md font-bold text-on-surface">

                AI-assisterad Ärendehantering

              </h3>

              <p className="text-body-sm text-on-surface-variant">

                Automatisk klassificering och sammanfattning av inkommande e-post och avtal med Claude och GPT-4o. -70% administrativ handläggningstid.

              </p>

            </div>



            <div className="p-6 rounded-2xl bg-surface-container-lowest border border-outline-variant/40 shadow-sm space-y-3">

              <div className="w-10 h-10 rounded-xl bg-surface-container text-on-surface flex items-center justify-center">

                <span className="material-symbols-outlined text-[24px]">dns</span>

              </div>

              <h3 className="font-title-md text-title-md font-bold text-on-surface">

                Säker Containerdrift & Kubernetes

              </h3>

              <p className="text-body-sm text-on-surface-variant">

                Migrering av affärskritiska databaser och webbappar till containeriserade kluster med automatisk backup och noll driftstopp på 3 år.

              </p>

            </div>

          </div>

        </div>

      </section>



      {/* GUARANTEE CALLOUT */}

      <section className="w-full py-space-3xl bg-surface-container-low border-t border-surface-container-high/60">

        <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop">

          <div className="p-8 sm:p-12 rounded-3xl bg-surface-container-lowest border-2 border-primary/30 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">

            <div className="space-y-2 max-w-xl">

              <div className="inline-flex items-center gap-2 text-primary font-bold text-body-sm">

                <span className="material-symbols-outlined text-[24px]">verified</span>

                <span>Vårt bindande löfte</span>

              </div>

              <h3 className="font-headline-md text-headline-md text-on-surface font-bold">

                100% Nöjd-kundgaranti på alla uppdrag

              </h3>

              <p className="text-body-md text-on-surface-variant">

                Vi fakturerar inte ett öre förrän du som kund är helt nöjd med leveransen. Så enkelt ska ett modernt IT-samarbete fungera.

              </p>

            </div>



            <button

              onClick={() => openBooking()}

              className="flex-shrink-0 py-3.5 px-8 rounded-full bg-primary hover:bg-primary-container text-on-primary font-bold text-body-sm transition-all shadow-lg active:scale-[0.98]"

            >

              Boka förutsättningslöst möte

            </button>

          </div>

        </div>

      </section>

    </div>

  );

}

