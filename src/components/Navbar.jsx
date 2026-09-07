'use client';



import React, { useState } from 'react';

import Link from 'next/link';

import Image from 'next/image';

import { usePathname } from 'next/navigation';

import { useModal } from '../context/ModalContext';



export default function Navbar() {

  const pathname = usePathname();

  const { openBooking, openRemoteSupport } = useModal();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);



  const navLinks = [

    { name: 'Start / Hem', href: '/' },

    { name: 'Tjänster', href: '/tjanster' },

    { name: 'Om & Team', href: '/om-team' },

    { name: 'Kunder & Referenser', href: '/kunder' },

    { name: 'Kontakt', href: '/kontakt' },

  ];



  const isActive = (href) => {

    if (href === '/') return pathname === '/';

    return pathname.startsWith(href);

  };



  return (

    <header className="fixed top-0 w-full z-40 bg-surface/90 backdrop-blur-xl border-b border-surface-container-high/60 shadow-[0_1px_8px_rgba(0,0,0,0.04)]">

      <div className="h-20 max-w-[1280px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop flex items-center justify-between gap-space-md">

        {/* Left: Brand Logo & Desktop Nav */}

        <div className="flex items-center gap-space-lg">

          <Link href="/" className="flex items-center gap-space-xs transition-opacity hover:opacity-90">

            <div className="relative h-12 w-48 sm:w-52">

              <Image

                src="/images/logo.png"

                alt="Webbus logotyp"

                fill

                className="object-contain object-left"

                priority

              />

            </div>

          </Link>



          <nav className="hidden xl:flex items-center gap-1">

            {navLinks.map((link) => {

              const active = isActive(link.href);

              return (

                <Link

                  key={link.href}

                  href={link.href}

                  className={`font-body-sm text-body-sm transition-all py-1.5 px-3 rounded-full ${

                    active

                      ? 'text-primary font-bold bg-surface-container-low shadow-sm'

                      : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-lowest/60'

                  }`}

                >

                  {link.name}

                </Link>

              );

            })}

          </nav>

        </div>



        {/* Right: Actions */}

        <div className="flex items-center gap-2 sm:gap-space-sm">

          {/* Phone call CTA (Desktop/Tablet) */}

          <a

            href="tel:+46737360489"

            className="hidden lg:flex items-center gap-1.5 py-1.5 px-3 rounded-full bg-surface-container-low hover:bg-surface-container hover:text-on-surface text-on-surface-variant font-label-md text-label-md transition-colors"

          >

            <span className="material-symbols-outlined text-[16px] text-primary">call</span>

            <span>+46 737 360489</span>

          </a>



          {/* Quick Remote Support Trigger */}

          <button

            onClick={openRemoteSupport}

            className="hidden sm:flex items-center gap-1.5 py-1.5 px-3 rounded-full bg-surface-container-highest hover:bg-surface-dim text-on-surface font-label-md text-label-md transition-colors"

          >

            <span className="material-symbols-outlined text-[16px] text-secondary">download</span>

            <span>Fjärrsupport (Hjälp!)</span>

          </button>



          {/* Book Meeting Trigger */}

          <button

            onClick={() => openBooking()}

            className="flex items-center justify-center py-2 px-4 sm:px-5 rounded-full bg-primary hover:bg-primary-container text-on-primary font-title-md text-body-sm shadow-[0_0_25px_-5px_rgba(14,165,233,0.2)] transition-all active:scale-[0.98]"

          >

            <span className="hidden xs:inline">Boka förutsättningslöst möte</span>

            <span className="xs:hidden">Boka möte</span>

          </button>



          {/* Mobile Menu Hamburger */}

          <button

            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}

            className="xl:hidden w-10 h-10 rounded-full bg-surface-container-low hover:bg-surface-container flex items-center justify-center text-on-surface transition-colors"

            aria-label="Meny"

          >

            <span className="material-symbols-outlined text-[24px]">

              {mobileMenuOpen ? 'close' : 'menu'}

            </span>

          </button>

        </div>

      </div>



      {/* Mobile Navigation Drawer */}

      {mobileMenuOpen && (

        <div className="xl:hidden bg-surface-container-lowest border-b border-surface-container-high px-6 py-4 shadow-xl animate-in slide-in-from-top-2 duration-200">

          <nav className="flex flex-col space-y-2">

            {navLinks.map((link) => {

              const active = isActive(link.href);

              return (

                <Link

                  key={link.href}

                  href={link.href}

                  onClick={() => setMobileMenuOpen(false)}

                  className={`py-2 px-3 rounded-xl text-body-md font-medium transition-colors ${

                    active

                      ? 'bg-surface-container text-primary font-bold'

                      : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low'

                  }`}

                >

                  {link.name}

                </Link>

              );

            })}

          </nav>



          <div className="mt-4 pt-4 border-t border-surface-container flex flex-col gap-2.5">

            <button

              onClick={() => {

                setMobileMenuOpen(false);

                openRemoteSupport();

              }}

              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-surface-container-highest text-on-surface font-label-md text-body-sm"

            >

              <span className="material-symbols-outlined text-[18px] text-secondary">download</span>

              <span>Akut Fjärrsupport (TeamViewer)</span>

            </button>

            <a

              href="tel:+46737360489"

              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-surface-container-low text-on-surface font-label-md text-body-sm"

            >

              <span className="material-symbols-outlined text-[18px] text-primary">call</span>

              <span>Ring direkt: +46 737 360489</span>

            </a>

          </div>

        </div>

      )}

    </header>

  );

}

