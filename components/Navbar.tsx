// Navbar.tsx — your site's top navigation bar.
// This is a "component": a reusable piece of UI you can drop into any page.

import Image from "next/image"; // Next's optimized image component (faster than <img>)
import Link from "next/link";   // Next's link component for navigating between pages

// The list of nav links. Keeping them in an array means we can loop over them
// instead of copy-pasting the same markup 5 times. Add/remove links here later.
const navLinks = [
  { label: "HOME", href: "/" },
  { label: "MANIFESTO", href: "/manifesto" },
  { label: "EXPERIENCES", href: "/experiences" },
  { label: "COMMUNITY", href: "/community" },
  { label: "ARCHIVE", href: "/archive" },
];

export default function Navbar() {
  return (
    <header className="flex items-center justify-between border-b border-rule px-8 py-5">
      {/* LEFT: logo + wordmark, links back to home */}
      <Link href="/" className="flex items-center gap-3">
        <Image src="/logo.svg" alt="VibezCartel" width={36} height={36} />
        <span className="font-display text-xl tracking-wide text-cream">
          VIBEZ<span className="text-amber">CARTEL</span>
        </span>
      </Link>

      {/* CENTER: the nav links. We .map() over the array to render each one. */}
      <nav className="hidden gap-8 md:flex">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="font-mono text-xs tracking-[0.2em] text-grey transition-colors hover:text-amber"
          >
            {link.label}
          </Link>
        ))}
      </nav>

      {/* RIGHT: the call-to-action button */}
      <Link
        href="/join"
        className="bg-amber px-5 py-2 font-mono text-xs font-bold tracking-[0.15em] text-onyx transition-colors hover:bg-amber-dim"
      >
        JOIN THE CARTEL
      </Link>
    </header>
  );
}