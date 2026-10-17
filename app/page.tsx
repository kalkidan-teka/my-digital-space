import Image from "next/image";

export default function Home() {
  return (
    <div className="mx-auto max-w-270 px-6 pb-16 pt-6 md:px-10 md:pt-9 lg:pb-24">
      <header className="mb-11 flex items-baseline justify-between lg:mb-18">
        <span className="font-display text-2xl font-bold tracking-tight">
          Kalkidan Teka
        </span>
        <small className="text-sm text-muted">Personal web space</small>
      </header>

      <div className="grid gap-11 lg:grid-cols-[5fr_6fr] lg:items-start lg:gap-20">
        <section className="lg:sticky lg:top-8">
        <h1 className="font-display text-[clamp(2.75rem,11vm,4.75rem)] font-bold leading-[0.98] tracking-tight">
          Building things.
          <span className="block font-normal italic text-olive">
            Finding my way.
          </span>
        </h1>
        <p className="mb-1.5 mt-5 font-semibold">
           Developer & Designer
        </p>
        <p className="mb-7 max-w-[34ch] text-steel">
          Code, creativity, faith, and everything in between.
        </p>
        <a href="#" 
           className="flex items-cenetr justify-between gap-5 rounded-2xl border-gold bg-card px-5 py-5"
        >
          <span>
            <b className="block font-display text-xl font-bold">
              Explore my portfolio
            </b>
            <small className="text-muted">
              Projects, Development, Design
            </small>
          </span>
        </a>
      </section>

      <main>
        <p className="text-muted">Links go here.</p>
      </main>
      </div>
    </div>
  );
}