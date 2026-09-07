'use client';



import React, { useState } from 'react';

import { useModal } from '../context/ModalContext';



export default function AiRoiCalculator() {

  const { openBooking } = useModal();

  const [employees, setEmployees] = useState(8);

  const [hourlyRate, setHourlyRate] = useState(650);

  const [repetitiveHours, setRepetitiveHours] = useState(8);



  // Assumptions based on Webbus benchmarks:

  // 65% of repetitive work is automated with tailored LLM pipelines

  const savedHoursPerEmployeeWeekly = Math.round(repetitiveHours * 0.65 * 10) / 10;

  const totalSavedHoursMonthly = Math.round(savedHoursPerEmployeeWeekly * employees * 4.3);

  const monthlySavingsSEK = Math.round(totalSavedHoursMonthly * hourlyRate);

  const annualSavingsSEK = Math.round(monthlySavingsSEK * 12);



  return (

    <div className="w-full p-6 sm:p-8 rounded-2xl bg-surface-container-lowest border border-outline-variant/40 shadow-xl">

      <div className="flex flex-col lg:flex-row gap-8 items-center">

        {/* Left: Interactive Controls */}

        <div className="flex-1 w-full space-y-6">

          <div>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-fixed text-primary font-label-sm text-label-sm font-semibold mb-2">

              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>

              <span>Interaktiv ROI-kalkylator</span>

            </div>

            <h3 className="font-headline-md text-headline-md text-on-surface font-bold">

              Beräkna företagets AI-vinst

            </h3>

            <p className="text-body-md text-on-surface-variant mt-1">

              Se hur mycket tid och pengar din organisation kan frigöra varje månad genom att automatisera repetitiv text-, data- och avtalsadministration med Webbus skräddarsydda AI-modeller.

            </p>

          </div>



          <div className="space-y-4 pt-2">

            {/* Slider 1: Employees */}

            <div>

              <div className="flex justify-between items-center mb-1 text-body-sm font-medium">

                <span className="text-on-surface">Antal medarbetare:</span>

                <span className="font-bold text-primary text-base">{employees} personer</span>

              </div>

              <input

                type="range"

                min="1"

                max="50"

                value={employees}

                onChange={(e) => setEmployees(Number(e.target.value))}

                className="w-full accent-primary h-2 bg-surface-container rounded-lg cursor-pointer"

              />

              <div className="flex justify-between text-[11px] text-on-surface-variant mt-0.5">

                <span>1 pers</span>

                <span>25 pers</span>

                <span>50 pers</span>

              </div>

            </div>



            {/* Slider 2: Hourly Rate */}

            <div>

              <div className="flex justify-between items-center mb-1 text-body-sm font-medium">

                <span className="text-on-surface">Genomsnittlig timkostnad (lön+omkostnader):</span>

                <span className="font-bold text-primary text-base">{hourlyRate} kr/h</span>

              </div>

              <input

                type="range"

                min="350"

                max="1200"

                step="50"

                value={hourlyRate}

                onChange={(e) => setHourlyRate(Number(e.target.value))}

                className="w-full accent-primary h-2 bg-surface-container rounded-lg cursor-pointer"

              />

              <div className="flex justify-between text-[11px] text-on-surface-variant mt-0.5">

                <span>350 kr</span>

                <span>750 kr</span>

                <span>1 200 kr</span>

              </div>

            </div>



            {/* Slider 3: Repetitive Hours */}

            <div>

              <div className="flex justify-between items-center mb-1 text-body-sm font-medium">

                <span className="text-on-surface">Repetitiva timmar / anställd / vecka:</span>

                <span className="font-bold text-primary text-base">{repetitiveHours} timmar</span>

              </div>

              <input

                type="range"

                min="2"

                max="20"

                value={repetitiveHours}

                onChange={(e) => setRepetitiveHours(Number(e.target.value))}

                className="w-full accent-primary h-2 bg-surface-container rounded-lg cursor-pointer"

              />

              <div className="flex justify-between text-[11px] text-on-surface-variant mt-0.5">

                <span>2 h (låg)</span>

                <span>10 h (medel)</span>

                <span>20 h (hög)</span>

              </div>

            </div>

          </div>

        </div>



        {/* Right: Calculated Metrics Board */}

        <div className="w-full lg:w-96 p-6 rounded-2xl bg-gradient-to-br from-surface-container to-surface-container-high border border-surface-container-highest shadow-inner flex flex-col justify-between space-y-6">

          <div className="space-y-4">

            <div className="flex items-center justify-between pb-3 border-b border-outline-variant/30">

              <span className="text-body-sm text-on-surface-variant">Frigjord tid per månad:</span>

              <span className="font-headline-sm text-headline-sm font-bold text-primary">

                {totalSavedHoursMonthly.toLocaleString('sv-SE')} timmar

              </span>

            </div>



            <div className="flex items-center justify-between pb-3 border-b border-outline-variant/30">

              <span className="text-body-sm text-on-surface-variant">Tid per person / vecka:</span>

              <span className="font-title-md text-title-md font-semibold text-on-surface">

                ~{savedHoursPerEmployeeWeekly} h

              </span>

            </div>



            <div className="bg-surface-container-lowest/80 p-4 rounded-xl border border-surface-container-highest">

              <p className="text-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-medium">

                Månatlig värdeökning / besparing

              </p>

              <p className="font-headline-lg text-headline-lg font-bold text-primary mt-1">

                {monthlySavingsSEK.toLocaleString('sv-SE')} kr

              </p>

              <p className="text-body-sm text-on-surface-variant mt-1">

                Motsvarar <strong className="text-on-surface">{annualSavingsSEK.toLocaleString('sv-SE')} kr / år</strong> i frigjord kapacitet.

              </p>

            </div>

          </div>



          <button

            onClick={() => openBooking('AI-produktivitet & Arbetsflöden')}

            className="w-full py-3 px-4 rounded-full bg-primary hover:bg-primary-container text-on-primary font-title-md text-body-sm font-semibold transition-all shadow-md active:scale-[0.98] flex items-center justify-center gap-2"

          >

            <span>Hämta hem vinsten – Boka förstudie</span>

            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>

          </button>

        </div>

      </div>

    </div>

  );

}

