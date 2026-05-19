// data/plans.ts
export interface PlanFeature {
    text: string;
}

export interface Plan {
    id: string;
    name: string;
    price: string;
    duration: string;
    description: string;
    buttonClass: string;
    features: PlanFeature[];
    image: string;
    typeClass?: string;
}

export const plans: Plan[] = [
    {
        id: "core",
        name: "Core Plan",
        price: "$19",
        duration: "per month",
        description: "Everything you need to start automating your 𝕏 engagement.",
        buttonClass: "style-3",
        image: "/assets/images/section/color-bg-3.webp",
        features: [
            { text: "1 connected account" },
            { text: "2,000 auto DMs per month" },
            { text: "Auto-reply and post plug" },
            { text: "Full engagement analytics" },
        ],
    },
    {
        id: "pro",
        name: "Pro Plan",
        price: "$39",
        duration: "per month",
        description: "Scale your outreach across multiple accounts and unlimited posts.",
        buttonClass: "style-2",
        image: "/assets/images/section/color-bg-3.webp",
        typeClass: "type-2",
        features: [
            { text: "Up to 3 connected accounts" },
            { text: "7,500 auto DMs per month" },
            { text: "Unlimited scheduled posts" },
            { text: "Full engagement analytics" },
        ],
    },
    {
        id: "enterprise",
        name: "Enterprise",
        price: "$99",
        duration: "per month",
        description: "Maximum throughput for agencies and power creators.",
        buttonClass: "style-3",
        image: "/assets/images/section/color-bg-3.webp",
        features: [
            { text: "15,000 auto DMs per month" },
            { text: "Up to 3 connected accounts" },
            { text: "Unlimited scheduled posts" },
            { text: "Full engagement analytics" },
        ],
    },
];
