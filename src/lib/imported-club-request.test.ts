import { describe, expect, it } from "vitest";
import { importedClubRequestSchema } from "./imported-club-request";
import { isSuccessfulInsert } from "./imported-club-forms";
const signup = { kind: "signup", firstName: "Test", email: "test@example.com", consent: true, lang: "de", list: "starterpaket" };
describe("Imported Club form boundaries", () => {
  it("requires signup consent", () => { expect(importedClubRequestSchema.safeParse({ ...signup, consent: false }).success).toBe(false); });
  it("accepts the four supplied signup lists", () => { for (const list of ["community", "content-assistentin", "starterpaket", "edit-guide"]) expect(importedClubRequestSchema.safeParse({ ...signup, list }).success).toBe(true); });
  it("rejects other signup lists", () => { expect(importedClubRequestSchema.safeParse({ ...signup, list: "admin" }).success).toBe(false); });
  it("allows community signup without a first name", () => {
    const { firstName, ...withoutName } = signup;
    expect(importedClubRequestSchema.safeParse({ ...withoutName, list: "community" }).success).toBe(true);
    expect(importedClubRequestSchema.safeParse({ ...signup, list: "community", firstName: " " }).success).toBe(true);
  });
  it("requires community email", () => {
    expect(importedClubRequestSchema.safeParse({ ...signup, list: "community", email: "" }).success).toBe(false);
  });
  it("requires community consent", () => {
    expect(importedClubRequestSchema.safeParse({ ...signup, list: "community", consent: false }).success).toBe(false);
  });
  it("does not turn the community request into a product waitlist request", () => {
    const data = importedClubRequestSchema.parse({ ...signup, list: "community" });
    expect(data.kind === "signup" && data.list).toBe("community");
  });
  it("preserves required first name on other signup lists", () => {
    expect(importedClubRequestSchema.safeParse({ ...signup, firstName: "" }).success).toBe(false);
  });
  it("accepts the product waitlist independently without community or beta participation", () => {
    const data = importedClubRequestSchema.parse({ ...signup, list: "content-assistentin" });
    expect(data.kind === "signup" && data.list).toBe("content-assistentin");
    expect("runde" in data).toBe(false);
  });
  it("requires product waitlist email and consent", () => {
    expect(importedClubRequestSchema.safeParse({ ...signup, list: "content-assistentin", email: "" }).success).toBe(false);
    expect(importedClubRequestSchema.safeParse({ ...signup, list: "content-assistentin", consent: false }).success).toBe(false);
  });
  it("requires contact consent", () => { expect(importedClubRequestSchema.safeParse({ kind: "contact", name: "Test", email: "test@example.com", topic: "workshop", message: "Workshop request", lang: "en", consent: false }).success).toBe(false); });
  it("counts duplicate signup as success", () => { expect(isSuccessfulInsert({ code: "23505" })).toBe(true); expect(isSuccessfulInsert({ code: "42501" })).toBe(false); });
});
