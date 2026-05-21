"use client";

import { FormEvent } from "react";

const CONTACT_EMAIL = "info@tweetmax.io";

export default function FormGet2() {
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const data = new FormData(form);
        const firstName = (data.get("first-name") as string) ?? "";
        const lastName = (data.get("last-name") as string) ?? "";
        const email = (data.get("email") as string) ?? "";
        const phone = (data.get("phone") as string) ?? "";
        const message = (data.get("message") as string) ?? "";

        const subject = `New TweetMax inquiry from ${firstName} ${lastName}`.trim();
        const body = [
            `Name: ${firstName} ${lastName}`,
            `Email: ${email}`,
            `Phone: ${phone}`,
            "",
            "Message:",
            message,
        ].join("\n");

        window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
            subject
        )}&body=${encodeURIComponent(body)}`;
    };

    return (
        <>
            <form className="form-get_in px-16 px-xl-0" onSubmit={handleSubmit}>
                <div className="form-content-2">
                    <div className="tf-grid-layout sm-col-2">
                        <fieldset>
                            <label className="label-text text-body-3 text-white" htmlFor="first-name">
                                First name
                            </label>
                            <input type="text" id="first-name" name="first-name" placeholder="John" required />
                        </fieldset>
                        <fieldset>
                            <label className="label-text text-body-3 text-white" htmlFor="last-name">
                                Last name
                            </label>
                            <input type="text" id="last-name" name="last-name" placeholder="Doe" required />
                        </fieldset>
                    </div>
                    <div className="tf-grid-layout sm-col-2">
                        <fieldset>
                            <label className="label-text text-body-3 text-white" htmlFor="email">
                                Email
                            </label>
                            <input type="email" id="email" name="email" placeholder="john@example.com" required />
                        </fieldset>
                        <fieldset>
                            <label className="label-text text-body-3 text-white" htmlFor="phone">
                                Phone
                            </label>
                            <input type="tel" id="phone" name="phone" placeholder="(303) 555-0105" />
                        </fieldset>
                    </div>
                    <fieldset className="d-grid">
                        <label className="label-text text-body-3 text-white" htmlFor="message">
                            Message
                        </label>
                        <textarea id="message" name="message" placeholder="Message" required></textarea>
                    </fieldset>
                </div>
                <button type="submit" className="tf-btn text-body-3 style-2 animate-btn animate-dark style-high">
                    Send message
                </button>
            </form>
        </>
    );
}
