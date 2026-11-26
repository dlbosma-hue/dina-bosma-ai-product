import { describe, expect, test } from "vitest";
import { noobClub } from "./noobClub";

test("German Edit Guide uses the German PDF", () => {
  expect(noobClub.links.editGuidePdf.de.endsWith("/edit-guide-deutsch.pdf")).toBe(true);
});

test("English Edit Guide uses the English PDF", () => {
  expect(noobClub.links.editGuidePdf.en.endsWith("/edit-guide-english.pdf")).toBe(true);
  expect(noobClub.links.editGuidePdf.en).not.toBe(noobClub.links.editGuidePdf.de);
});

describe("Community offer terms", () => {
  test("has 20 Community places in total", () => {
    expect(noobClub.communityOffer.totalPlaces).toBe(20);
  });
  test("includes only 10 completely free beta places", () => {
    expect(noobClub.communityOffer.freeBetaPlaces).toBe(10);
    expect(noobClub.communityOffer.freeBetaPlaces).toBeLessThan(noobClub.communityOffer.totalPlaces);
  });
  test("free beta places go to the first signups", () => {
    expect(noobClub.communityOffer.freeBetaAllocation).toBe("first-signups");
  });
  test("other Community members get later lower-price access", () => {
    expect(noobClub.communityOffer.laterCommunityAccess).toBe("lower-price");
  });
});