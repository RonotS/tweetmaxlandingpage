import { SectHeader } from "@/src/components/section/SectHeader";
import { SectTagline } from "@/src/components/section/SectTagline";
import { SectBottom } from "@/src/components/section/SectBottom";
import MainFeatureShowcaseSection from "./mainSection/MainFeatureShowcaseSection";

export default function FeatureShowcaseSection() {
    return (
        <>
            <section className="section-feature" id="showcase">
                <SectHeader value={3} label={"SHOWCASE"} />
                <span className="br-line"></span>
                <SectTagline name={"SEE TWEETMAX IN ACTION."} />
                <span className="br-line"></span>
                <MainFeatureShowcaseSection />
                <span className="br-line"></span>
                <SectBottom />
                <span className="br-line"></span>
            </section>
        </>
    );
}
