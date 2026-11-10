import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JoinBar from "@/components/JoinBar";

const laws = [
  { n: "01", title: "Logic Meets Magic", text: "We use the discipline and precision of our professional backgrounds to engineer soul-stirring experiences. We think like Engineers but feel like Artists." },
  { n: "02", title: "Protect the Frequency", text: "Zero-tolerance for \"Vibe-Killers,\" ego, or toxicity. In Lagos, energy is our most valuable currency." },
  { n: "03", title: "Main Character Directive", text: "Stop living in the background of someone else's story. You are the director, the lead, and the cinematographer of your own life." },
  { n: "04", title: "Document the Truth", text: "We are Archivists, not Influencers. We document the grit, the blur of the dancefloor, and the raw beauty of the process." },
  { n: "05", title: "Reclaim the Soil", text: "Nigeria is not just a place we work; it's a canvas we explore. From the mist of the hills to the heat of Lagos nightlife." },
  { n: "06", title: "The Strategic Reset", text: "Every rave, every trip, every session is a conscious act of clearing the mental cache — returning to professional life with absolute clarity." },
  { n: "07", title: "High-Fidelity Standards", text: "If it's worth doing, it's worth documenting beautifully. Whether a 15-second reel or a feature-length documentary — global cinematic standards only." },
  { n: "08", title: "Community Over Competition", text: "We share resources, hidden locations, new sounds, and professional leads. When one Syndicate member wins, the collective rises." },
  { n: "09", title: "Zero Gatekeeping", text: "We are a bridge, not a wall. If you find a new editing hack, a hidden beach, or a game-changing sound — you bring it to the table." },
  { n: "10", title: "Experience. Create. Repeat.", text: "The ultimate loop. Live something real, create something from it, and go again. This is the rhythm of the Cartel." },
];

