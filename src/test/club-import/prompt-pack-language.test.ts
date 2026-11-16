import { describe, expect, it } from "vitest";
import { photos } from "@/config/photos";
import german from "@/assets/club-import/prompt-pack-german-framed.png.asset.json";
import english from "@/assets/club-import/prompt-pack-english-framed.png.asset.json";

describe("Prompt-Pack language selection", () => {
  it("uses the German artwork for DE", () => {
    expect(photos.promptPackCover.de).toBe(german.url);
    expect(photos.promptPackCover.de).not.toBe(english.url);
  });

  it("uses the English artwork for EN", () => {
    expect(photos.promptPackCover.en).toBe(english.url);
    expect(photos.promptPackCover.en).not.toBe(german.url);
  });
});