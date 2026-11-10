import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex h-screen min-h-[600px] flex-col justify-end overflow-hidden">
      {/* Background skyline image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/lagos-golden-hour-skyline.jpg"
          alt="Lagos golden hour skyline"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Grid texture overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg,transparent,transparent 79px,rgba(26,26,26,.4) 80px),repeating-linear-gradient(90deg,transparent,transparent 79px,rgba(26,26,26,.4) 80px)",
        }}
      />

      {/* Amber glow */}
      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background:
            "radial-gradient(ellipse 65% 50% at 50% 38%,rgba(255,191,0,.06) 0%,transparent 70%)",
        }}
      />

      {/* Giant ghost "VC" watermark */}
      <div
        className="pointer-events-none absolute z-[1] select-none font-display uppercase leading-[0.85]"
        style={{
          color: "rgba(26,26,26,.5)",
          bottom: "-6%",
          left: "-2%",
          fontSize: "min(42vw,640px)",
        }}
      >
        VC
      </div>

      {/* Top bar */}
      <div
        className="absolute left-0 right-0 top-[52px] z-[3] flex items-center justify-between border-b px-10 py-[10px]"
        style={{
          borderColor: "rgba(30,30,30,.6)",
          background: "rgba(6,6,6,.6)",
          backdropFilter: "blur(8px)",
        }}
      >
        <span className="font-mono text-[0.46rem] uppercase tracking-[0.2em] text-grey">
          Issue 001 · The Manifesto Edition · 2026
        </span>
        <span className="font-mono text-[0.46rem] uppercase tracking-[0.2em] text-grey">
          Lagos, Nigeria · Est. 2025
        </span>
      </div>

      {/* Main content, anchored to bottom */}
      <div className="relative z-[3] px-10 pb-11">
        <p className="mb-[14px] flex items-center gap-2 font-mono text-[0.55rem] uppercase tracking-[0.3em] text-amber">
          Architecture of the Escape · The 234 Frequency
        </p>

        <h1>
          <span
            className="block font-display text-cream"
            style={{ fontSize: "clamp(5.5rem,17vw,13rem)", lineHeight: "0.84" }}
          >
            VIBEZ
          </span>
          <span
            className="block font-display text-amber"
            style={{ fontSize: "clamp(5.5rem,17vw,13rem)", lineHeight: "0.84" }}
          >
            CARTEL
          </span>
        </h1>

        <p
          className="font-display uppercase text-grey"
          style={{
            fontSize: "clamp(1rem,2.2vw,1.7rem)",
            letterSpacing: "0.32em",
            margin: "8px 0 28px",
          }}
        >
          Experience · Create · Repeat
        </p>

        {/* Meta row */}
        <div
          className="flex flex-wrap items-center gap-0 pt-5"
          style={{ borderTop: "1px solid rgba(30,30,30,.8)" }}
        >
          <MetaItem label="The Movement" value="Lagos → The World" />
          <MetaItem label="Est." value="2025 · Nigeria" />
          <MetaItem label="Genre" value="House · Gqom · Amapiano" />

          <div className="ml-auto flex flex-wrap gap-[10px]">
            <Link
              href="/experiences"
              className="inline-flex items-center bg-amber px-7 py-[14px] font-mono text-[0.52rem] uppercase tracking-[0.22em] text-onyx transition-colors hover:bg-amber-dim"
            >
              Explore Experiences
            </Link>
            <Link
              href="/join"
              className="inline-flex items-center border px-[26px] py-[13px] font-mono text-[0.52rem] uppercase tracking-[0.22em] text-cream transition-colors hover:bg-cream hover:text-onyx"
              style={{ borderColor: "rgba(245,242,236,.3)" }}
            >
              Join the Cartel
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// Small helper for each meta item, matching the original's bordered cells.
function MetaItem({ label, value }: { label: string; value: string }) {
  return (
    <div
      className="px-6"
      style={{ borderRight: "1px solid rgba(30,30,30,.8)" }}
    >
      <div className="font-mono text-[0.44rem] uppercase tracking-[0.18em] text-grey">
        {label}
      </div>
      <div className="mt-[2px] font-mono text-[0.52rem] uppercase tracking-[0.16em] text-cream">
        {value}
      </div>
    </div>
  );
}