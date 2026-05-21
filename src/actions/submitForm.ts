"use server";

// Stub: replace with a real email service (Resend, SendGrid, SMTP, etc.)
// and forward to info@tweetmax.io. The hero "Submit" CTA form posts here.
const CONTACT_EMAIL = "info@tweetmax.io";

export async function submitForm(formData: FormData) {
    const email = formData.get("email") as string;
    // TODO: integrate transactional email provider and send to CONTACT_EMAIL.
    return {
        success: true,
        message: `Thanks! We'll reach out to ${email} from ${CONTACT_EMAIL}.`,
    };
}
