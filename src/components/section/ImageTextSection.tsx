import Image from "next/image";

export default function ImageTextSection() {
    return (
        <>
            <section className="section-image-text flat-spacing-3">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 mx-auto">
                            <div className="px-16 px-xl-0">
                                <div className="banner-image-v01">
                                    <div className="img-abs img-bg">
                                        <Image width={1078} height={369} src="/assets/images/item/item-bg-3.png" alt="Image" />
                                    </div>
                                    <div className="img-abs img-item d-none d-sm-block">
                                        <Image width={578} height={578} src="/assets/images/section/step-1.webp" alt="Image" />
                                    </div>
                                    <div className="content">
                                        <h3 className="title text-linear font-3">
                                            Ready to 10x <br className="d-none d-sm-block" />
                                            Your 𝕏 Engagement?
                                        </h3>
                                        <p className="sub-title">
                                            Capture every reply, DM the right buyer, and grow on autopilot <br className="d-none d-sm-block" />
                                            — all from one TweetMax dashboard.
                                        </p>
                                        <a href="https://app.tweetmax.io" target="_blank" rel="noopener noreferrer" className="tf-btn text-body-3 style-2 style-high-2 animate-btn animate-dark">
                                            Get started now
                                        </a>
                                    </div>
                                    <div className="image">
                                        <Image width={498} height={308} src="/assets/images/section/profile-automations.png" alt="TweetMax profile automations dashboard" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
