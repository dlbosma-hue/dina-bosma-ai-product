import { z } from "zod";

export type SignupSource = "checkliste" | "community";
export const clubRundeSchema = z.enum(["beta", "frueh"]);
export type ClubRunde = z.infer<typeof clubRundeSchema>;
export type CourseRunde = ClubRunde;

export const signupConsent = {
  de: {
    checkliste: "Schick mir das Starterpaket per E-Mail. Ich möchte die neuesten Infos zu Workshops und neuen Produkten bekommen. Abmeldung jederzeit. Mehr dazu in der ",
    community: "Ich möchte auf die Warteliste für „Meine Content-Assistentin“ und per E-Mail dazu informiert werden. Abmeldung jederzeit. Mehr dazu in der ",
    privacy: "Datenschutzerklärung",
  },
  en: {
    checkliste: "Send me the starter pack by email. I'd like to get the latest news on workshops and new products. Unsubscribe any time. More in the ",
    community: "I'd like to join the waitlist for My Content Assistant and receive updates about it by email. Unsubscribe any time. More in the ",
    privacy: "privacy policy",
  },
};

export const clubSignupSchema = z.object({
  id: z.string().uuid(),
  name: z.string().trim().max(100).default(""),
  email: z.string().trim().email().max(254),
  source: z.enum(["checkliste", "community"]),
  runde: clubRundeSchema.optional(),
  lang: z.enum(["de", "en"]).default("de"),
  business: z.string().trim().max(200).default(""),
  pain: z.string().trim().max(500).default(""),
  consent: z.literal(true),
}).superRefine((data, ctx) => {
  if (data.source === "community" && !data.runde) {
    ctx.addIssue({ code: z.ZodIssueCode.custom, path: ["runde"], message: "Round required" });
  }
  if (data.source === "checkliste" && data.runde) {
    ctx.addIssue({ code: z.ZodIssueCode.custom, path: ["runde"], message: "Round not allowed" });
  }
  if (!data.name) {
    ctx.addIssue({ code: z.ZodIssueCode.custom, path: ["name"], message: "Name required" });
  }
});

export function confirmationTemplate(source: SignupSource, _runde?: ClubRunde) {
  if (source === "checkliste") return "waitlist-confirmation";
  return "community-confirmation";
}

export function validateSignupFields(
  data: { name: string; email: string; business?: string; consent: boolean },
  _source?: SignupSource,
  _runde?: ClubRunde,
) {
  return {
    name: !data.name.trim() || data.name.length > 100,
    email: !z.string().email().max(254).safeParse(data.email.trim()).success,
    business: false,
    consent: !data.consent,
  };
}
