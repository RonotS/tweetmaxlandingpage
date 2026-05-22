import type { Metadata } from "next";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "bootstrap/dist/css/bootstrap.min.css";
import "@assets/css/odometer.min.css";
import "@assets/icon/icomoon/style.css";
import "@assets/css/animate.css";
import "@assets/scss/app.scss";
import localFont from "next/font/local";

const mono = localFont({
    src: "../fonts/DepartureMono-Regular.otf",
    display: "swap",
    variable: "--font-mono",
});

const geist = localFont({
    src: [
        { path: "../fonts/Geist-Regular.ttf", weight: "400", style: "normal" },
        { path: "../fonts/Geist-Medium.ttf", weight: "500", style: "normal" },
        { path: "../fonts/Geist-Bold.woff2", weight: "700", style: "normal" },
    ],
    variable: "--font-geist",
    display: "swap",
});

const grotesk = localFont({
    src: [
        { path: "../fonts/OverusedGrotesk-Book.otf", weight: "400" },
        { path: "../fonts/OverusedGrotesk-Medium.otf", weight: "500" },
    ],
    display: "swap",
    variable: "--font-grotesk",
});

export const metadata: Metadata = {
    title: "TweetMax — Maximize Your 𝕏 Engagement",
    description: "TweetMax turns replies into revenue and comments into clients. Automate outreach on 𝕏 24/7 — capture every interested buyer the second they interact.",
    keywords: ["TweetMax", "X automation", "Twitter automation", "Auto DM", "Tweet scheduler", "X growth"],
    robots: "index, follow",
    authors: [{ name: "TweetMax", url: "https://tweetmax.io" }],
    icons: {
        icon: "/assets/images/logo/favicon.png",
        shortcut: "/assets/images/logo/favicon.png",
        apple: "/assets/images/logo/favicon.png",
    },
};
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${geist.className} ${mono.variable} ${grotesk.variable}`}>
            <head></head>
            <body>{children}</body>
        </html>
    );
}
