'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useModal } from '../context/ModalContext';

const CONSENT_STORAGE_KEY = 'webbus_cookie_consent_v1';

export default function CookieConsent() {
  const { cookieSettingsOpen, closeCookieSettings, openCookieSettings } = useModal();
  const [mounted, setMounted] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const [isCustomizing, setIsCustomizing] = useState(false);

  // Granular cookie categories
  const [preferences, setPreferences] = useState({
    necessary: true, // Always true and cannot be disabled
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    setMounted(true);
    try {
      const stored = localStorage.getItem(CONSENT_STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        setPreferences({
          necessary: true,
          analytics: Boolean(parsed.analytics),
          marketing: Boolean(parsed.marketing),
        });
        setShowBanner(false);
      } else {
        // No consent given yet -> show banner
        setShowBanner(true);
      }
    } catch {
      setShowBanner(true);
    }
  }, []);

  // When reopened via ModalContext (e.g. from footer link)
  useEffect(() => {
    if (cookieSettingsOpen) {
      setIsCustomizing(true);
      setShowBanner(true);
    }
  }, [cookieSettingsOpen]);

  const saveConsent = (analyticsVal, marketingVal) => {
    const consentData = {
      necessary: true,
      analytics: analyticsVal,
      marketing: marketingVal,
      timestamp: new Date().toISOString(),
      version: '1.0',
    };

    try {
      localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(consentData));
    } catch (e) {
      console.warn('Could not save cookie preferences to localStorage', e);
    }

    setPreferences({
      necessary: true,
      analytics: analyticsVal,
      marketing: marketingVal,
    });

    // Notify any active analytics or embed services
    if (typeof window !== 'undefined') {
      window.cookieConsent = consentData;
      window.dispatchEvent(
        new CustomEvent('webbus_cookie_consent_updated', { detail: consentData })
      );
    }

    setShowBanner(false);
    setIsCustomizing(false);
    closeCookieSettings();
  };

  const handleAcceptAll = () => {
    saveConsent(true, true);
  };

  const handleAcceptNecessaryOnly = () => {
    saveConsent(false, false);
  };

  const handleSaveCustom = () => {
    saveConsent(preferences.analytics, preferences.marketing);
  };

  const handleClose = () => {
    if (cookieSettingsOpen) {
      closeCookieSettings();
    }
    // If they already have saved preferences, just close banner
    try {
      const stored = localStorage.getItem(CONSENT_STORAGE_KEY);
      if (stored) {
        setShowBanner(false);
        setIsCustomizing(false);
      } else {
        // If closing without selecting, default strictly to necessary only (GDPR compliant default)
        handleAcceptNecessaryOnly();
      }
    } catch {
      setShowBanner(false);
    }
  };

  if (!mounted) return null;

  return (
    <>
      {/* Small subtle badge in bottom-left corner to manage cookies anytime */}
      {!showBanner && (
        <button
          onClick={openCookieSettings}
          className="fixed bottom-4 left-4 z-40 flex items-center gap-2 px-3 py-2 rounded-full bg-surface-container-lowest/90 hover:bg-surface-container-low text-on-surface-variant hover:text-primary backdrop-blur-md border border-outline-variant/40 shadow-md hover:shadow-lg transition-all text-xs font-medium group"
          title="Hantera cookie-inställningar"
          aria-label="Hantera cookie-inställningar"
        >
          <span className="material-symbols-outlined text-[18px] text-primary group-hover:rotate-12 transition-transform">
            cookie
          </span>
          <span className="hidden sm:inline">Kakor & Integritet</span>
        </button>
      )}

      {/* Main Cookie Banner / Modal */}
      {showBanner && (
        <div
          className={`fixed z-50 ${
            isCustomizing || cookieSettingsOpen
              ? 'inset-0 flex items-center justify-center p-4 bg-inverse-surface/60 backdrop-blur-sm animate-in fade-in duration-200'
              : 'bottom-4 sm:bottom-6 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-xl animate-in slide-in-from-bottom-6 fade-in duration-300'
          }`}
          role="dialog"
          aria-modal={isCustomizing || cookieSettingsOpen}
          aria-labelledby="cookie-banner-title"
        >
          <div className="relative w-full bg-surface-container-lowest/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-outline-variant/50 overflow-hidden text-on-surface">
            {/* Top Accent Gradient Bar */}
            <div className="h-1.5 w-full bg-gradient-to-r from-primary via-secondary-container to-primary-fixed-dim"></div>

            <div className="p-5 sm:p-6 space-y-4 max-h-[85vh] overflow-y-auto">
              {/* Header */}
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary-fixed flex items-center justify-center text-primary shrink-0 shadow-sm">
                    <span className="material-symbols-outlined text-[24px]">cookie</span>
                  </div>
                  <div>
                    <h3
                      id="cookie-banner-title"
                      className="font-title-md text-title-md font-bold text-on-surface tracking-tight"
                    >
                      {isCustomizing ? 'Hantera dina cookie-inställningar' : 'Vi värnar om din integritet'}
                    </h3>
                    <p className="text-body-sm text-on-surface-variant">
                      Webbus följer EU:s dataskyddsförordning (GDPR) & ePrivacy-direktivet.
                    </p>
                  </div>
                </div>

                {/* Close X (visible in customize/reopen mode) */}
                {(isCustomizing || cookieSettingsOpen) && (
                  <button
                    onClick={handleClose}
                    className="w-8 h-8 rounded-full flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors shrink-0"
                    aria-label="Stäng"
                  >
                    <span className="material-symbols-outlined text-[20px]">close</span>
                  </button>
                )}
              </div>

              {/* Standard Informative View */}
              {!isCustomizing ? (
                <div className="space-y-4">
                  <p className="text-body-sm text-on-surface-variant leading-relaxed">
                    Vi använder kakor (cookies) för att ge dig en säker och fungerande upplevelse
                    på vår webbplats. Med ditt godkännande samlar vi även in anonymiserad data
                    för prestanda- och besöksanalys så att vi kontinuerligt kan optimera våra
                    digitala AI- och utvecklingstjänster.
                  </p>

                  <div className="flex items-center gap-2 text-xs text-on-surface-variant bg-surface-container-low p-2.5 rounded-xl border border-outline-variant/30">
                    <span className="material-symbols-outlined text-[16px] text-primary shrink-0">
                      verified_user
                    </span>
                    <span>
                      Inga icke-nödvändiga kakor aktiveras förrän du har gjort ditt aktiva val.
                    </span>
                  </div>

                  {/* Action Buttons (Equal prominence according to EDPB / GDPR guidelines) */}
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 pt-1">
                    <button
                      onClick={handleAcceptAll}
                      className="flex-1 inline-flex items-center justify-center py-2.5 px-4 rounded-full bg-primary hover:bg-primary-container text-on-primary font-semibold text-body-sm transition-all shadow-md active:scale-[0.98] text-center"
                    >
                      Godkänn alla
                    </button>
                    <button
                      onClick={handleAcceptNecessaryOnly}
                      className="flex-1 inline-flex items-center justify-center py-2.5 px-4 rounded-full bg-surface-container hover:bg-surface-container-high text-on-surface font-semibold text-body-sm transition-all border border-outline-variant/50 text-center"
                    >
                      Endast nödvändiga
                    </button>
                    <button
                      onClick={() => setIsCustomizing(true)}
                      className="inline-flex items-center justify-center py-2 px-3 text-body-sm text-on-surface-variant hover:text-primary transition-colors underline-offset-4 hover:underline text-center font-medium"
                    >
                      Anpassa
                    </button>
                  </div>
                </div>
              ) : (
                /* Granular Customization View */
                <div className="space-y-4 pt-1">
                  <p className="text-body-sm text-on-surface-variant">
                    Här kan du anpassa vilka typer av kakor du tillåter. Nödvändiga kakor krävs för
                    att webbplatsen ska fungera tryggt och kan därför inte stängas av.
                  </p>

                  {/* Categories */}
                  <div className="space-y-3">
                    {/* 1. Necessary (locked) */}
                    <div className="p-3.5 rounded-xl bg-surface-container-low border border-outline-variant/40 flex items-start justify-between gap-4">
                      <div className="space-y-1 pr-2">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-body-sm text-on-surface">
                            Strikt nödvändiga kakor
                          </span>
                          <span className="px-2 py-0.5 rounded-full bg-primary-fixed text-primary text-[10px] font-bold uppercase tracking-wider">
                            Krävs
                          </span>
                        </div>
                        <p className="text-xs text-on-surface-variant leading-relaxed">
                          Nödvändiga för navigering, säkerhet (skydd mot DDoS/CSRF), sessionsdata
                          och lagring av dina integritetsval.
                        </p>
                      </div>
                      <div className="pt-1">
                        <div
                          className="w-11 h-6 bg-primary/80 rounded-full flex items-center justify-end px-1 cursor-not-allowed opacity-90"
                          title="Strikt nödvändiga kakor kan inte stängas av"
                        >
                          <div className="w-4 h-4 rounded-full bg-white shadow-sm flex items-center justify-center">
                            <span className="material-symbols-outlined text-[12px] text-primary font-bold">
                              check
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 2. Analytics */}
                    <div className="p-3.5 rounded-xl bg-surface-container-lowest border border-outline-variant/40 flex items-start justify-between gap-4 hover:border-primary/40 transition-colors">
                      <div className="space-y-1 pr-2">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-body-sm text-on-surface">
                            Prestanda- & Analyskakor
                          </span>
                          <span className="px-2 py-0.5 rounded-full bg-surface-container text-on-surface-variant text-[10px] font-medium uppercase tracking-wider">
                            Valfritt
                          </span>
                        </div>
                        <p className="text-xs text-on-surface-variant leading-relaxed">
                          Hjälper oss mäta webbplatsens prestanda, laddtider och besöksflöden helt
                          anonymiserat för att förbättra användarupplevelsen.
                        </p>
                      </div>
                      <div className="pt-1">
                        <button
                          type="button"
                          role="switch"
                          aria-checked={preferences.analytics}
                          onClick={() =>
                            setPreferences((prev) => ({ ...prev, analytics: !prev.analytics }))
                          }
                          className={`w-11 h-6 rounded-full transition-colors flex items-center px-0.5 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                            preferences.analytics ? 'bg-primary' : 'bg-outline-variant'
                          }`}
                        >
                          <div
                            className={`w-5 h-5 rounded-full bg-white shadow-sm transition-transform ${
                              preferences.analytics ? 'translate-x-5' : 'translate-x-0'
                            }`}
                          />
                        </button>
                      </div>
                    </div>

                    {/* 3. Functional / Marketing */}
                    <div className="p-3.5 rounded-xl bg-surface-container-lowest border border-outline-variant/40 flex items-start justify-between gap-4 hover:border-primary/40 transition-colors">
                      <div className="space-y-1 pr-2">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-body-sm text-on-surface">
                            Funktionella & Marknadsföring
                          </span>
                          <span className="px-2 py-0.5 rounded-full bg-surface-container text-on-surface-variant text-[10px] font-medium uppercase tracking-wider">
                            Valfritt
                          </span>
                        </div>
                        <p className="text-xs text-on-surface-variant leading-relaxed">
                          Möjliggör externa integrationer (t.ex. inbäddat multimediainnehåll) och
                          anpassade preferenser.
                        </p>
                      </div>
                      <div className="pt-1">
                        <button
                          type="button"
                          role="switch"
                          aria-checked={preferences.marketing}
                          onClick={() =>
                            setPreferences((prev) => ({ ...prev, marketing: !prev.marketing }))
                          }
                          className={`w-11 h-6 rounded-full transition-colors flex items-center px-0.5 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                            preferences.marketing ? 'bg-primary' : 'bg-outline-variant'
                          }`}
                        >
                          <div
                            className={`w-5 h-5 rounded-full bg-white shadow-sm transition-transform ${
                              preferences.marketing ? 'translate-x-5' : 'translate-x-0'
                            }`}
                          />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Actions for Customization */}
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 pt-2 border-t border-surface-container-high">
                    <button
                      type="button"
                      onClick={() => setIsCustomizing(false)}
                      className="px-4 py-2 rounded-full border border-outline-variant/60 text-body-sm font-medium text-on-surface hover:bg-surface-container transition-colors text-center"
                    >
                      Tillbaka
                    </button>

                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                      <button
                        type="button"
                        onClick={handleAcceptNecessaryOnly}
                        className="px-4 py-2 rounded-full bg-surface-container hover:bg-surface-container-high text-on-surface font-semibold text-body-sm transition-colors border border-outline-variant/40 text-center"
                      >
                        Avvisa valfria
                      </button>
                      <button
                        type="button"
                        onClick={handleSaveCustom}
                        className="px-5 py-2 rounded-full bg-primary hover:bg-primary-container text-on-primary font-semibold text-body-sm transition-all shadow-md text-center"
                      >
                        Spara mina val
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Footer text with link to privacy info */}
              <div className="pt-2 border-t border-outline-variant/20 flex items-center justify-between text-xs text-on-surface-variant">
                <span>Lagras i upp till 12 månader</span>
                <Link
                  href="/kontakt"
                  onClick={handleClose}
                  className="text-primary hover:underline font-medium"
                >
                  Läs vår integritetspolicy
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
