"use server";

import { Resend } from "resend";

// Initialize Resend with API key from environment variables
// If no key is found, it will throw an error when trying to send
const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    if (!name || !email || !message) {
        return { error: "Missing required fields" };
    }

    try {
        // If no API key is configured, simulate success for demo purposes
        if (!process.env.RESEND_API_KEY) {
            console.log("Simulating email send (No API Key):", { name, email, message });
            await new Promise((resolve) => setTimeout(resolve, 1000));
            return { success: true, simulated: true };
        }

        const { data, error } = await resend.emails.send({
            from: "Portfolio Contact <onboarding@resend.dev>", // Use verified domain in production
            to: ["uvindu03@gmail.com"], // Your email address
            subject: `New Inquiry from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
            replyTo: email,
        });

        if (error) {
            console.error("Resend error:", error);
            return { error: "Failed to send email. Please try again." };
        }

        return { success: true, data };
    } catch (error) {
        console.error("Unexpected error:", error);
        return { error: "An unexpected error occurred." };
    }
}
