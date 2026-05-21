import type { Metadata } from "next";
import Link from "next/link";
import Layout from "@/src/components/layout/Layout";
import LegalDoc from "@/src/components/section/LegalDoc";
import PageTitle from "@/src/components/section/PageTitle";

export const metadata: Metadata = {
    title: "Terms & Conditions — TweetMax",
    description:
        "The Terms and Conditions that govern your access to and use of the TweetMax website, application, and services.",
};

export default function TermsAndConditionsPage() {
    return (
        <Layout>
            <PageTitle name="TERMS & CONDITIONS" />
            <LegalDoc
                title="Terms and Conditions"
                lastUpdated="May 2026"
                intro={
                    <>
                        <p>
                            These Terms and Conditions (&ldquo;Terms&rdquo;) govern your access to and use of the TweetMax
                            website, application, and services (collectively, the &ldquo;Service&rdquo;), provided by TweetMax
                            (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;).
                        </p>
                        <p>
                            By accessing or using our Service, you agree to be bound by these Terms. If you do not agree to
                            these Terms, please do not use the Service.
                        </p>
                    </>
                }
            >
                <section className="legal-doc__section">
                    <h2 className="h4 font-3">1. Description of Service</h2>
                    <p>
                        TweetMax is an artificial intelligence-powered software-as-a-service (SaaS) platform designed to
                        optimize, accelerate, and automate workflows for X (formerly Twitter). Features include, but are not
                        limited to, workflow optimization, post scheduling, and performance analytics.
                    </p>
                </section>

                <section className="legal-doc__section">
                    <h2 className="h4 font-3">2. Account Registration</h2>
                    <ul>
                        <li>
                            <strong>Account Accuracy:</strong> You agree to provide accurate, current, and complete information
                            during registration and to keep your account information updated.
                        </li>
                        <li>
                            <strong>Account Security:</strong> You are responsible for safeguarding your account login
                            credentials and for any activities or actions under your account. You must notify us immediately
                            of any unauthorized use of your account.
                        </li>
                    </ul>
                </section>

                <section className="legal-doc__section">
                    <h2 className="h4 font-3">3. Third-Party Integration (X / Twitter)</h2>
                    <ul>
                        <li>
                            <strong>API Connection:</strong> TweetMax connects to your X account via official application
                            programming interfaces (APIs) or authorized authentication methods.
                        </li>
                        <li>
                            <strong>Compliance with X Terms:</strong> By using TweetMax, you explicitly agree to comply with
                            X&rsquo;s Terms of Service, Developer Agreement, and Developer Policies. TweetMax is not
                            affiliated with, endorsed by, or sponsored by X (Twitter Inc. / X Corp.).
                        </li>
                        <li>
                            <strong>Account Actions:</strong> You assume full responsibility for all workflows, timing, and
                            content scheduled or managed via TweetMax to your X account. TweetMax is not liable for any
                            suspension, termination, or restriction placed on your X account resulting from your use of our
                            Service.
                        </li>
                    </ul>
                </section>

                <section className="legal-doc__section">
                    <h2 className="h4 font-3">4. Intellectual Property</h2>
                    <ul>
                        <li>
                            <strong>Your Data:</strong> You retain all ownership rights to the data, account information, and
                            scheduling metrics you input into TweetMax (&ldquo;User Data&rdquo;).
                        </li>
                        <li>
                            <strong>Platform Intellectual Property:</strong> All right, title, and interest in and to the
                            Service (excluding User Data), including its software, automation engines, algorithms, design,
                            logos, and trademarks, are and will remain the exclusive property of TweetMax.
                        </li>
                    </ul>
                </section>

                <section className="legal-doc__section">
                    <h2 className="h4 font-3">5. Acceptable Use Policy</h2>
                    <p>You agree not to use the Service to:</p>
                    <ul>
                        <li>
                            Automate actions that violate X&rsquo;s platform rules, including coordinated inauthentic behavior,
                            mass spamming, or aggressive follow/unfollow patterns.
                        </li>
                        <li>
                            Abuse, scrape, or attempt to reverse-engineer the TweetMax platform or its underlying optimization
                            models.
                        </li>
                        <li>
                            Use the Service for any unlawful purpose or to violate local, state, national, or international
                            laws.
                        </li>
                    </ul>
                </section>

                <section className="legal-doc__section">
                    <h2 className="h4 font-3">6. Subscription Fees, Billing, and Refunds</h2>
                    <ul>
                        <li>
                            <strong>Pricing:</strong> Certain features of the Service require a paid subscription. All fees are
                            stated exclusive of taxes, which you are responsible for paying.
                        </li>
                        <li>
                            <strong>Billing:</strong> Subscriptions are billed on a recurring basis (monthly) depending on the
                            plan selected.
                        </li>
                        <li>
                            <strong>Cancellation:</strong> You can cancel your subscription at any time through your account
                            settings. Cancellation will take effect at the end of the current billing cycle.
                        </li>
                        <li>
                            <strong>Refunds:</strong> Except as explicitly required by law, all fees are non-refundable.
                        </li>
                    </ul>
                </section>

                <section className="legal-doc__section">
                    <h2 className="h4 font-3">7. Termination</h2>
                    <p>
                        We reserve the right to suspend or terminate your access to the Service at our sole discretion,
                        without notice, for conduct that we believe violates these Terms, harms other users, or infringes on
                        the rights of third parties or X Corp.
                    </p>
                </section>

                <section className="legal-doc__section">
                    <h2 className="h4 font-3">8. Disclaimer of Warranties</h2>
                    <p>
                        THE SERVICE IS PROVIDED ON AN &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo; BASIS. TWEETMAX
                        EXPRESSLY DISCLAIMS ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED
                        TO MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE
                        SERVICE WILL BE UNINTERRUPTED, TIMELY, SECURE, ERROR-FREE, OR THAT THE PROVIDED WORKFLOW METRICS AND
                        ANALYTICS WILL GUARANTEE SPECIFIC SOCIAL MEDIA GROWTH OR PERFORMANCE.
                    </p>
                </section>

                <section className="legal-doc__section">
                    <h2 className="h4 font-3">9. Limitation of Liability</h2>
                    <p>
                        TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL TWEETMAX, ITS DIRECTORS, EMPLOYEES, OR
                        AGENTS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING
                        LOSS OF PROFITS, DATA, USE, GOODWILL, OR X ACCOUNT SUSPENSIONS, ARISING OUT OF YOUR ACCESS TO OR USE
                        OF THE SERVICE.
                    </p>
                </section>

                <section className="legal-doc__section">
                    <h2 className="h4 font-3">10. Governing Law and Jurisdiction</h2>
                    <p>
                        These Terms shall be governed by and construed in accordance with the laws of the{" "}
                        <strong>United States of America</strong>, without regard to its conflict of law provisions.
                    </p>
                </section>

                <section className="legal-doc__section">
                    <h2 className="h4 font-3">11. Changes to Terms</h2>
                    <p>
                        We reserve the right to modify these Terms at any time. We will notify you of any material changes by
                        posting the new Terms on this page and updating the &ldquo;Last Updated&rdquo; date. Continued use of
                        the Service after changes imply acceptance.
                    </p>
                </section>

                <section className="legal-doc__section">
                    <h2 className="h4 font-3">12. Contact Information</h2>
                    <p>If you have any questions about these Terms, please contact us at:</p>
                    <p>
                        <strong>Email:</strong>{" "}
                        <Link href="mailto:info@tweetmax.io" className="link text-main-2">
                            info@tweetmax.io
                        </Link>
                    </p>
                </section>
            </LegalDoc>
        </Layout>
    );
}
