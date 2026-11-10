"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation"; // tells us the current URL path

const navLinks = [
  { label: "HOME", href: "/" },
  { label: "MANIFESTO", href: "/manifesto" },
  { label: "EXPERIENCES", href: "/experiences" },
  { label: "COMMUNITY", href: "/community" },
  { label: "ARCHIVE", href: "/archive" },
];

export default function Navbar() {
  const pathname = usePathname(); // e.g. "/experiences" or "/"

  return (
    <header
      className="fixed left-0 right-0 top-0 z-[990] flex items-center justify-between px-10"
      style={{
        height: "52px",
        background: "rgba(8,8,8,.94)",
        borderBottom: "1px solid #1E1E1E",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
      }}
    >
      <Link href="/" className="flex items-center gap-2">
        <Image src="/logo.svg" alt="VibezCartel" width={22} height={22} />
        <span className="font-display text-base tracking-wide text-cream">
          VIBEZ<span className="text-amber">CARTEL</span>
        </span>
      </Link>

      <nav className="hidden md:flex">
        {navLinks.map((link) => {
          // is THIS link the page we're currently on?
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className="group relative px-4 py-[18px] font-mono text-[0.5rem] uppercase tracking-[0.22em] transition-colors"
              style={{ color: isActive ? "#FFBF00" : "#808080" }}
            >
              {link.label}
              {/* the amber underline: full width when active, grows on hover */}
              <span
                className="absolute bottom-0 left-4 right-4 origin-left transition-transform duration-300 group-hover:scale-x-100"
                style={{
                  height: "1px",
                  background: "#FFBF00",
                  transform: isActive ? "scaleX(1)" : "scaleX(0)",
                }}
              />
            </Link>
          );
        })}
      </nav>

      <Link
        href="/join"
        className="bg-amber px-4 py-[7px] font-mono text-[0.5rem] font-bold uppercase tracking-[0.15em] text-onyx transition-colors hover:bg-amber-dim"
      >
        Join the Cartel
      </Link>
    </header>
  );
}