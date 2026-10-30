import { title } from "process";

export type LinkItem = {
    name: string;
    description: string;
    href: string;
};

export type LinkGroup = {
    title: string;
    links: LinkItem[];    
};

export const profile = {
    name: "kalkidan",
    headline: "Hey, I'm Kal.",
    roles: "Developer + Designer",
    tagline: "Code, design, faith, and whatever else I'm into.",
    portfolio: {
        title: "Explore my portfolio",
        description: "stuff I built and designed",
        href: "https://kalkidanteka.pro.et",
    },
};

export const linkGroups: LinkGroup[] = [
    {
        title: "The work stuff",
        links: [
            { name: "GitHub", description: "code & experiments", href: "https://github.com/kalkidan-teka"},
            {
                name: "LinkedIn",
                description: "the professional side",
                href: "https://www.linkedin.com/in/kalkidan-teka",
            },
        ],
    },
    {
        title: "Find me online",
        links:[
            { name: "Instagram", description: "life and creative moments", href: "https://www.instagram.com/_kalkidanteka_"},
            { name: "TikTok", description: "short videos, faith and random ideas", href: "https://www.tiktok.com/@_grateful.soul_"},
            { name: "Facebook", description: "updates and community", href: "https://www.facebook.com/share/1T5N7TbBm9/"},
            { name: "Telegram", description: "where we can actually talk", href:"https://t.me/kal_notes"},
        ],
    },
];

export const soundtrack = {
    title: "The soundtrack",
    // heading: "Songs that keep me grounded.",
    subheading: "a song I keep coming back to.",
    song: {
        // title: "Your song title here",
        // artist: "Artist name",
        href: "https://open.spotify.com/track/7n1HpNrQc9qY1ZRTghczNv",
        embedUrl:
            "https://open.spotify.com/embed/track/7n1HpNrQc9qY1ZRTghczNv?utm_source=generator&theme=0",
    },
};

export const scripture = {
    title: "Scripture",
    subheading: "a verse I'm holding onto",
    qoute: "Abide in me, and I in you.",
    reference: "John 15:4 (ESV)",
};
