import HeroSection from "@components/section/HeroSection";
import FeatureSection from "@components/section/FeatureSection";
import FeatureShowcaseSection from "@components/section/FeatureShowcaseSection";
import PricingSection from "@components/section/PricingSection";
import TestimonialSection from "@components/section/TestimonialSection";
import FaqSection from "@components/section/FaqSection";
import CtaSection from "@components/section/CtaSection";
import Footer from "@components/footer/Footer";
import HackerTextEffect from "@/src/components/common/HackerTextEffect";
import Layout from "@/src/components/layout/Layout";

export default function Home() {
    return (
        <>
            <Layout showFooter={false}>
                <HackerTextEffect />
                <span className="br-line"></span>
                <HeroSection />
                <FeatureSection />
                <FeatureShowcaseSection />
                <PricingSection />
                <TestimonialSection />
                <FaqSection />
                <CtaSection />
                <Footer />
            </Layout>
        </>
    );
}
