'use client';



import React from 'react';

import Link from 'next/link';

import Image from 'next/image';

import { useModal } from '../context/ModalContext';



export default function Footer() {
  const { openBooking, openRemoteSupport, openCookieSettings } = useModal();



  return (

    <footer className="w-full bg-surface-container-low border-t border-surface-container-high/80 pt-space-3xl pb-space-2xl text-on-surface">

      <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop">

        {/* Main Grid */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-space-xl pb-space-2xl border-b border-surface-container-high">

          {/* Col 1 & 2: Brand & Positioning */}

          <div className="lg:col-span-2 space-y-4">

            <Link href="/" className="inline-block">

              <div className="relative h-12 w-48 sm:w-52">

                <Image

                  src="/images/logo.png"

                  alt="Webbus logotyp"

                  fill

                  className="object-contain object-left"

                />

              </div>

            </Link>

            <p className="text-body-md text-on-surface-variant max-w-sm">

              Webbus moderniserar företags IT och omsätter avancerad AI i mätbar produktivitet. Baserat i Kiruna med sub-arktisk tillförlitlighet och personlig expertkontakt.

            </p>



            {/* Kiruna Telemetry Chip */}

            <div className="inline-flex items-center gap-2 py-1.5 px-3 rounded-full bg-surface-container-lowest border border-outline-variant/40 shadow-sm text-on-surface">

              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>

              <span className="font-code-mono text-body-sm">

                Kiruna Arctic Operations · 67.8558° N, 20.2253° E

              </span>

            </div>



            {/* Guarantee Tag */}

            <div className="flex items-center gap-2 pt-2 text-body-sm text-primary font-semibold">

              <span className="material-symbols-outlined text-[18px]">verified</span>

              <span>100% Nöjd-kundgaranti på alla uppdrag</span>

            </div>

          </div>



          {/* Col 3: Tjänster */}

          <div className="space-y-3">

            <h4 className="font-title-md text-title-md font-bold text-on-surface">Tjänsteområden</h4>

            <ul className="space-y-2 text-body-sm text-on-surface-variant">

              <li>

                <Link href="/tjanster" className="hover:text-primary transition-colors">

                  AI-produktivitet & Agenter

                </Link>

              </li>

              <li>

                <Link href="/tjanster" className="hover:text-primary transition-colors">

                  Skräddarsydd Systemutveckling

                </Link>

              </li>

              <li>

                <Link href="/tjanster" className="hover:text-primary transition-colors">

                  Moderna Företagswebbar

                </Link>

              </li>

              <li>

                <Link href="/tjanster" className="hover:text-primary transition-colors">

                  Molninfrastruktur & Containers

                </Link>

              </li>

              <li>

                <button

                  onClick={openRemoteSupport}

                  className="hover:text-primary transition-colors text-left font-medium text-secondary"

                >

                  ⚡ Akut Fjärrsupport (TeamViewer)

                </button>

              </li>

            </ul>

          </div>



          {/* Col 4: Företaget */}

          <div className="space-y-3">

            <h4 className="font-title-md text-title-md font-bold text-on-surface">Om Webbus</h4>

            <ul className="space-y-2 text-body-sm text-on-surface-variant">

              <li>

                <Link href="/om-team" className="hover:text-primary transition-colors">

                  Ingemar Strålberg (Grundare)

                </Link>

              </li>

              <li>

                <Link href="/om-team" className="hover:text-primary transition-colors">

                  Vår Ingenjörsfilosofi

                </Link>

              </li>

              <li>

                <Link href="/kunder" className="hover:text-primary transition-colors">

                  Kundcase & Referenser

                </Link>

              </li>

              <li>

                <Link href="/kunder" className="hover:text-primary transition-colors">

                  Verifierade Nyckeltal (-50%)

                </Link>

              </li>

              <li>

                <button

                  onClick={() => openBooking()}

                  className="hover:text-primary transition-colors text-left font-medium text-primary"

                >

                  Boka rådgivningsmöte

                </button>

              </li>

            </ul>

          </div>



          {/* Col 5: Kontakt & Jour */}

          <div className="space-y-3">

            <h4 className="font-title-md text-title-md font-bold text-on-surface">Kontakt & Jour</h4>

            <ul className="space-y-2 text-body-sm text-on-surface-variant">

              <li className="flex items-start gap-2">

                <span className="material-symbols-outlined text-[16px] text-primary mt-0.5">location_on</span>

                <span>Mäster Palmsgatan 18A, 981 37 Kiruna</span>

              </li>

              <li className="flex items-center gap-2">

                <span className="material-symbols-outlined text-[16px] text-primary">call</span>

                <a href="tel:+46737360489" className="hover:text-primary transition-colors font-semibold text-on-surface">

                  +46 737 360489

                </a>

              </li>

              <li className="flex items-center gap-2">

                <span className="material-symbols-outlined text-[16px] text-primary">mail</span>

                <a href="mailto:kontakt@webbus.se" className="hover:text-primary transition-colors">

                  kontakt@webbus.se

                </a>

              </li>

              <li className="flex items-center gap-2">

                <span className="material-symbols-outlined text-[16px] text-secondary">schedule</span>

                <span>Vardagar 08-17 (24/7 jour)</span>

              </li>

            </ul>

          </div>

        </div>



        {/* Bottom Strip */}

        <div className="pt-space-lg flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-on-surface-variant">

          <p>© 2026 Webbus. Alla rättigheter förbehållna. Byggd med Next.js och Google Stitch Design.</p>

          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={openCookieSettings}
              className="hover:text-primary transition-colors inline-flex items-center gap-1 text-on-surface-variant hover:underline underline-offset-2"
            >
              <span className="material-symbols-outlined text-[14px]">cookie</span>
              <span>Cookie-inställningar</span>
            </button>

            <span>·</span>

            <Link href="/kontakt" className="hover:text-on-surface transition-colors">Integritet & GDPR</Link>

            <span>·</span>

            <Link href="/kontakt" className="hover:text-on-surface transition-colors">Avtalsvillkor</Link>

            <span>·</span>

            <span className="flex items-center gap-1 text-primary">

              <span className="w-2 h-2 rounded-full bg-primary"></span>

              Alla noder operativa

            </span>

          </div>

        </div>

      </div>

    </footer>

  );

}

