import { z } from "zod";
import { contactSchema, signupSchema, communitySignupSchema } from "./imported-club-forms";

export const importedClubRequestSchema = z.union([
  communitySignupSchema.extend({ kind: z.literal("signup"), list: z.literal("community"), lang: z.enum(["de", "en"]) }),
  signupSchema.extend({ kind: z.literal("signup"), list: z.enum(["content-assistentin", "starterpaket", "edit-guide"]), lang: z.enum(["de", "en"]) }),
  contactSchema.extend({ kind: z.literal("contact"), lang: z.enum(["de", "en"]) }),
]);
