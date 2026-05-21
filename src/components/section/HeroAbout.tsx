import Image from "next/image";
import ScrollColorText from "../common/ScrollColorText";

export default function HeroAbout() {
    return (
        <>
            <section className="section-hero-about flat-spacing-2">
                <div className="img-item-1">
                    <Image loading="lazy" width={1296} height={606} src="/assets/images/item/color-bg-1.png" alt="Image" />
                </div>
                <div className="img-item-2">
                    <Image loading="lazy" width={1296} height={606} src="/assets/images/item/pixel-texture.png" alt="Image" />
                </div>
                <div className="container position-relative z-5">
                    <div className="row">
                        <div className="col-lg-10 mx-auto">
                            <div className="sect-title wow fadeInUp">
                                <h2 className="s-title font-3 text-linear">
                                    Your 𝕏 engagement, <br className="d-none d-md-block" />
                                    on autopilot.
                                </h2>
                                <p className="s-sub_title">
                                    TweetMax pairs scheduling, auto-replies, and auto-DMs in one workspace <br className="d-none d-md-block" />
                                    — built to turn every interaction on 𝕏 into a paying customer.
                                </p>
                            </div>
                            <div className="image px-16 px-lg-0">
                                <Image loading="lazy" width={1078} height={606} src="/assets/images/section/tweetmax-fade.png" alt="TweetMax dashboard" />
                            </div>
                        </div>
                        <div className="col-lg-4 offset-lg-1">
                            <div className="px-16 px-lg-0">
                                <p className="text-caption caption font-2 text-main-2">ABOUT TWEETMAX</p>
                                <div className="rate-per">
                                    <Image loading="lazy" width={90} height={16} src="/assets/images/item/star-rate.png" alt="Image" />
                                    <p className="text-main-3">
                                        <span className="fw-bold text-main-5">(4.9/</span>.5.0)
                                    </p>
                                </div>
                                <h5 className="title-2 text-linear-2 font-3">From 6,000+ creators growing on 𝕏</h5>
                            </div>
                        </div>
                        <div className="col-lg-5 offset-lg-1">
                            <ScrollColorText className="h4 font-3 px-16 px-lg-0">
                                Engagement on 𝕏 is the new front door of every business — but most of it leaks away into ignored
                                replies and missed DMs. TweetMax was built to close that gap. We help creators and founders turn every
                                like, reply, and retweet into the right next conversation, automatically, around the clock.
                            </ScrollColorText>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
