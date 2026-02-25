"use server";

export async function submitContact(formData: FormData) {
    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");
    const email = formData.get("email");
    const message = formData.get("message");

    // Simulate remote network processing latency (1.5 seconds)
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("\n=============================================");
    console.log("🚀 NEW CONTACT FORM SUBMISSION RECEIVED 🚀");
    console.log("=============================================");
    console.log(`Name:    ${firstName} ${lastName}`);
    console.log(`Email:   ${email}`);
    console.log(`Message: ${message}`);
    console.log("=============================================\n");

    return { success: true, message: "Message sent successfully!" };
}
