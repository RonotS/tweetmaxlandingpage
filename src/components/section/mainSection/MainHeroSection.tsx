"use client";
import { assitantsAiItems } from "@/src/data/assitantsAi";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const heroAvatars = ["avt-1.webp", "avt-2.webp", "avt-3.webp", "avt-4.webp", "avt-5.webp"];

export function MainHeroSection() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setIndex((prev) => (prev + 1) % assitantsAiItems.length);
        }, 2500);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <>
            <div className="sect-main">
                <div className="container">
                    <div className="row align-items-center hero-row">
                        <div className="col-lg-6">
                            <div className="sect-title hero-copy wow fadeInUp">
                                <h1 className="s-title font-3">
                                    Maximize Your 𝕏 Engagement. <br />
                                    <div className="text-change_wrap">
                                        {assitantsAiItems.map((item, idx) => (
                                            <div key={idx} className={`text-change_rotating  ${idx === index ? "active" : ""}`}>
                                                {item.name}
                                            </div>
                                        ))}
                                    </div>
                                </h1>
                                <p className="s-sub_title">
                                    Create a system to reach your target audience <br className="d-none d-sm-block" />
                                    and turn their attention into conversions.
                                </p>

                                <div className="hero-cta-group wow fadeInUp">
                                    <Link href="https://app.tweetmax.io" target="_blank" rel="noopener noreferrer" className="tf-btn style-2 style-high animate-btn animate-dark">
                                        <span>Automate Your 𝕏 Now</span>
                                    </Link>
                                </div>

                                <div className="hero-social-proof wow fadeInUp">
                                    <ul className="hero-avatar-pile" aria-hidden="true">
                                        {heroAvatars.map((src) => (
                                            <li key={src}>
                                                <Image
                                                    src={`/assets/images/avatar/${src}`}
                                                    alt=""
                                                    width={36}
                                                    height={36}
                                                    className="hero-avatar"
                                                />
                                            </li>
                                        ))}
                                    </ul>
                                    <p className="hero-social-proof_caption text-caption font-2">
                                        <span className="hero-social-proof_dot" aria-hidden="true"></span>
                                        6,000+ creators automating their 𝕏 with TweetMax
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 hero-visual wow fadeInUp">
                            <Image
                                src="/assets/images/section/hero-image.png"
                                alt="TweetMax dashboard preview"
                                width={1078}
                                height={606}
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
