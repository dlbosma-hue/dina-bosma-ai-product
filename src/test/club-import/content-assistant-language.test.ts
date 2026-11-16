import { describe, expect, it } from "vitest";
import { photos } from "@/config/photos";
import german from "@/assets/club-import/content-assistant-german-v2.png.asset.json";
import english from "@/assets/club-import/content-assistant-english-v2.png.asset.json";

describe("Content-Assistentin cover language", () => {
  it("uses the German cover for DE", () => {
    expect(photos.contentAssistentinCover.de).toBe(german.url);
    expect(photos.contentAssistentinCover.de).not.toBe(english.url);
  });
  it("uses the English cover for EN", () => {
    expect(photos.contentAssistentinCover.en).toBe(english.url);
    expect(photos.contentAssistentinCover.en).not.toBe(german.url);
  });
});