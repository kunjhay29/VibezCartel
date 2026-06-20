// Hero.tsx — the big landing section, rebuilt from the original VibezCartel design.

import SectionTag from "./SectionTag";
import AmberButton from "./AmberButton";

export default function Hero() {
  return (
    // relative + overflow-hidden lets us layer a background glow behind the text.
    // min-h-[88vh] = at least 88% of the screen height. flex column, centered left.
    <section className="relative flex min-h-[88vh] flex-col justify-center overflow-hidden px-8 md:px-16">
      {/* Background amber glow — a soft radial light, top-right, behind everything.
          pointer-events-none means it never blocks clicks. */}
      <div
        className="pointer-events-none absolute right-0 top-0 h-[600px] w-[600px] rounded-full opacity-20 blur-[120px]"
        style={{ background: "radial-gradient(circle, #FFBF00 0%, transparent 70%)" }}
      />

      {/* The content sits above the glow (relative + z-10 = on top). max-w caps width. */}
      <div className="relative z-10 max-w-4xl">
        <div className="mb-6">
          <SectionTag>ARCHITECTURE OF THE ESCAPE · THE 234 FREQUENCY</SectionTag>
        </div>

        {/* The giant headline. leading-[0.85] tightens the line spacing so the two
            words stack tightly, like the original design. */}
        <h1 className="font-display text-7xl leading-[0.85] tracking-wide md:text-9xl">
          <span className="block text-cream">VIBEZ</span>
          <span className="block text-amber">CARTEL</span>
        </h1>

        {/* The tagline */}
        <p className="mt-6 font-mono text-sm tracking-[0.3em] text-grey md:text-base">
          EXPERIENCE · CREATE · REPEAT
        </p>

        {/* The two call-to-action buttons */}
        <div className="mt-10 flex flex-wrap gap-4">
          <AmberButton label="EXPLORE EXPERIENCES" href="/experiences" />
          <AmberButton label="JOIN THE CARTEL" href="/join" variant="ghost" />
        </div>

        {/* The little meta row at the bottom — three labeled facts, like the design */}
        <div className="mt-16 flex flex-wrap gap-10">
          <div>
            <p className="font-mono text-[10px] tracking-[0.2em] text-grey">THE MOVEMENT</p>
            <p className="font-display text-lg tracking-wide text-cream">LAGOS → THE WORLD</p>
          </div>
          <div>
            <p className="font-mono text-[10px] tracking-[0.2em] text-grey">EST.</p>
            <p className="font-display text-lg tracking-wide text-cream">2025 · NIGERIA</p>
          </div>
          <div>
            <p className="font-mono text-[10px] tracking-[0.2em] text-grey">GENRE</p>
            <p className="font-display text-lg tracking-wide text-cream">HOUSE · GQOM · AMAPIANO</p>
          </div>
        </div>
      </div>
    </section>
  );
}