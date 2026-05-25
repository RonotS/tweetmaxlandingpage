"use client";
import Image from "next/image";

// Intro for Section 2: marketing/PAUSE pitch followed by the
// "What You Can Do with TweetMax" lead-in. Tabs + dashboard
// live in MainFeatureShowcaseSection (Section 3).
//
// All three copy blocks live inside a single .sect-title so the
// .section-feature .sect-title vertical padding only fires once;
// internal blocks are spaced via .feature-intro__block instead.
export default function MainFeatureSection() {
    return (
        <>
            <div className="sect-main flat-animate-tab">
                <div className="s-img_item wow bounceInScale">
                    <Image src="/assets/images/section/smoke-blue.webp" alt="Item" width={1296} height={606} />
                </div>
                <div className="container">
                    <div className="sect-title feature-intro wow fadeInUp">
                        <div className="feature-intro__block">
                            <h2 className="s-title font-3">
                                Extract More Value <br className="d-none d-lg-block" />
                                From Your 𝕏 Engagement.
                            </h2>
                            <h3 className="s-title font-3 text-main-2 feature-intro__shout">INSTANTLY.</h3>
                            <p className="s-sub_title">
                                Convert replies into revenue and comments into clients, <br className="d-none d-lg-block" />
                                while AI handles the outreach grind for you.
                            </p>
                        </div>

                        <div className="feature-intro__block">
                            <p className="s-sub_title">
                                Constantly glued to 𝕏 trying to keep up with notifications?<br className="d-none d-lg-block" />
                                Watching engagement spike on your posts, but your bank account stays the same?<br className="d-none d-lg-block" />
                                Know your time is worth way more than manual copy-pasting?
                            </p>
                            <h3 className="s-title font-3 text-main-2 feature-intro__shout">PAUSE.</h3>
                            <p className="s-sub_title">
                                Spend 2 minutes setting up a system that works for you 24/7.<br className="d-none d-lg-block" />
                                Capture every interested buyer the exact second they interact.<br className="d-none d-lg-block" />
                                Less scrolling. More converting.
                            </p>
                        </div>

                        <div className="feature-intro__block">
                            <h2 className="s-title font-3">What You Can Do with TweetMax</h2>
                            <p className="s-sub_title">
                                From scheduling to auto-DMs, TweetMax gives you a full 𝕏 growth suite <br className="d-none d-lg-block" />
                                that converts engagement into revenue — all in one place.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
