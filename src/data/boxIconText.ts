export interface BoxIconTextProp {
    image_icon: string;
    title: string;
    sub_title: string;
    href?: string;
}

export const boxIconTextProps: BoxIconTextProp[] = [
    {
        image_icon: "platform.svg",
        title: "All-in-one platform",
        sub_title: "No more juggling tabs. TweetMax unifies scheduling, replies, DMs, and analytics.",
    },
    {
        image_icon: "ai-core.svg",
        title: "Auto-DM engine",
        sub_title: "Fire personalized DMs the second a user likes, replies, or retweets your posts.",
    },
    {
        image_icon: "control.svg",
        title: "Trigger-level control",
        sub_title: "Define exactly what fires on each interaction — control without the overwhelm.",
    },
    {
        image_icon: "speed.svg",
        title: "Speed that scales",
        sub_title: "From solo to teams, TweetMax fires outreach within seconds of every interaction.",
    },
    {
        image_icon: "secure.svg",
        title: "Secure by design",
        sub_title: "Your account and audience stay protected. We never store or share your data.",
    },
    {
        image_icon: "evolving.svg",
        title: "Always evolving",
        sub_title: "TweetMax ships weekly improvements to automations, dashboards, and integrations — free.",
    },
];

export const boxIconTextProps2: BoxIconTextProp[] = [
    {
        image_icon: "setting.svg",
        title: "Request a demo",
        sub_title: "See how TweetMax automates your 𝕏 outreach end to end — book a 15-minute walkthrough.",
        href: "mailto:info@tweetmax.io?subject=Demo%20request",
    },
    {
        image_icon: "support.svg",
        title: "Customer support",
        sub_title: "Need help with your automations or account? Our support team replies within one business day.",
        href: "mailto:info@tweetmax.io?subject=Support%20request",
    },
    {
        image_icon: "partner.svg",
        title: "Partnerships",
        sub_title: "Run an agency or 𝕏 creator community? Let's talk about co-marketing and revenue-share deals.",
        href: "mailto:info@tweetmax.io?subject=Partnership%20inquiry",
    },
];
