/** Repair Instagram URLs that placed an encoded fragment in the path. */
export function clubLegacyRedirect(pathname: string, searchStr: string): string | undefined {
  const match = /^\/ai-noob-club(?:#|%23)(.*)$/.exec(pathname);
  if (!match) return undefined;

  const anchor = match[1]?.replace(/\/+$/, "");
  const hashes: Record<string, string> = {
    "edit-guide": "community",
    checkliste: "checkliste",
    community: "community",
    treffen: "treffen",
    shop: "shop",
    starterset: "community",
  };
  const hash = anchor && Object.hasOwn(hashes, anchor) ? hashes[anchor] : undefined;
  return `/ai-noob-club${searchStr}${hash ? `#${hash}` : ""}`;
}