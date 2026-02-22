"use server";

import { emailSchema, type SubscribeResult } from "@/lib/validation";

export async function subscribe(
  _prevState: SubscribeResult | null,
  formData: FormData
): Promise<SubscribeResult> {
  const rawEmail = formData.get("email");

  const parsed = emailSchema.safeParse(rawEmail);

  if (!parsed.success) {
    return {
      success: false,
      message: parsed.error.issues[0].message,
    };
  }

  const email = parsed.data;

  try {
    // Log the subscription
    console.log(`New subscriber: ${email}`);

    // TODO: Integrate with email service (Resend, ConvertKit, etc.)
    // when ready for production

    return {
      success: true,
      message: "You're in! Check your inbox.",
    };
  } catch (error) {
    console.error("Subscription error:", error);
    return {
      success: false,
      message: "Something went wrong. Please try again.",
    };
  }
}
