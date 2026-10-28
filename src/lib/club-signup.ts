import { z } from "zod";

export type SignupSource = "checkliste" | "community";
export const signupConsent = {
  de: {
    checkliste: "Schick mir das Starter-Kit per E-Mail. Ich möchte die neuesten Infos zu Workshops und neuen Produkten bekommen. Abmeldung jederzeit. Mehr dazu in der ",
    community: "Ich möchte in der Gründerinnen-Community dabei sein und per E-Mail darüber informiert werden. Abmeldung jederzeit. Mehr dazu in der ",
    privacy: "Datenschutzerklärung",
  },
  en: {
    checkliste: "Send me the starter kit by email. I'd like to get the latest news on workshops and new products. Unsubscribe any time. More in the ",
    community: "I'd like to join the Founders' Community and hear about it by email. Unsubscribe any time. More in the ",
    privacy: "privacy policy",
  },
};

export const clubSignupSchema = z.object({
  id: z.string().uuid(),
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(254),
  source: z.enum(["checkliste", "community"]),
  lang: z.enum(["de", "en"]).default("de"),
  business: z.string().trim().max(200).default(""),
  pain: z.string().trim().max(500).default(""),
  consent: z.literal(true),
}).superRefine((data, ctx) => {
  if (data.source === "community" && !data.business) {
    ctx.addIssue({ code: z.ZodIssueCode.custom, path: ["business"], message: "Business required" });
  }
});

export function confirmationTemplate(source: SignupSource) {
  return source === "community" ? "community-confirmation" : "waitlist-confirmation";
}

export function validateSignupFields(data: { name: string; email: string; business: string; consent: boolean }, source: SignupSource) {
  return {
    name: !data.name.trim() || data.name.length > 100,
    email: !z.string().email().max(254).safeParse(data.email.trim()).success,
    business: source === "community" && (!data.business.trim() || data.business.length > 200),
    consent: !data.consent,
  };
}