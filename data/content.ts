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
    tagline: "Code, design , faith, and whatever else i'm into.",
    portfolio: {
        title: "Explore my portfolio",
        description: "stuff I built and designed",
        href: "#",
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
            { name: "Instagram", description: "life and creative moments", href: "https://www.instagram.com/_kalkidanteka_?exln=d2tuZWNyZ3B3NHY1"},
            { name: "TikTok", description: "short videos, faith and random ideas", href: "https://www.tiktok.com/@_grateful.soul_?_r=1&_d=f649jklb3j43l0&sec_uid=MS4wLjABAAAAenChJLrgn2QPEAaqqQJNsWEgAUskxuUR7S1MiSS7oiPP-oCmsfVZ2w0a9oD8GSrF&share_author_id=7342151557934449669&sharer_language=en&source=h5_m&u_code=ed0i3gbe750ll6&timestamp=1793367531&user_id=7342151557934449669&sec_user_id=MS4wLjABAAAAenChJLrgn2QPEAaqqQJNsWEgAUskxuUR7S1MiSS7oiPP-oCmsfVZ2w0a9oD8GSrF&item_author_type=1&utm_source=copy&utm_campaign=client_share&utm_medium=android&share_iid=7696254410000058132&share_link_id=2da6d6bc-bd47-4e37-9c82-e7340e6836b9&share_app_id=1233&ugbiz_name=ACCOUNT&ug_btm=b8727%2CEnlargeAvatarActivity&social_share_type=5&share_enter_from=personal_homepage&item_author_type=1&enable_checksum=1"},
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
