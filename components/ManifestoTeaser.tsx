import Link from "next/link";

export default function ManifestoTeaser() {
  const bodyText =
    "We don't escape life. We escape the monotony of it. We are the Corporate Renegades, the Lens Archivists, the Sonic Alchemists — those who refuse to be one-dimensional.";

  return (
    <section className="relative overflow-hidden bg-amber" style={{ padding: "72px 40px" }}>
      <div
        className="pointer-events-none absolute select-none font-display uppercase"
        style={{ right: "-2%", bottom: "-18%", fontSize: "min(28vw,380px)", color: "rgba(0,0,0,.07)", lineHeight: "0.8" }}
      >
        RESET
      </div>

      <div className="relative z-[1]" style={{ maxWidth: "820px" }}>
        <p className="mb-3 font-mono text-[0.5rem] uppercase tracking-[0.25em] text-black/45">
          The Manifesto
        </p>

        <h2 className="font-display uppercase text-onyx" style={{ fontSize: "clamp(2rem,6vw,4.8rem)", lineHeight: "0.9", marginBottom: "18px" }}>
          VibezCartel exists
          <br />
          to stage a prison break
          <br />
          for the soul.
        </h2>

        <p className="font-body text-[#2A2A2A]" style={{ fontSize: "clamp(.9rem,1.4vw,1.05rem)", lineHeight: "1.75", maxWidth: "540px", marginBottom: "24px" }}>
          {bodyText}
        </p>

        <Link
          href="/manifesto"
          className="inline-flex items-center border px-[26px] py-[13px] font-mono text-[0.52rem] uppercase tracking-[0.22em] text-onyx transition-colors hover:bg-onyx hover:text-amber"
          style={{ borderColor: "rgba(10,10,10,.3)" }}
        >
          Read in Full
        </Link>
      </div>
    </section>
  );
}