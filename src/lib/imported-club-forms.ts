import { z } from "zod";

export const signupSchema = z.object({
  firstName: z.string().trim().min(1, "name").max(80, "name"),
  email: z.string().trim().email("email").max(255, "email"),
  consent: z.literal(true, { message: "consent" }),
});

export const contactSchema = z.object({
  name: z.string().trim().min(1, "fullName").max(100, "fullName"),
  email: z.string().trim().email("email").max(255, "email"),
  topic: z.enum(["workshop", "zusammenarbeit", "anderes"]),
  message: z.string().trim().min(1, "message").max(2000, "message"),
  consent: z.literal(true, { message: "consent" }),
});

/** A repeat signup (Postgres unique violation) counts as success. */
export function isSuccessfulInsert(error: { code?: string } | null): boolean {
  return !error || error.code === "23505";
}
