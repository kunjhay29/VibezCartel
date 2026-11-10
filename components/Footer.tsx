import Link from "next/link";

const columns = [
  {
    heading: "Navigate",
    links: [
      { label: "Home", href: "/" },
      { label: "Manifesto", href: "/manifesto" },
      { label: "Experiences", href: "/experiences" },
      { label: "Community", href: "/community" },
      { label: "Archive", href: "/archive" },
    ],
  },
  {
    heading: "Experiences",
    links: [
      { label: "Vibez Nights", href: "/experiences" },
      { label: "Vibez Adventures", href: "/experiences" },
      { label: "Vibez Escapes", href: "/experiences" },
      { label: "Vibez Sessions", href: "/experiences" },
      { label: "Vibez Connect", href: "/experiences" },
    ],
  },
  {
    heading: "Syndicate",
    links: [
      { label: "Join the Cartel", href: "/join" },
      { label: "The Archetypes", href: "/community" },
      { label: "The Manifesto", href: "/manifesto" },
    ],
  },
];

export default function Footer() {
  return (
    <footer style={{ padding: "64px 40px 28px", background: "#0A0A0A" }}>
      {/* Top grid: brand + 3 link columns */}
      <div
        className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr]"
        style={{ gap: "44px", marginBottom: "52px" }}
      >
        {/* Brand column */}
        <div>
          <div
            className="font-display uppercase text-amber"
            style={{ fontSize: "1.8rem", letterSpacing: "0.1em", marginBottom: "10px" }}
          >
            VibezCartel
          </div>
          <p
            className="font-body italic text-grey"
            style={{ fontSize: "0.88rem", lineHeight: "1.65", maxWidth: "240px" }}
          >
            &quot;We don&apos;t escape life. We escape the monotony of it.&quot; — The
            Architecture of the Escape · Lagos, Nigeria.
          </p>
        </div>

        {/* Link columns */}
        {columns.map((col) => (
          <div key={col.heading}>
            <h4 className="mb-[14px] font-mono text-[0.46rem] uppercase tracking-[0.2em] text-amber">
              {col.heading}
            </h4>
            <div className="flex flex-col gap-2">
              {col.links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="font-body text-grey transition-colors hover:text-cream"
                  style={{ fontSize: "0.88rem" }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div
        className="flex flex-wrap items-center justify-between gap-[10px]"
        style={{ borderTop: "1px solid #1E1E1E", paddingTop: "22px" }}
      >
        <span className="font-mono text-[0.46rem] uppercase tracking-[0.15em] text-grey">
          © VibezCartel 2026 · Lagos, Nigeria
        </span>
        <span className="font-mono text-[0.46rem] uppercase tracking-[0.15em] text-grey">
          Experience. Create. Repeat. · The 234 Frequency
        </span>
      </div>
    </footer>
  );
}