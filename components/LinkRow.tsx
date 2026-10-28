import type { LinkItem } from "@/data/content";

export default function LinkRow({ name, description, href}: LinkItem) {
    return(
        <a href={href} className="block border-b border-line py-4 last:border-b-0">
            <b className="block text-lg font-semibold">{name}</b>
            <span className="text-sm text-muted">{description}</span>
        </a>
    );
}