import { test } from "node:test";
import assert from "node:assert/strict";
import { noobClub } from "./noobClub";

test("German Edit Guide uses the German PDF", () => {
  assert.ok(noobClub.links.editGuidePdf.de.endsWith("/edit-guide-deutsch.pdf"));
});

test("English Edit Guide uses the English PDF", () => {
  assert.ok(noobClub.links.editGuidePdf.en.endsWith("/edit-guide-english.pdf"));
  assert.notEqual(noobClub.links.editGuidePdf.en, noobClub.links.editGuidePdf.de);
});