export default function ManifestoPage() {
  return (
    <div className="min-h-screen bg-onyx text-cream" style={{ paddingTop: "52px" }}>
      <Navbar />

      {/* HERO */}
      {/* HERO */}
      <section className="relative flex items-center justify-center overflow-hidden text-center" style={{ minHeight: "92vh", padding: "80px 40px" }}>
        {/* background image + dark overlay */}
        <div className="absolute inset-0 z-0">
          <Image src="/amber-light-beam.jpg" alt="" fill className="object-cover" />
          <div className="absolute inset-0" style={{ background: "rgba(10,10,10,.78)" }} />
        </div>
        {/* faint diagonal texture */}
        <div
          className="pointer-events-none absolute inset-0 z-[1]"
          style={{ background: "repeating-linear-gradient(-45deg,transparent,transparent 60px,rgba(255,191,0,.012) 61px)" }}
        />

        <div className="relative z-[2]" style={{ maxWidth: "820px" }}>
          <p className="mb-5 font-mono text-[0.5rem] uppercase tracking-[0.25em] text-amber">
            The VibezCartel Manifesto
          </p>
          <h1 className="font-display uppercase" style={{ fontSize: "clamp(5rem,18vw,14rem)", lineHeight: "0.84", letterSpacing: "0.01em" }}>
            We are
            <br />
            <span className="text-amber">the prison</span>
            <br />
            break.
          </h1>
          <div style={{ width: "64px", height: "2px", background: "#FFBF00", margin: "22px auto" }} />
          <p className="font-body italic text-[#B0B0B0]" style={{ fontSize: "clamp(1rem,1.6vw,1.2rem)", lineHeight: "1.75" }}>
            &quot;VibezCartel exists to stage a prison break for the soul.&quot;
          </p>
        </div>
      </section>

      {/* BODY 1 */}
      <div className="mx-auto" style={{ maxWidth: "760px", padding: "0 40px 0" }}>
        <p className="font-body text-[#B0B0B0]" style={{ fontSize: "clamp(.95rem,1.5vw,1.15rem)", lineHeight: "1.8", marginBottom: "22px" }}>
          Lagos is a beautiful chaos, but it can also be a golden cage. Between the 9-to-5 grind, the endless commute, and the societal pressure to &quot;behave,&quot; we often forget that we are free. We have been taught to <strong className="font-semibold text-cream">survive</strong> Nigeria, but we have forgotten how to <strong className="font-semibold text-cream">explore</strong> it.
        </p>
        <p className="font-body font-semibold text-cream" style={{ fontSize: "clamp(.95rem,1.5vw,1.15rem)", lineHeight: "1.8", marginBottom: "22px" }}>
          &quot;VibezCartel exists because the Hustle needs a Soul.&quot;
        </p>
        <p className="font-body text-[#B0B0B0]" style={{ fontSize: "clamp(.95rem,1.5vw,1.15rem)", lineHeight: "1.8", marginBottom: "22px" }}>
          In Lagos, everyone is hustling, but who is actually living? We are surrounded by stories on every street corner — and we choose to live ours out loud.
        </p>
      </div>

      {/* BREAKOUT 1 */}
      <div className="font-display uppercase text-amber" style={{ fontSize: "clamp(1.8rem,5vw,3.8rem)", lineHeight: "0.9", textAlign: "center", padding: "44px 40px" }}>
        We are solving
        <br />
        the crisis of the
        <br />
        monotonous life.
      </div>

      {/* BODY 2 + pull-quote */}
      <div className="mx-auto" style={{ maxWidth: "760px", padding: "0 40px 0" }}>
        <p className="font-body text-[#B0B0B0]" style={{ fontSize: "clamp(.95rem,1.5vw,1.15rem)", lineHeight: "1.8", marginBottom: "22px" }}>
          We are the bridge between the cubicle and the coastline. The stress of the week fuels the need for the adventure. The adventure provides the energy to dominate the week. We didn&apos;t just find a hobby. We found a way to survive the city and thrive in the soul.
        </p>

        <div style={{ background: "#0D0D0D", borderLeft: "3px solid #FFBF00", padding: "24px 24px 24px 26px", marginBottom: "22px" }}>
          <p className="font-body italic text-cream" style={{ fontSize: "clamp(1rem,1.6vw,1.2rem)", lineHeight: "1.6", marginBottom: "10px" }}>
            &quot;VibezCartel looks like a high-end fashion magazine, sounds like an underground radio station, and feels like coming home.&quot;
          </p>
          <p className="font-mono text-[0.46rem] uppercase tracking-[0.2em] text-grey">
            — The Identity Memo
          </p>
        </div>

        <p className="font-body text-[#B0B0B0]" style={{ fontSize: "clamp(.95rem,1.5vw,1.15rem)", lineHeight: "1.8", marginBottom: "22px" }}>
          We are the Corporate Renegades. The Lens Archivists shooting at 2AM. The Sonic Alchemists. We found each other and realised we were not alone.
        </p>
      </div>

      {/* BREAKOUT 2 */}
      <div className="font-display uppercase text-cream" style={{ fontSize: "clamp(1.8rem,5vw,3.8rem)", lineHeight: "0.9", textAlign: "center", padding: "44px 40px 60px" }}>
        We don&apos;t escape life.
        <br />
        <span className="text-amber">We escape the</span>
        <br />
        <span className="text-amber">monotony of it.</span>
      </div>

      {/* 10 LAWS — 2-column grid */}
      <section style={{ padding: "56px 40px 80px" }}>
        <div>
          <p className="mb-2 font-mono text-[0.5rem] uppercase tracking-[0.25em] text-amber">
            How We Move
          </p>
          <h2 className="font-display uppercase text-cream" style={{ fontSize: "clamp(2rem,5vw,4.2rem)", lineHeight: "0.9", letterSpacing: "0.03em" }}>
            10 Laws of the Cartel.
          </h2>
          <p className="font-body italic text-[#B0B0B0]" style={{ fontSize: "clamp(1rem,1.6vw,1.2rem)", margin: "12px 0 28px" }}>
            This is not a rulebook. It is a frequency.
          </p>
          <div style={{ height: "1px", background: "#1E1E1E", marginBottom: "2px" }} />

          <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: "2px" }}>
            {laws.map((law) => {
              const isLast = law.n === "10";
              return (
                <div
                  key={law.n}
                  className="grid"
                  style={{
                    background: isLast ? "#FFBF00" : "#0D0D0D",
                    padding: "22px",
                    gridTemplateColumns: "54px 1fr",
                    gap: "14px",
                    alignItems: "start",
                  }}
                >
                  <span
                    className="font-display"
                    style={{ fontSize: "2.6rem", lineHeight: "1", color: isLast ? "rgba(0,0,0,.18)" : "#1A1A1A" }}
                  >
                    {law.n}
                  </span>
                  <div>
                    <div
                      className="font-display uppercase tracking-[0.05em]"
                      style={{ fontSize: "clamp(.85rem,1.3vw,1.1rem)", color: isLast ? "#0A0A0A" : "#F5F2EC", marginBottom: "4px" }}
                    >
                      {law.title}
                    </div>
                    <div
                      className="font-body"
                      style={{ fontSize: "0.82rem", lineHeight: "1.55", color: isLast ? "#3B2800" : "#808080" }}
                    >
                      {law.text}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <JoinBar />
      <Footer />
    </div>
  );
}