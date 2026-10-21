# Architecture rules

- Define AI Noob Club palette roles as semantic tokens in the global stylesheet and use them in both Club routes, so brand colors remain consistent and themeable.- Build AI Noob Club page head tags with the shared Club meta helper and swap them to the active language in the browser, because DE and EN share one URL.
- Use the circular badge in shared Club navigation and the language-specific wide logo above the Club landing introduction; clip badge corners instead of altering the artwork, so original brand details remain intact.
- Keep Club typography scoped to .noob-theme and serve its display font locally, so HUMINT styling remains unchanged.
- Share Club signup validation and consent in a browser-safe module; store validated submissions through the dedicated public waitlist route with private service-role-only tables and durable rate limiting, so both forms have the same limits and owner records.
- Keep retired Club URLs as permanent redirects and public video references as URL strings with failure handling, so printed links survive and missing future uploads never leave a broken player.
- Handle the literal legacy underscore privacy URL in the root beforeLoad; an escaped underscore route collides with the existing pathless route's generated symbol.
- Repair Club paths containing encoded fragments centrally in root beforeLoad with the browser-safe Club redirect helper, preserving the raw query string and sharing the same permanent redirect on server and client.
