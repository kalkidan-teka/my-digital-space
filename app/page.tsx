import LinkSection from "@/components/LinkSection";
import SongSection from "@/components/SongSection";
import Verse from "@/components/Verse";
import { linkGroups, profile, scripture, soundtrack } from "@/data/content";

export default function Home() {
  return (
    <div className="mx-auto max-w-270 px-6 pb-16 pt-6 md:px-10 md:pt-9 lg:pb-24">
      <header className="mb-11 flex items-baseline justify-between lg:mb-18">
        <span className="font-display text-2xl font-bold tracking-tight">
          Kal_kidan
        </span>
        <small className="text-sm text-muted">Personal web space</small>
      </header>

      <div className="grid gap-11 lg:grid-cols-[5fr_6fr] lg:items-start lg:gap-20">
        <section className="lg:sticky lg:top-8">
        <h1 className="font-display text-[clamp(2.75rem,11vw,4.75rem)] font-bold leading-[0.98] tracking-tight">
          Building things.
          <span className="block font-normal italic text-olive">
            Finding my way.
          </span>
        </h1>
        <p className="mb-1.5 mt-5 font-semibold">{profile.roles}</p>
        <p className="mb-7 max-w-[34ch] text-steel">{profile.tagline}</p>
        <a 
          href={profile.portfolio.href}
          className="flex items-cenetr justify-between gap-5 rounded-2xl border border-gold bg-card px-5 py-5 transition hover:-translate-y-0.5 motion-reduce:transition-none"
        >
          <span>
            <b className="block font-display text-xl font-bold">
              {profile.portfolio.title}            
            </b>
            <small className="text-muted">
              {profile.portfolio.description}
            </small>
          </span>
          <i
            aria-hidden="true"
            className="size-11 flex-none rounded-[0_100%_0_100%] bg-gold"
          />
        </a>
      </section>

      <main className="relative pl-8.5 before:absolute before:bottom-1.5 before:left-1.75 before:top-1.5 before:w-0.5 before:rounded-full before:bg-line">
        {linkGroups.map((group) => (
          <LinkSection key={group.title} {...group} />
        ))}
        <SongSection {...soundtrack} />
        <Verse {...scripture}/>  
      </main>
      </div>
    </div>
  );
}