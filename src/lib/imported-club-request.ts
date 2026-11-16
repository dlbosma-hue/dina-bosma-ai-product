import { z } from "zod";
import { contactSchema, signupSchema } from "./imported-club-forms";

export const importedClubRequestSchema = z.discriminatedUnion("kind", [
  signupSchema.extend({ kind: z.literal("signup"), list: z.enum(["community", "content-assistentin", "starterpaket", "edit-guide"]), lang: z.enum(["de", "en"]) }),
  contactSchema.extend({ kind: z.literal("contact"), lang: z.enum(["de", "en"]) }),
]);
