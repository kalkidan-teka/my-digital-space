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
    roles: "Developer & Designer",
    tagline: "Code, creativity, faith, and everything in between.",
    portfolio: {
        title: "Explore my portfolio",
        description: "Projects, development, design",
        href: "#",
    },
};

export const linkGroups: LinkGroup[] = [
    {
        title: "Professional & creative",
        links: [
            { name: "GitHub", description: "Code & experiments", href: "#"},
            {
                name: "LinkedIn",
                description: "Professional journey & opportunities",
                href: "#",
            },
        ],
    },
    {
        title: "Around the internet",
        links:[
            { name: "Instagram", description: "Life & creative moments", href: "#"},
            { name: "TikTok", description: "Short videos, faith & ideas", href: "#"},
            { name: "Facebook", description: "Updates & community", href: "#"},
            { name: "Telegram", description: "Content & conversations", href:"#"},
        ],
    },
];

export const soundtrack = {
    title: "The soundtrack",
    heading: "Songs that keep me grounded.",
    subheading: "Worship on repeat. Truth to return to.",
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
    qoute: "Abide in me, and I in you.",
    reference: "John 15:4 (ESV)",
};
