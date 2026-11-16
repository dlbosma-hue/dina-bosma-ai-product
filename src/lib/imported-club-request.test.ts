import { describe, expect, it } from "vitest";
import { importedClubRequestSchema } from "./imported-club-request";
import { isSuccessfulInsert } from "./imported-club-forms";
const signup = { kind: "signup", firstName: "Test", email: "test@example.com", consent: true, lang: "de", list: "starterpaket" };
describe("Imported Club form boundaries", () => {
  it("requires signup consent", () => { expect(importedClubRequestSchema.safeParse({ ...signup, consent: false }).success).toBe(false); });
  it("accepts the four supplied signup lists", () => { for (const list of ["community", "content-assistentin", "starterpaket", "edit-guide"]) expect(importedClubRequestSchema.safeParse({ ...signup, list }).success).toBe(true); });
  it("rejects other signup lists", () => { expect(importedClubRequestSchema.safeParse({ ...signup, list: "admin" }).success).toBe(false); });
  it("requires contact consent", () => { expect(importedClubRequestSchema.safeParse({ kind: "contact", name: "Test", email: "test@example.com", topic: "workshop", message: "Workshop request", lang: "en", consent: false }).success).toBe(false); });
  it("counts duplicate signup as success", () => { expect(isSuccessfulInsert({ code: "23505" })).toBe(true); expect(isSuccessfulInsert({ code: "42501" })).toBe(false); });
});
