'use client';



import React from 'react';

import { useModal } from '../context/ModalContext';



export default function RemoteSupportModal() {

  const { remoteSupportOpen, closeRemoteSupport } = useModal();



  if (!remoteSupportOpen) return null;



  return (

    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-inverse-surface/60 backdrop-blur-sm animate-in fade-in duration-200">

      <div className="relative w-full max-w-xl bg-surface-container-lowest rounded-2xl shadow-2xl border border-outline-variant/40 overflow-hidden">

        {/* Header */}

        <div className="flex items-center justify-between px-6 py-4 border-b border-surface-container-high bg-surface-container-low/80">

          <div className="flex items-center gap-3">

            <div className="w-10 h-10 rounded-xl bg-secondary-container/20 flex items-center justify-center text-secondary">

              <span className="material-symbols-outlined text-[24px]">support_agent</span>

            </div>

            <div>

              <div className="flex items-center gap-2">

                <span className="inline-block w-2 h-2 rounded-full bg-secondary animate-ping"></span>

                <span className="font-label-sm text-label-sm text-secondary font-semibold uppercase tracking-wider">

                  Akut Fjärrsupport · Kiruna Dispatch

                </span>

              </div>

              <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">

                TeamViewer Fjärrhjälp

              </h3>

            </div>

          </div>

          <button

            onClick={closeRemoteSupport}

            className="w-8 h-8 rounded-full flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors"

            aria-label="Stäng"

          >

            <span className="material-symbols-outlined text-[20px]">close</span>

          </button>

        </div>



        {/* Content */}

        <div className="p-6 space-y-6 max-h-[80vh] overflow-y-auto">

          <p className="text-body-md text-on-surface-variant">

            Har du akuta problem med din dator, server eller nätverk? Med TeamViewer QuickSupport kan Ingemar koppla upp sig och felsöka på sekunder utan krångliga installationer.

          </p>



          {/* Big Download Button */}

          <a

            href="https://download.teamviewer.com/download/TeamViewerQS.exe"

            target="_blank"

            rel="noopener noreferrer"

            className="flex items-center justify-between p-4 rounded-xl bg-primary hover:bg-primary-container text-on-primary transition-all shadow-lg group"

          >

            <div className="flex items-center gap-3">

              <div className="w-12 h-12 rounded-lg bg-surface-container-lowest/20 flex items-center justify-center text-on-primary">

                <span className="material-symbols-outlined text-[28px]">download</span>

              </div>

              <div className="text-left">

                <p className="font-title-md text-title-md font-bold">Ladda ner TeamViewer QuickSupport</p>

                <p className="text-body-sm opacity-90">Officiell Windows/Mac-klient · Ingen installation behövs</p>

              </div>

            </div>

            <span className="material-symbols-outlined text-[24px] group-hover:translate-x-1 transition-transform">

              arrow_forward

            </span>

          </a>



          {/* 3 Step Guide */}

          <div className="space-y-3 pt-2">

            <h4 className="font-title-md text-title-md font-semibold text-on-surface flex items-center gap-2">

              <span className="material-symbols-outlined text-primary text-[20px]">format_list_numbered</span>

              <span>Så här enkelt fungerar det:</span>

            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">

              <div className="p-3.5 rounded-xl bg-surface-container-low border border-surface-container-high flex flex-col justify-between">

                <div>

                  <span className="w-6 h-6 rounded-full bg-primary text-on-primary font-bold text-xs flex items-center justify-center mb-2">1</span>

                  <h5 className="font-semibold text-body-sm text-on-surface mb-1">Ladda ner</h5>

                  <p className="text-body-sm text-on-surface-variant">Klicka på knappen ovan för att hämta TeamViewerQS.</p>

                </div>

              </div>

              <div className="p-3.5 rounded-xl bg-surface-container-low border border-surface-container-high flex flex-col justify-between">

                <div>

                  <span className="w-6 h-6 rounded-full bg-primary text-on-primary font-bold text-xs flex items-center justify-center mb-2">2</span>

                  <h5 className="font-semibold text-body-sm text-on-surface mb-1">Kör filen</h5>

                  <p className="text-body-sm text-on-surface-variant">Dubbelklicka på den nedladdade filen för att starta den direkt.</p>

                </div>

              </div>

              <div className="p-3.5 rounded-xl bg-surface-container-low border border-surface-container-high flex flex-col justify-between">

                <div>

                  <span className="w-6 h-6 rounded-full bg-primary text-on-primary font-bold text-xs flex items-center justify-center mb-2">3</span>

                  <h5 className="font-semibold text-body-sm text-on-surface mb-1">Uppge ID & kod</h5>

                  <p className="text-body-sm text-on-surface-variant">Ring oss och uppge ditt 9-siffriga ID och engångskod.</p>

                </div>

              </div>

            </div>

          </div>



          {/* Phone call prompt */}

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-xl bg-surface-container-low border border-outline-variant/30">

            <div className="flex items-center gap-3">

              <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary">

                <span className="material-symbols-outlined text-[20px]">call</span>

              </div>

              <div>

                <p className="text-body-sm text-on-surface-variant">Direktlinje till tekniker</p>

                <p className="font-headline-sm text-headline-sm font-bold text-on-surface">+46 737 360489</p>

              </div>

            </div>

            <a

              href="tel:+46737360489"

              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-secondary text-on-secondary font-title-md text-body-sm shadow hover:opacity-90 transition-all"

            >

              <span className="material-symbols-outlined text-[18px]">phone_in_talk</span>

              <span>Ring Ingemar nu</span>

            </a>

          </div>



          {/* Security footnote */}

          <div className="flex items-center gap-2 text-xs text-on-surface-variant border-t border-surface-container-high pt-4">

            <span className="material-symbols-outlined text-primary text-[16px]">verified_user</span>

            <span>256-bitars AES-kryptering. Ingen permanent åtkomst — sessionen bryts direkt när du stänger fönstret.</span>

          </div>

        </div>

      </div>

    </div>

  );

}

