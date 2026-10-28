import { scripture } from "@/data/content";
import SectionTitle from "./SectionTitle";


 export default function Verse({ title, qoute, reference }: typeof scripture) {
    return (
        <section>
            <SectionTitle>{title}</SectionTitle>
            <figure className="border-t border-gold pt-8">
                <blockquote className="font-display text-[clamp(1.875rem,6vm,2.5rem)] italic leading-[1.15] tracking-tight">
                    "{qoute}"
                </blockquote>
                <figcaption className="mt-3.5 text-sm text-steel">{reference}</figcaption>
            </figure>
        </section>
    );
 }