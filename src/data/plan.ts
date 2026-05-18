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
        id: "free",
        name: "Free Plan",
        price: "$0",
        duration: "forever",
        description: "Test the core automations and see your first conversions.",
        buttonClass: "style-3",
        image: "/assets/images/section/color-bg-3.webp",
        features: [
            { text: "1 connected 𝕏 account" },
            { text: "50 scheduled posts / mo" },
            { text: "100 auto-DMs / mo" },
            { text: "Basic analytics" },
        ],
    },
    {
        id: "plus",
        name: "Plus Plan",
        price: "$19",
        duration: "per user / mo",
        description: "Scale your automations with higher limits and advanced triggers.",
        buttonClass: "style-2",
        image: "/assets/images/section/color-bg-3.webp",
        typeClass: "type-2",
        features: [
            { text: "3 connected 𝕏 accounts" },
            { text: "Unlimited scheduled posts" },
            { text: "2,000 auto-DMs / mo" },
            { text: "Auto-reply & auto-plug" },
            { text: "Full engagement analytics" },
        ],
    },
    {
        id: "pro",
        name: "Pro Plan",
        price: "$49",
        duration: "per user / mo",
        description: "Everything unlimited. For agencies, teams, and power creators.",
        buttonClass: "style-3",
        image: "/assets/images/section/color-bg-3.webp",
        features: [
            { text: "Unlimited 𝕏 accounts" },
            { text: "Unlimited posts & threads" },
            { text: "Unlimited auto-DMs" },
            { text: "Advanced trigger logic" },
            { text: "API access & integrations" },
            { text: "Priority support" },
        ],
    },
];
