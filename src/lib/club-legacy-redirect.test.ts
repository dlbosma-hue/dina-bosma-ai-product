import { describe, test } from "node:test";
import assert from "node:assert/strict";
import { clubLegacyRedirect } from "./club-legacy-redirect";

describe("Club encoded fragment redirects", () => {
  const mappings = {
    "edit-guide": "community",
    checkliste: "checkliste",
    community: "community",
    treffen: "treffen",
    shop: "shop",
    starterset: "community",
  };
  for (const [anchor, hash] of Object.entries(mappings)) {
    test(`${anchor} redirects to ${hash} for encoded and decoded paths with trailing slash`, () => {
      for (const separator of ["#", "%23"]) {
        for (const suffix of ["", "/"]) {
          assert.equal(
            clubLegacyRedirect(`/ai-noob-club${separator}${anchor}${suffix}`, "?utm_source=ig"),
            `/ai-noob-club?utm_source=ig#${hash}`,
          );
        }
      }
    });
  }
  test("unknown fragments redirect without a hash", () => {
    for (const anchor of ["unknown", "", "constructor", "toString", "edit-guide/other"]) {
      assert.equal(clubLegacyRedirect(`/ai-noob-club%23${anchor}/`, ""), "/ai-noob-club");
    }
  });
  test("tracking query string is preserved exactly", () => {
    const query = "?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=a%2Bb&extra=one+two&extra=three";
    assert.equal(clubLegacyRedirect("/ai-noob-club#edit-guide", query), `/ai-noob-club${query}#community`);
  });
  test("ordinary Club and unrelated URLs are untouched", () => {
    for (const path of ["/ai-noob-club", "/ai-noob-club/", "/other%23edit-guide", "/ai-noob-club-other%23shop"]) {
      assert.equal(clubLegacyRedirect(path, "?utm_source=ig"), undefined);
    }
  });
});