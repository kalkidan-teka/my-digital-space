import type { soundtrack } from "@/data/content";
import SectionTitle from "./SectionTitle";

export default function SongSection({
    title,
    heading,
    subheading,
    song,
}: typeof soundtrack) {
    return (
        <section className="mb-10">
            <SectionTitle>{title}</SectionTitle>
            <p className="font-display text-2xl font-bold leading-tight tracking-tight">
                {heading}
            </p>
            <p className="mb-3.5 mt-1.5 text-steel">{subheading}</p>
            <a href={song.href}
               className="flex items-center gap-4 rounded-2xl bg-card p-3.5"
            >
                <span
                  aria-hidden="true"
                  className="grid size-14 flex-none place-items-center rounded-full bg-[conic-gradient(from_30deg,#8e7f4c,#e6c36a,#8e7f4c)]"
                >
                    <span className="size-2.5 rounded-full bg-paper" />
                </span>
                <span>
                    <b className="block font-semibold">{song.title}</b>
                    <span className="text-sm text-muted">{song.artsist}</span>
                </span>
            </a>
        </section>
    );
}
