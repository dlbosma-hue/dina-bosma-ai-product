import type { AnchorHTMLAttributes } from "react";

export function Ext(props: AnchorHTMLAttributes<HTMLAnchorElement>) {
  return <a target="_blank" rel="noopener noreferrer" {...props} />;
}
