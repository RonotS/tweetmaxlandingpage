interface stepItem {
    id: string;
    number: string;
    title: string;
    desc: string;
    image: string;
}

export const stepItems: stepItem[] = [
    {
        id: "step1",
        number: "STEP 01",
        title: "Connect your 𝕏 account",
        desc: "One-click connect. TweetMax pairs with your 𝕏 profile in seconds — no copy-pasted tokens, no friction.",
        image: "step-1.webp",
    },
    {
        id: "step2",
        number: "STEP 02",
        title: "Set your automations",
        desc: "Pick your triggers — likes, replies, retweets — and queue the posts, replies, and DMs you want fired automatically.",
        image: "step-2.webp",
    },
    {
        id: "step3",
        number: "STEP 03",
        title: "Convert on autopilot",
        desc: "Watch every interaction route itself: scheduled posts go live, DMs land at peak intent, leads land in your inbox.",
        image: "step-3.webp",
    },
];
