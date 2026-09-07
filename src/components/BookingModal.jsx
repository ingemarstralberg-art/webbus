'use client';



import React, { useState, useEffect } from 'react';

import { useModal } from '../context/ModalContext';



export default function BookingModal() {

  const { bookingOpen, bookingTopic, closeBooking } = useModal();

  const [formData, setFormData] = useState({

    name: '',

    email: '',

    phone: '',

    company: '',

    topic: 'AI-produktivitet & Arbetsflöden',

    preferredDate: '',

    preferredTime: '10:00',

    notes: '',

  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [isSubmitted, setIsSubmitted] = useState(false);



  useEffect(() => {

    if (bookingTopic) {

      setFormData((prev) => ({ ...prev, topic: bookingTopic }));

    }

  }, [bookingTopic]);



  if (!bookingOpen) return null;



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

      email: '',

      phone: '',

      company: '',

      topic: 'AI-produktivitet & Arbetsflöden',

      preferredDate: '',

      preferredTime: '10:00',

      notes: '',

    });

    closeBooking();

  };



  return (

    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-inverse-surface/60 backdrop-blur-sm animate-in fade-in duration-200">

      <div className="relative w-full max-w-xl bg-surface-container-lowest rounded-2xl shadow-2xl border border-outline-variant/40 overflow-hidden">

        {/* Modal Header */}

        <div className="flex items-center justify-between px-6 py-4 border-b border-surface-container-high bg-surface-container-low/60">

          <div className="flex items-center gap-3">

            <div className="w-9 h-9 rounded-lg bg-primary-fixed flex items-center justify-center text-primary">

              <span className="material-symbols-outlined text-[22px]">event_available</span>

            </div>

            <div>

              <h3 className="font-title-md text-title-md font-bold text-on-surface">Boka förutsättningslöst möte</h3>

              <p className="text-body-sm text-on-surface-variant">30 min strategiskt samtal med Ingemar Strålberg</p>

            </div>

          </div>

          <button

            onClick={closeBooking}

            className="w-8 h-8 rounded-full flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors"

            aria-label="Stäng"

          >

            <span className="material-symbols-outlined text-[20px]">close</span>

          </button>

        </div>



        {/* Modal Body */}

        <div className="p-6 max-h-[80vh] overflow-y-auto">

          {isSubmitted ? (

            <div className="text-center py-6 space-y-4">

              <div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center text-primary mx-auto">

                <span className="material-symbols-outlined text-[36px]">check_circle</span>

              </div>

              <h4 className="font-headline-sm text-headline-sm font-bold text-on-surface">

                Tack! Din mötesförfrågan är mottagen.

              </h4>

              <p className="text-body-md text-on-surface-variant max-w-md mx-auto">

                Vi har skickat en preliminär bekräftelse till <strong className="text-on-surface">{formData.email}</strong>. Ingemar återkommer inom kort med mötesinbjudan och agenda.

              </p>

              <div className="p-4 rounded-xl bg-surface-container-low text-left max-w-sm mx-auto text-body-sm space-y-1">

                <p><strong>Ämne:</strong> {formData.topic}</p>

                <p><strong>Önskat datum:</strong> {formData.preferredDate || 'Snarast möjligt'} kl {formData.preferredTime}</p>

                <p><strong>Kontaktperson:</strong> {formData.name} {formData.company ? `(${formData.company})` : ''}</p>

              </div>

              <button

                onClick={handleReset}

                className="mt-4 inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-primary hover:bg-primary-container text-on-primary font-semibold text-body-sm transition-all shadow-sm"

              >

                Klar och stäng

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

                  <label className="block text-body-sm font-medium text-on-surface mb-1">Företag / Organisation</label>

                  <input

                    type="text"

                    placeholder="Företagsnamn"

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

                <label className="block text-body-sm font-medium text-on-surface mb-1">Primärt diskussionsområde</label>

                <select

                  value={formData.topic}

                  onChange={(e) => setFormData({ ...formData, topic: e.target.value })}

                  className="w-full px-3 py-2 rounded-lg border border-outline-variant/60 bg-surface-container-lowest focus:border-primary focus:outline-none text-body-sm"

                >

                  <option value="AI-produktivitet & Arbetsflöden">AI-produktivitet & Arbetsflöden (Claude, Gemini, GPT)</option>

                  <option value="AI-driven Webb & Systemutveckling">AI-driven Webb & Systemutveckling</option>

                  <option value="Företagsdrift, Moln & Containers">Företagsdrift, Moln & Containers (Docker/Kubernetes)</option>

                  <option value="Akut IT-support & Rådgivning">Akut IT-support & Löpande rådgivning</option>

                  <option value="Övrigt">Annat / Allmän förstudie</option>

                </select>

              </div>



              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                <div>

                  <label className="block text-body-sm font-medium text-on-surface mb-1">Önskat datum</label>

                  <input

                    type="date"

                    value={formData.preferredDate}

                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}

                    className="w-full px-3 py-2 rounded-lg border border-outline-variant/60 bg-surface-container-lowest focus:border-primary focus:outline-none text-body-sm"

                  />

                </div>

                <div>

                  <label className="block text-body-sm font-medium text-on-surface mb-1">Önskad tidpunkt</label>

                  <select

                    value={formData.preferredTime}

                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}

                    className="w-full px-3 py-2 rounded-lg border border-outline-variant/60 bg-surface-container-lowest focus:border-primary focus:outline-none text-body-sm"

                  >

                    <option value="09:00">09:00 - 09:30</option>

                    <option value="10:00">10:00 - 10:30</option>

                    <option value="11:00">11:00 - 11:30</option>

                    <option value="13:00">13:00 - 13:30</option>

                    <option value="14:00">14:00 - 14:30</option>

                    <option value="15:00">15:00 - 15:30</option>

                  </select>

                </div>

              </div>



              <div>

                <label className="block text-body-sm font-medium text-on-surface mb-1">Kort beskrivning eller frågor</label>

                <textarea

                  rows="3"

                  placeholder="Beskriv kort vad ni vill uppnå eller era nuvarande utmaningar..."

                  value={formData.notes}

                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}

                  className="w-full px-3 py-2 rounded-lg border border-outline-variant/60 bg-surface-container-lowest focus:border-primary focus:outline-none text-body-sm"

                ></textarea>

              </div>



              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">

                <div className="flex items-center gap-1.5 text-body-sm text-on-surface-variant">

                  <span className="material-symbols-outlined text-primary text-[18px]">lock</span>

                  <span>100% konfidentiellt & kostnadsfritt</span>

                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto justify-end">

                  <button

                    type="button"

                    onClick={closeBooking}

                    className="px-4 py-2 rounded-full border border-outline-variant/60 text-body-sm font-medium text-on-surface hover:bg-surface-container-low transition-colors"

                  >

                    Avbryt

                  </button>

                  <button

                    type="submit"

                    disabled={isSubmitting}

                    className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-primary hover:bg-primary-container text-on-primary font-semibold text-body-sm transition-all shadow-md disabled:opacity-50"

                  >

                    {isSubmitting ? (

                      <>

                        <span className="w-4 h-4 border-2 border-on-primary border-t-transparent rounded-full animate-spin"></span>

                        <span>Skickar...</span>

                      </>

                    ) : (

                      <>

                        <span>Skicka bokning</span>

                        <span className="material-symbols-outlined text-[16px]">send</span>

                      </>

                    )}

                  </button>

                </div>

              </div>

            </form>

          )}

        </div>

      </div>

    </div>

  );

}

