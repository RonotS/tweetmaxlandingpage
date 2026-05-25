export interface FeatureTab {
    id: string;
    title: string;
    img: string;
    desc: string;
}

// Image filename convention: kebab-case of the tab id, saved as .png in
// public/assets/images/section/. Drop screenshots in at the exact paths below.
//   tweetAutomations    -> tweet-automations.png
//   profileAutomations  -> profile-automations.png
//   contentCalendar     -> content-calendar.png
//   engagementAnalytics -> engagement-analytics.png
//   integrations        -> integrations.png
export const FeatureTabItems: FeatureTab[] = [
    {
        id: "tweetAutomations",
        title: "Tweet Automations",
        img: "tweet-automations.png",
        desc: "Schedule, queue, and auto-publish posts and threads. TweetMax handles long-form, drafts, and timing — so your feed stays alive while you don't.",
    },
    {
        id: "profileAutomations",
        title: "Profile Automations",
        img: "profile-automations.png",
        desc: "Auto-follow, auto-reply, and route every interaction to the right next step — without you touching the keyboard.",
    },
    {
        id: "contentCalendar",
        title: "Content Calendar",
        img: "content-calendar.png",
        desc: "See every scheduled, published, and draft post on one calendar. Plan campaigns ahead and stay on rhythm without the spreadsheet juggling.",
    },
    {
        id: "engagementAnalytics",
        title: "Engagement Analytics",
        img: "engagement-analytics.png",
        desc: "Track likes, retweets, replies, and auto-DMs sent on every post. Know which tweets actually move the needle — and double down on them.",
    },
    // Integrations tab hidden until the product is live. Uncomment to restore.
    // {
    //     id: "integrations",
    //     title: "Integrations",
    //     img: "integrations.png",
    //     desc: "Plug TweetMax into the tools you already use. Connect your 𝕏 account, your CRM, and your funnel — close the loop on every interaction.",
    // },
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
