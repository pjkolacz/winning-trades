import { z } from "zod";

export const emailSchema = z
  .string()
  .min(1, "Email is required")
  .email("Please enter a valid email address");

export type SubscribeResult = {
  success: boolean;
  message: string;
};
