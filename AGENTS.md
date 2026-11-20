# Architecture rules

- Scope HUMINT redesign tokens and styles to `.humint-theme` on the homepage and its project dialog; preserve the independent Club theme so either brand can evolve without cross-page styling regressions.

- Define AI Noob Club palette roles as semantic tokens in the global stylesheet and use them in both Club routes, so brand colors remain consistent and themeable.- Build AI Noob Club page head tags with the shared Club meta helper and swap them to the active language in the browser, because DE and EN share one URL.
- Keep imported Club components in src/components/club and language state in src/club-i18n, isolated from HUMINT components and language state to prevent cross-brand changes.
- Keep Club typography scoped to .noob-theme and serve its display font locally, so HUMINT styling remains unchanged.
- Validate imported Club forms in the shared browser-safe schema and dedicated public handler; store signups in waitlist_submissions with signup_list and contacts in contact_requests using service-role-only insertion, so visitors cannot read records and duplicates and durable limits stay enforced.
- Use list-specific validation for the combined Community signup and leave the product waitlist separate; preserve existing storage labels and records so the new journey does not silently reclassify subscribers. Community receipts acknowledge submission only; membership capacity and acceptance are manually checked.
- Keep the product preview copy in the Club translation dictionary and reuse the signup form with optional localized action and receipt labels, so the product waitlist stays independent without changing other signup journeys.
- Keep retired Club URLs as permanent redirects and public video references as URL strings with failure handling, so printed links survive and missing future uploads never leave a broken player.
- Handle the literal legacy underscore privacy URL in the root beforeLoad; an escaped underscore route collides with the existing pathless route's generated symbol.
- Repair Club paths containing encoded fragments centrally in root beforeLoad with the browser-safe Club redirect helper, preserving the raw query string and sharing the same permanent redirect on server and client.
- Mount imported Club content as children of the /ai-noob-club layout with its own header, footer and scoped .noob-theme.new-club styles, so HUMINT remains unchanged.
- Map newly uploaded Club media through src/config/photos.ts, frames.ts and links.ts asset pointers, so language-specific artwork and PDFs remain centralized without binary files in Git.
