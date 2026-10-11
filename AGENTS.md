# Architecture rules

- Define AI Noob Club palette roles as semantic tokens in the global stylesheet and use them in both Club routes, so brand colors remain consistent and themeable.- Build AI Noob Club page head tags with the shared Club meta helper and swap them to the active language in the browser, because DE and EN share one URL.
- Render language-specific wide logos at every Club header breakpoint; clip circular badge corners instead of altering the artwork, so original brand details remain intact.
- Keep Club typography scoped to .noob-theme and serve its display font locally, so HUMINT styling remains unchanged.
