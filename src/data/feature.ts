export interface FeatureTab {
    id: string;
    title: string;
    img: string;
    desc: string;
}

export const FeatureTabItems: FeatureTab[] = [
    {
        id: "tweetAutomations",
        title: "Tweet Automations",
        img: "tweetmax-dashboard.png",
        desc: "Schedule, queue, and auto-publish posts and threads. TweetMax handles long-form, drafts, and timing — so your feed stays alive while you don't.",
    },
    {
        id: "profileAutomations",
        title: "Profile Automations",
        img: "image-enhance.webp",
        desc: "Auto-follow, auto-reply, and auto-DM the right profiles. Every interaction routed to the right next step — without you touching the keyboard.",
    },
    {
        id: "autoDM",
        title: "Auto DM & Auto Plug",
        img: "video-creator.webp",
        desc: "Turn replies into revenue. Trigger DMs and product plugs the second a user likes, replies, or retweets — capture intent at its peak.",
    },
    {
        id: "calendar",
        title: "Content Calendar",
        img: "text-creator.webp",
        desc: "See every scheduled, published, and draft post on one calendar. Plan campaigns ahead and stay on rhythm without the spreadsheet juggling.",
    },
    {
        id: "analytics",
        title: "Engagement Analytics",
        img: "code-composer.webp",
        desc: "Track likes, retweets, replies, and auto-DMs sent on every post. Know which tweets actually move the needle — and double down on them.",
    },
    {
        id: "integrations",
        title: "Integrations",
        img: "website-builder.webp",
        desc: "Plug TweetMax into the tools you already use. Connect your 𝕏 account, your CRM, and your funnel — close the loop on every interaction.",
    },
];

export const featureTabItems2 = [
    {
        name: "Challenge",
        text_1: "Manually replying to every comment, DM, and mention on 𝕏 doesn't scale. Creators lose hours every week copy-pasting outreach, and most warm leads cool off before they ever see a reply.",
        text_2: "The shift to automated, interaction-triggered outreach changes the math entirely. Instead of chasing engagement after the fact, TweetMax captures intent in real time.",
    },
    {
        name: "Solution",
        text_1: "TweetMax sits between your 𝕏 account and your funnel — scheduling posts, routing replies, and firing DMs the second someone interacts. No more missed leads, no more late-night triage.",
        text_2: "Every reply, retweet, and like becomes a trigger. You define the rules once, and the system runs 24/7 — turning engagement into a steady stream of qualified conversations.",
    },
    {
        name: "The Results",
        text_1: "Creators using TweetMax report dramatically more booked calls, paid clients, and product sales from the same number of impressions. The audience didn't change — the response time did.",
        text_2: "Spend two minutes on setup, then get back to creating. The grind of manual outreach disappears, and the value of every interaction multiplies.",
    },
];
