import { SectTagline } from "@components/section/SectTagline";
import { SectBottom } from "@components/section/SectBottom";

export default function PauseSection() {
    return (
        <>
            <section className="section-feature">
                <SectTagline name="STOP GRINDING. START CONVERTING." />
                <span className="br-line"></span>
                <div className="sect-main">
                    <div className="container">
                        <div className="sect-title wow fadeInUp">
                            <h2 className="s-title font-3">
                                Constantly glued to 𝕏 trying to <br />
                                keep up with notifications?
                            </h2>
                            <p className="s-sub_title">
                                Watching engagement spike on your posts, but your bank account stays the same? <br className="d-none d-lg-block" />
                                Know your time is worth way more than manual copy-pasting?
                            </p>
                            <h2 className="s-title font-3 mt-5">PAUSE.</h2>
                            <p className="s-sub_title">
                                Spend 2 minutes setting up a system that works for you 24/7. <br className="d-none d-lg-block" />
                                Capture every interested buyer the exact second they interact.
                                <br className="d-none d-lg-block" />
                                Less scrolling. More converting.
                            </p>
                        </div>
                        <div className="position-relative has-hafl_plus">
                            <span className="hafl-plus pst-left_bot item_bot wow bounceInScale"></span>
                            <span className="hafl-plus pst-right_bot item_bot wow bounceInScale"></span>
                        </div>
                    </div>
                </div>
                <span className="br-line"></span>
                <SectBottom />
                <span className="br-line"></span>
            </section>
        </>
    );
}
