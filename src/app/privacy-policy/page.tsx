import type { Metadata } from "next";
import Link from "next/link";
import Layout from "@/src/components/layout/Layout";
import LegalDoc from "@/src/components/section/LegalDoc";
import PageTitle from "@/src/components/section/PageTitle";

export const metadata: Metadata = {
    title: "Privacy Policy — TweetMax",
    description:
        "How TweetMax collects, uses, discloses, and safeguards your information when you use our AI-powered X workflow automation and analytics platform.",
};

export default function PrivacyPolicyPage() {
    return (
        <Layout>
            <PageTitle name="PRIVACY POLICY" />
            <LegalDoc
                title="Privacy Policy"
                lastUpdated="May 2026"
                intro={
                    <>
                        <p>
                            This Privacy Policy explains how we collect, use, disclose, and safeguard your information when
                            you visit our website and use our AI-powered X workflow automation and analytics platform.
                        </p>
                        <p>
                            We respect your privacy and are committed to protecting your personal data in compliance with
                            applicable data protection laws (such as GDPR, CCPA, where applicable).
                        </p>
                    </>
                }
            >
                <section className="legal-doc__section">
                    <h2 className="h4 font-3">1. Information We Collect</h2>
                    <ul>
                        <li>
                            <strong>Account Information:</strong> When you register for an account, we collect your name,
                            email address, and account preferences.
                        </li>
                        <li>
                            <strong>X (Twitter) Profile &amp; Analytics Data:</strong> To provide our workflow features, you
                            connect TweetMax to your X account via OAuth. We access profile information (such as your
                            username, handle, and profile picture), historical tweet performance metrics, and authentication
                            tokens required to schedule or organize posts on your behalf.
                        </li>
                        <li>
                            <strong>Workflow Data:</strong> We collect information regarding your optimization preferences,
                            queue configurations, scheduling times, and platform interactions.
                        </li>
                        <li>
                            <strong>Payment Information:</strong> Credit card and billing details are processed securely
                            through our third-party payment processor (Stripe). We do not store your raw financial details
                            on our servers.
                        </li>
                        <li>
                            <strong>Usage and Technical Data:</strong> We automatically collect log data, device information,
                            browser type, IP address, and cookie identifiers to analyze platform performance, track user
                            flows, and improve UI experience.
                        </li>
                    </ul>
                </section>

                <section className="legal-doc__section">
                    <h2 className="h4 font-3">2. How We Use Your Information</h2>
                    <p>We use the collected data for the following purposes:</p>
                    <ul>
                        <li>
                            <strong>To Provide the Service:</strong> To manage your account, authenticate your login, analyze
                            your X analytics, and execute your scheduled workflows to X.
                        </li>
                        <li>
                            <strong>To Train and Refine AI Workflow Engines:</strong> To analyze scheduling trends, timing
                            data, and performance metrics to provide intelligent, predictive workflow recommendations.
                        </li>
                        <li>
                            <strong>To Process Payments:</strong> To handle subscriptions, renewals, and invoicing.
                        </li>
                        <li>
                            <strong>To Communicate with You:</strong> To send system updates, security alerts, customer
                            support responses, and marketing communications (which you can opt out of at any time).
                        </li>
                        <li>
                            <strong>For Security and Compliance:</strong> To detect, prevent, and mitigate fraud, abuse, or
                            technical issues, and to ensure compliance with our Terms and X&rsquo;s platform rules.
                        </li>
                    </ul>
                </section>

                <section className="legal-doc__section">
                    <h2 className="h4 font-3">3. How Your Data is Shared and Disclosed</h2>
                    <p>
                        We do not sell your personal data. We only share information with third parties in the following
                        circumstances:
                    </p>
                    <ul>
                        <li>
                            <strong>X (Twitter) API:</strong> We transmit actions and scheduling requests to X Corp via their
                            official API to update, schedule, or manage your posts according to your workflow configurations.
                        </li>
                        <li>
                            <strong>Service Providers:</strong> We share data with trusted third-party vendors who provide
                            essential backend infrastructure, cloud hosting, analytics (e.g., Google Analytics), and email
                            delivery.
                        </li>
                        <li>
                            <strong>Legal Requirements:</strong> We may disclose your information if required to do so by
                            law, subpoena, or government request.
                        </li>
                    </ul>
                </section>

                <section className="legal-doc__section">
                    <h2 className="h4 font-3">4. Data Retention</h2>
                    <p>
                        We retain your personal data and workflow history only for as long as necessary to fulfill the
                        purposes outlined in this Privacy Policy, or as required to maintain account history for your
                        convenience. You may delete your account or specific data points at any time through your dashboard,
                        which will initiate the removal of your personal details from our active databases.
                    </p>
                </section>

                <section className="legal-doc__section">
                    <h2 className="h4 font-3">5. Security of Your Data</h2>
                    <p>
                        We implement commercial-grade administrative, technical, and physical security measures to protect
                        your personal data and X authentication tokens. However, please be aware that no method of
                        transmission over the internet or electronic storage is 100% secure.
                    </p>
                </section>

                <section className="legal-doc__section">
                    <h2 className="h4 font-3">6. Your Data Rights (GDPR / CCPA / International Users)</h2>
                    <p>
                        Depending on your geographical location, you may have the following rights regarding your personal
                        information:
                    </p>
                    <ul>
                        <li>
                            <strong>Access &amp; Portability:</strong> The right to request copies of the data we hold about
                            you.
                        </li>
                        <li>
                            <strong>Correction:</strong> The right to request that we correct inaccurate or incomplete data.
                        </li>
                        <li>
                            <strong>Erasure (&ldquo;Right to be Forgotten&rdquo;):</strong> The right to request that we
                            delete your personal data.
                        </li>
                        <li>
                            <strong>Revocation of X Access:</strong> You can disconnect TweetMax from your X account at any
                            time either via our platform dashboard or directly inside your X account security settings under
                            &ldquo;Connected Apps.&rdquo;
                        </li>
                    </ul>
                    <p>
                        To exercise any of these rights, please contact us at:{" "}
                        <Link href="mailto:info@tweetmax.io" className="link text-main-2">
                            info@tweetmax.io
                        </Link>
                    </p>
                </section>

                <section className="legal-doc__section">
                    <h2 className="h4 font-3">7. Children&rsquo;s Privacy</h2>
                    <p>
                        Our Service is not directed to individuals under the age of 13 (or 16 in certain jurisdictions). We
                        do not knowingly collect personal data from children. If we become aware that a child has provided
                        us with personal data, we will take steps to delete it immediately.
                    </p>
                </section>

                <section className="legal-doc__section">
                    <h2 className="h4 font-3">8. Changes to This Privacy Policy</h2>
                    <p>
                        We may update our Privacy Policy from time to time. We will notify you of any changes by posting the
                        new Privacy Policy on this page and updating the &ldquo;Last Updated&rdquo; date. You are advised to
                        review this policy periodically for any updates.
                    </p>
                </section>

                <section className="legal-doc__section">
                    <h2 className="h4 font-3">9. Contact Us</h2>
                    <p>
                        If you have any questions or concerns about this Privacy Policy or our data handling practices,
                        please contact us at:
                    </p>
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
