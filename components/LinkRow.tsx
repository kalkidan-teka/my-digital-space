import type { LinkItem } from "@/data/content";

export default function LinkRow({ name, description, href}: LinkItem) {
    return(
        <a 
          href={href} 
          className="group relative block border-b border-line py-4 last:border-b-0"
          >
            <span
              aria-hidden="true"
              className="absolute -left-7.75 top-6 size-2.5 rounded-[0_100%_0_100%] bg-line transition duration-200 group-hover:rotate-12 group-hover:scale-150 group-hover:bg-gold motion-reduce:transition-none"
            />
            <b className="block text-lg font-semibold">{name}</b>
            <span className="text-sm text-muted">{description}</span>
        </a>
    );
}