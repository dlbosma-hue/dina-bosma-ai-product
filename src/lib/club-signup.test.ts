import { describe, test } from "node:test";
import assert from "node:assert/strict";
const expect = (actual: unknown) => ({ toBe: (expected: unknown) => assert.equal(actual, expected) });
import { clubSignupSchema, confirmationTemplate, validateSignupFields } from "./club-signup";
import { noobClub } from "../config/noobClub";

const valid = { id: "7690dced-7e64-4e17-a011-99977843001c", name: "Dina", email: "test@example.com", source: "community", lang: "de", business: "AI consulting", pain: "", consent: true };

describe("Club signup rules", () => {
  test("only starter pack and community are signup sources", () => {
    expect(clubSignupSchema.safeParse({ ...valid, source: "checkliste", business: "" }).success).toBe(true);
    expect(clubSignupSchema.safeParse(valid).success).toBe(true);
    expect(clubSignupSchema.safeParse({ ...valid, source: "removed-product" }).success).toBe(false);
  });
  test("name is required", () => { expect(clubSignupSchema.safeParse({ ...valid, name: " " }).success).toBe(false); });
  test("email must be valid", () => { expect(clubSignupSchema.safeParse({ ...valid, email: "invalid" }).success).toBe(false); });
  test("community business is required", () => { expect(clubSignupSchema.safeParse({ ...valid, business: " " }).success).toBe(false); });
  test("business has a 200 character limit", () => {
    expect(clubSignupSchema.safeParse({ ...valid, business: "a".repeat(200) }).success).toBe(true);
    expect(clubSignupSchema.safeParse({ ...valid, business: "a".repeat(201) }).success).toBe(false);
  });
  test("pain is optional", () => { const { pain, ...data } = valid; expect(clubSignupSchema.safeParse(data).success).toBe(true); });
  test("pain has a 500 character limit", () => {
    expect(clubSignupSchema.safeParse({ ...valid, pain: "a".repeat(500) }).success).toBe(true);
    expect(clubSignupSchema.safeParse({ ...valid, pain: "a".repeat(501) }).success).toBe(false);
  });
  test("consent is required", () => { expect(clubSignupSchema.safeParse({ ...valid, consent: false }).success).toBe(false); });
  test("German is the default", () => { const { lang, ...data } = valid; expect(clubSignupSchema.parse(data).lang).toBe("de"); });
  test("community gets its own confirmation", () => { expect(confirmationTemplate("community")).toBe("community-confirmation"); });
  test("starter pack keeps its confirmation", () => { expect(confirmationTemplate("checkliste")).toBe("waitlist-confirmation"); });
  test("client validates community business", () => { expect(validateSignupFields({ name: "Dina", email: "test@example.com", business: "", consent: true }, "community").business).toBe(true); });
  test("community has 20 places", () => { expect(noobClub.communityCapacity).toBe(20); });
  test("99 Prompts sale price is 9.99 EUR", () => { expect(noobClub.promptsPriceEur).toBe(9.99); });
});