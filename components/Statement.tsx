import Link from "next/link";

export default function Statement() {
  const subText =
    "The corporate world sees your output. We see the rest — the Lens Archivist waiting for golden hour, the Sonic Alchemist chasing the next frequency, the Horizon Hunter with a map full of untapped places.";

  return (
    <section className="relative text-center" style={{ padding: "88px 40px" }}>
      <p className="mb-3 font-mono text-[0.5rem] uppercase tracking-[0.25em] text-amber">
        The Architecture of the Escape
      </p>

      <h2
        className="mx-auto font-display uppercase text-cream"
        style={{ fontSize: "clamp(2rem,6vw,5.2rem)", lineHeight: "0.9", maxWidth: "940px", marginBottom: "24px" }}
      >
        Lagos runs on two speeds.
        <br />
        <span className="text-amber">We are the bridge.</span>
      </h2>

      <p
        className="mx-auto font-body italic text-[#B0B0B0]"
        style={{ fontSize: "clamp(1rem,1.6vw,1.25rem)", maxWidth: "580px", marginBottom: "32px", lineHeight: "1.75" }}
      >
        {subText}
      </p>

      <div className="flex flex-wrap justify-center gap-3">
        <Link
          href="/manifesto"
          className="inline-flex items-center bg-amber px-7 py-[14px] font-mono text-[0.52rem] uppercase tracking-[0.22em] text-onyx transition-colors hover:bg-amber-dim"
        >
          Read the Manifesto
        </Link>
        <Link
          href="/community"
          className="inline-flex items-center border px-[26px] py-[13px] font-mono text-[0.52rem] uppercase tracking-[0.22em] text-cream transition-colors hover:bg-cream hover:text-onyx"
          style={{ borderColor: "rgba(245,242,236,.3)" }}
        >
          Meet the Syndicate
        </Link>
      </div>
    </section>
  );
}