"use client";
import { navItems2 } from "@/src/data/navItem";
import Image from "next/image";
import Link from "next/link";

export default function NavMobileV2({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
    return (
        <>
            <div className={`offcanvas offcanvas-start canvas-mb ${isOpen ? "show" : ""}`} id="mobileMenu">
                <div className="canvas-header">
                    <div className="logo-site">
                        <Image width={110} height={20} src="/assets/images/logo/tm-logo.png" alt="TweetMax" />
                    </div>
                    <div className="btn_group">
                        <Link
                            href="https://app.tweetmax.io"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="tf-btn style-2"
                            onClick={onClose}
                        >
                            Get started
                        </Link>
                        <span className="icon-close-popup" onClick={onClose}>
                            <i className="icon-close"></i>
                        </span>
                    </div>
                </div>

                <span className="br-line"></span>

                <div className="canvas-body">
                    <ul className="nav-ul-mb gap-0">
                        {navItems2.map((item, idx) => (
                            <li className="nav-mb-item" key={idx}>
                                {!item.subMenu ? (
                                    <Link
                                        href={item.link.startsWith("#") || item.link.startsWith("/") ? item.link : `/${item.link}`}
                                        className="mb-menu-link"
                                        onClick={onClose}
                                    >
                                        <span>{item.name}</span>
                                    </Link>
                                ) : (
                                    <>
                                        <Link
                                            href={`#dropdown-menu-${idx}`}
                                            className="mb-menu-link collapsed"
                                            data-bs-toggle="collapse"
                                            aria-expanded="false"
                                            aria-controls={`dropdown-menu-${idx}`}
                                        >
                                            <span>{item.name}</span>
                                            <span className="icon icon-arrow-caret-down"></span>
                                        </Link>
                                        <div id={`dropdown-menu-${idx}`} className="collapse">
                                            <ul className="sub-nav-menu">
                                                {item.subMenu.map((sub, subIdx) => (
                                                    <li key={subIdx}>
                                                        <Link href={`/${sub.subLink}`} className="sub-nav-link" onClick={onClose}>
                                                            {sub.subName}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="canvas-footer">
                    <Link
                        href="https://app.tweetmax.io"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="tf-btn w-100 animate-btn style-high"
                        onClick={onClose}
                    >
                        Sign Up
                    </Link>
                </div>
            </div>

            {isOpen && <div className="offcanvas-backdrop fade show" onClick={onClose}></div>}
        </>
    );
}
