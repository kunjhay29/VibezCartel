import Link from "next/link";

export default function CommunityTeaser() {
  const quote =
    "\"VibezCartel is not for everyone. It is for the few who refuse to be just one thing — those who possess the discipline of the professional world and the soul of the creative underground.\"";

  return (
    <section className="relative overflow-hidden" style={{ padding: "88px 40px", background: "#0D0D0D" }}>
      {/* Ghost SYNDICATE word, top-right */}
      <div
        className="pointer-events-none absolute select-none font-display uppercase"
        style={{ top: "0", right: "-2%", fontSize: "min(18vw,260px)", color: "rgba(26,26,26,.7)", lineHeight: "0.85" }}
      >
        SYNDICATE
      </div>

      <div className="relative z-[1]" style={{ maxWidth: "820px" }}>
        <p className="mb-3 font-mono text-[0.5rem] uppercase tracking-[0.25em] text-amber">
          The Syndicate
        </p>
        <h2 className="font-display uppercase text-cream" style={{ fontSize: "clamp(2rem,5vw,4.2rem)", lineHeight: "0.9", letterSpacing: "0.03em", marginBottom: "20px" }}>
          You already know
          <br />
          which one you are.
        </h2>
        <p className="font-body italic text-[#B0B0B0]" style={{ fontSize: "clamp(1rem,1.6vw,1.25rem)", maxWidth: "620px", lineHeight: "1.75", marginBottom: "28px" }}>
          {quote}
        </p>
        <Link
          href="/community"
          className="inline-flex items-center bg-amber px-7 py-[14px] font-mono text-[0.52rem] uppercase tracking-[0.22em] text-onyx transition-colors hover:bg-amber-dim"
        >
          Meet the Archetypes
        </Link>
      </div>
    </section>
  );
}