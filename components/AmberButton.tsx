// AmberButton.tsx — your primary call-to-action button.
// Reusable: pass it a label (the text) and an href (where it links).

import Link from "next/link";

// This defines what "props" (inputs) the component accepts.
// `label` is the button text, `href` is the link destination.
// `variant` is optional — lets us make a "ghost" (outline) version too.
type AmberButtonProps = {
  label: string;
  href: string;
  variant?: "solid" | "ghost"; // the "?" means optional; defaults to solid
};

export default function AmberButton({
  label,
  href,
  variant = "solid", // if no variant is passed, use "solid"
}: AmberButtonProps) {
  // Base classes shared by both variants
  const base =
    "inline-block px-6 py-3 font-mono text-xs font-bold tracking-[0.15em] transition-colors";

  // Variant-specific classes, picked based on the prop
  const styles =
    variant === "solid"
      ? "bg-amber text-onyx hover:bg-amber-dim"               // filled amber
      : "border border-amber text-amber hover:bg-amber hover:text-onyx"; // outline

  return (
    <Link href={href} className={`${base} ${styles}`}>
      {label}
    </Link>
  );
}