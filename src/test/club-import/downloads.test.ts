import { describe, expect, it } from "vitest";
import { downloads } from "@/config/links";
import editGuideDe from "@/assets/club-import/edit-guide-de.pdf.asset.json";
import editGuideEn from "@/assets/club-import/edit-guide-en.pdf.asset.json";

describe("Edit-Guide download language", () => {
  it("uses the German PDF for German", () => {
    expect(downloads.editGuidePdf.de).toBe(editGuideDe.url);
    expect(downloads.editGuidePdf.de).not.toBe(editGuideEn.url);
  });

  it("uses the English PDF for English", () => {
    expect(downloads.editGuidePdf.en).toBe(editGuideEn.url);
    expect(downloads.editGuidePdf.en).not.toBe(editGuideDe.url);
  });
});