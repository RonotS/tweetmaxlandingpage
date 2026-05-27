import Link from "next/link";

export interface FooterLink {
    label: string;
    href: string;
}

interface FooterColumnProps {
    title: string;
    links: FooterLink[];
    className?: string;
}

const FooterColumn: React.FC<FooterColumnProps> = ({ title, links, className = "" }) => {
    return (
        <div className={`footer-col-block align-items-start ${className}`}>
            <h5 className="footer-heading footer-heading-mobile font-2">{title}</h5>
            <ul className="footer-menu-list">
                {links.map((link, index) => {
                    const isExternal = /^https?:\/\//i.test(link.href);
                    return (
                        <li key={index}>
                            <Link
                                href={link.href}
                                className="link text-main-2"
                                {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                            >
                                {link.label}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default FooterColumn;
