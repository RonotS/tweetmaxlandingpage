export interface NavItem {
    name: string;
    link: string;
    subMenu?: SubMenuItem[];
}

export interface SubMenuItem {
    subName: string;
    subLink: string;
}
export const navItems: NavItem[] = [
    {
        name: "Features",
        link: "features",
    },
    {
        name: "How to use",
        link: "howToUse",
    },
    {
        name: "Pricing",
        link: "pricing",
    },
    {
        name: "FAQs",
        link: "FAQs",
    },
];

export const navItems2: NavItem[] = [
    {
        name: "About TweetMax",
        link: "about-us",
    },
    {
        name: "Pricing",
        link: "/#pricing",
    },
    {
        name: "Contact Us",
        link: "contact-us",
    },
];
