"use server";

import { emailSchema, type SubscribeResult } from "@/lib/validation";
import { supabase } from "@/lib/supabase";

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
    const { error } = await supabase
      .from("subscribers")
      .insert({ email });

    if (error) {
      // Unique constraint violation — already subscribed
      if (error.code === "23505") {
        return {
          success: true,
          message: "You're already subscribed!",
        };
      }
      console.error("Supabase insert error:", error);
      return {
        success: false,
        message: "Something went wrong. Please try again.",
      };
    }

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
