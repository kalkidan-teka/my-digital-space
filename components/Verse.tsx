import { scripture } from "@/data/content";
import SectionTitle from "./SectionTitle";


 export default function Verse({ title, subheading, qoute, reference }: typeof scripture) {
    return (
        <section>
            <SectionTitle>{title}</SectionTitle>
                        <p className="mb-3.5 mt-1.5 text-steel">{subheading}</p>
            <figure className="border-t border-gold pt-8">
                <blockquote className="font-display text-[clamp(1.875rem,6vw,2.5rem)] italic leading-[1.15] tracking-tight">
                    "{qoute}"
                </blockquote>
                <figcaption className="mt-3.5 text-sm text-steel">{reference}</figcaption>
            </figure>
        </section>
    );
 }