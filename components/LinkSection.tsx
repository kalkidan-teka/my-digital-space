import type { LinkGroup } from "@/data/content";
import LinkRow from "./LinkRow";
import SectionTitle from "./SectionTitle";

export default function LinkSection({ title, links }: LinkGroup) {
    return (
        <section className="mb-10">
            <SectionTitle>{title}</SectionTitle>
            {links.map((link) => (
                <LinkRow key={link.name} {...link} />
            ))}
        </section>
    );
}