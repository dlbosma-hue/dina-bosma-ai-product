import { describe, test } from "node:test";
import assert from "node:assert/strict";
const expect = (actual: unknown) => ({ toBe: (expected: unknown) => assert.equal(actual, expected) });
import { clubSignupSchema, confirmationTemplate, validateSignupFields } from "./club-signup";
import { noobClub } from "../config/noobClub";

const valid = { id: "7690dced-7e64-4e17-a011-99977843001c", name: "Dina", email: "test@example.com", source: "community", runde: "beta", lang: "de", business: "", pain: "", consent: true };

describe("Club signup rules", () => {
  test("starter kit and course community remain the signup sources", () => {
    const { runde, ...starter } = valid;
    expect(clubSignupSchema.safeParse({ ...starter, source: "checkliste" }).success).toBe(true);
    expect(clubSignupSchema.safeParse(valid).success).toBe(true);
    expect(clubSignupSchema.safeParse({ ...valid, source: "removed-product" }).success).toBe(false);
  });
  test("community signups require one of the three rounds", () => {
    const { runde, ...withoutRound } = valid;
    expect(clubSignupSchema.safeParse(withoutRound).success).toBe(false);
    for (const round of ["beta", "frueh", "edit-guide"]) {
      expect(clubSignupSchema.safeParse({ ...valid, runde: round }).success).toBe(true);
    }
    expect(clubSignupSchema.safeParse({ ...valid, runde: "other" }).success).toBe(false);
  });
  test("starter kit signups do not take a course round", () => {
    expect(clubSignupSchema.safeParse({ ...valid, source: "checkliste" }).success).toBe(false);
  });
  test("name is required for the starter kit and both course rounds", () => {
    expect(clubSignupSchema.safeParse({ ...valid, name: " " }).success).toBe(false);
    expect(clubSignupSchema.safeParse({ ...valid, runde: "frueh", name: "" }).success).toBe(false);
    const { runde, ...starter } = valid;
    expect(clubSignupSchema.safeParse({ ...starter, source: "checkliste", name: "" }).success).toBe(false);
  });
  test("Edit Guide signups may omit the name", () => {
    expect(clubSignupSchema.safeParse({ ...valid, runde: "edit-guide", name: "" }).success).toBe(true);
    const { name, ...withoutName } = valid;
    expect(clubSignupSchema.safeParse({ ...withoutName, runde: "edit-guide" }).success).toBe(true);
  });
  test("email must be valid", () => { expect(clubSignupSchema.safeParse({ ...valid, email: "invalid" }).success).toBe(false); });
  test("community business is optional", () => {
    expect(clubSignupSchema.safeParse({ ...valid, business: " " }).success).toBe(true);
    const { business, ...withoutBusiness } = valid;
    expect(clubSignupSchema.safeParse(withoutBusiness).success).toBe(true);
  });
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
  test("beta and early waitlist get the course confirmation", () => {
    expect(confirmationTemplate("community", "beta")).toBe("community-confirmation");
    expect(confirmationTemplate("community", "frueh")).toBe("community-confirmation");
  });
  test("Edit Guide gets its own confirmation", () => { expect(confirmationTemplate("community", "edit-guide")).toBe("edit-guide-confirmation"); });
  test("starter kit keeps its confirmation", () => { expect(confirmationTemplate("checkliste")).toBe("waitlist-confirmation"); });
  test("client does not require community business", () => { expect(validateSignupFields({ name: "Dina", email: "test@example.com", business: "", consent: true }, "community", "beta").business).toBe(false); });
  test("retired 20 place capacity setting is gone", () => { expect("communityCapacity" in noobClub).toBe(false); });
  test("99 Prompts sale price is 9.99 EUR", () => { expect(noobClub.promptsPriceEur).toBe(9.99); });
});
