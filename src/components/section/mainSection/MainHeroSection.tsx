"use client";
import { assitantsAiItems } from "@/src/data/assitantsAi";
import { useEffect, useState } from "react";

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
                    <div className="sect-title wow fadeInUp">
                        <h1 className="s-title font-3">
                            Extract 10x More Value From Your 𝕏 Engagement. <br />
                            <div className="text-change_wrap">
                                {assitantsAiItems.map((item, idx) => (
                                    <div key={idx} className={`text-change_rotating  ${idx === index ? "active" : ""}`}>
                                        {item.name}
                                    </div>
                                ))}
                            </div>
                        </h1>
                        <p className="s-sub_title">
                            Convert replies into revenue and comments into clients, <br className="d-none d-sm-block" />
    while AI handles the outreach grind for you.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

