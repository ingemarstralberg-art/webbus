import Link from 'next/link';



export default function NotFound() {

  return (

    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">

      <span className="font-code-mono text-primary font-bold text-lg bg-surface-container px-3 py-1 rounded-full mb-4">

        404 · Sidan hittades inte

      </span>

      <h1 className="font-display-hero text-headline-lg md:text-display-hero text-on-surface font-bold mb-4">

        Hoppsan! Den här noden finns inte.

      </h1>

      <p className="text-body-md text-on-surface-variant max-w-md mb-8">

        Sidan du letar efter kan ha flyttats eller tagits bort under vår uppdatering till nya moderna Webbus.

      </p>

      <Link

        href="/"

        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary hover:bg-primary-container text-on-primary font-bold text-body-sm transition-all shadow"

      >

        <span className="material-symbols-outlined text-[18px]">home</span>

        <span>Tillbaka till startsidan</span>

      </Link>

    </div>

  );

}

