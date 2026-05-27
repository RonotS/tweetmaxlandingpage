import { boxIconTextProps2 } from "@/src/data/boxIconText";
import Image from "next/image";

export default function ContactSection() {
    return (
        <>
            <section className="section-contact-us flat-spacing-3">
                <div className="container">
                    <h2 className="s-title only-title ol-tt-2 font-3 text-center text-linear">Contact us</h2>
                    <div className="row">
                        {boxIconTextProps2.map((item, idx) => (
                            <div className="col-md-4" key={idx}>
                                <div className="box-icon-text style-2 wow fadeInUp">
                                    <div className="icon">
                                        <Image
                                            loading="lazy"
                                            width={78}
                                            height={78}
                                            src={`/assets/images/section/icon-box/${item.image_icon}`}
                                            alt="Icon"
                                        />
                                    </div>
                                    <div className="content">
                                        <p className="title text-main-2">{item.title}</p>
                                        <p className="sub-title text-body-3">{item.sub_title}</p>
                                    </div>
                                    <div className="d-flex">
                                        {/*
                                         * Plain <a> (not next/link) — mailto: URLs need the OS to
                                         * pick up the click; next/link's client-side router can
                                         * swallow it on mobile browsers.
                                         */}
                                        <a
                                            href={item.href ?? "mailto:info@tweetmax.io"}
                                            className="tf-btn text-body-3 animate-btn style-high-2"
                                        >
                                            Talk to us
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
