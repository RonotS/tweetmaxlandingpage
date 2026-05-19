"use client";
import Image from "next/image";

// Intro-only main for Section 2. The tabs + dashboard preview live in
// MainFeatureShowcaseSection (Section 3).
export default function MainFeatureSection() {
    return (
        <>
            <div className="sect-main flat-animate-tab">
                <div className="s-img_item wow bounceInScale">
                    <Image src="/assets/images/section/smoke-blue.webp" alt="Item" width={1296} height={606} />
                </div>
                <div className="container">
                    <div className="sect-title wow fadeInUp">
                        <h2 className="s-title font-3">What You Can Do with TweetMax</h2>
                        <p className="s-sub_title">
                            From scheduling to auto-DMs, TweetMax gives you a full 𝕏 growth suite <br className="d-none d-lg-block" />
                            that converts engagement into revenue — all in one place.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
