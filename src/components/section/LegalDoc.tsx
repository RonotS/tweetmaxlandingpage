import { ReactNode } from "react";

export interface LegalDocProps {
    title: string;
    lastUpdated: string;
    intro: ReactNode;
    children: ReactNode;
}

// Shared shell for Terms and Privacy pages. Renders an <article> with the
// site's typography inside the standard page Layout (page wraps it).
export default function LegalDoc({ title, lastUpdated, intro, children }: LegalDocProps) {
    return (
        <section className="section-legal flat-spacing-3">
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 col-xl-8 mx-auto">
                        <article className="legal-doc px-16 px-xl-0">
                            <div className="legal-doc__header">
                                <h1 className="s-title font-3 text-linear">{title}</h1>
                                <p className="text-caption font-2 text-main-2 legal-doc__meta">
                                    Last Updated: {lastUpdated}
                                </p>
                                <div className="legal-doc__intro s-sub_title">{intro}</div>
                            </div>
                            <span className="br-line has-dot legal-doc__divider" />
                            <div className="legal-doc__body">{children}</div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
}
