import './globals.css';

import { ModalProvider } from '../context/ModalContext';

import Navbar from '../components/Navbar';

import Footer from '../components/Footer';

import BookingModal from '../components/BookingModal';

import RemoteSupportModal from '../components/RemoteSupportModal';



export const metadata = {
  title: 'Webbus · Modern AI-implementering & Systemutveckling i Kiruna',
  description: 'Webbus hjälper företag att omsätta modern AI (Claude, Gemini, GPT) och robust mjukvaruutveckling i mätbar affärsnytta. Med lokal Kirunanärvaro och 100% nöjd-kundgaranti.',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};



export default function RootLayout({ children }) {

  return (

    <html lang="sv" className="scroll-smooth">

      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />

        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        <link

          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap"

          rel="stylesheet"

        />

        <link

          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"

          rel="stylesheet"

        />

      </head>

      <body className="bg-background text-on-surface antialiased font-body-md min-h-screen flex flex-col">

        <ModalProvider>

          <Navbar />

          <main className="flex-1 pt-20">

            {children}

          </main>

          <Footer />

          <BookingModal />

          <RemoteSupportModal />

        </ModalProvider>

      </body>

    </html>

  );

}

