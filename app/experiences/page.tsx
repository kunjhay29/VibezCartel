import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JoinBar from "@/components/JoinBar";

const rows = [
  {
    num: "01 — Nightlife", title: "Vibez Nights", sub: "The Underground Pulse",
    desc: "High-octane flagship events in unconventional spaces — abandoned warehouses in Oregun, hidden rooftops in VI, brutalist basements on the Mainland. A relentless journey through Afrohouse, Deep House, Gqom, 3-Step, Amapiano, and Mara. The dancefloor as sanctuary.",
    pq: "\"The dancefloor as sanctuary — where the corporate mask dissolves and the human being emerges.\"",
    vibe: "Rhythmic · Industrial · Soul-Stirring", image: "/vibez-nights.jpg",
  },
  {
    num: "02 — Adventure", title: "Vibez Adventures", sub: "The Horizon Quest",
    desc: "Curated road trips that prove Nigeria is a premier global destination. Hiking the mist-covered peaks of Idanre Hills, kayaking through the Epe Mangroves, or finding the untapped waterfalls of Ekiti. Soundtracked by curated House mixes, fully documented by Lens Archivists.",
    pq: "\"We find the spots that aren't on the tourist maps — because they were never meant for tourists.\"",
    vibe: "Earthy · Adventurous · Cinematic", image: "/vibez-adventures.jpg",
  },
  {
    num: "03 — Escapes", title: "Vibez Escapes", sub: "The Coastal Reset",
    desc: "Boutique beach retreats at the private villas of Ilashe or the bohemian spirit of Tarkwa Bay. Private boat rides, sunset Soulful House DJ sets, high-end seafood, and bonfire conversations with your tribe. The ultimate \"Switch\" from the office to the Atlantic waves.",
    pq: "\"The Atlantic doesn't care about your KPIs.\"",
    vibe: "Golden · Soulful · Sophisticated", image: "/vibez-escapes.jpg",
  },
  {
    num: "04 — Sessions", title: "Vibez Sessions", sub: "The Sonic Laboratory",
    desc: "Intimate, invite-only gatherings focused on discovery. Live-recorded sets, listening parties for upcoming artists, and deep-dive sessions into the origins of House music in Africa. Studios and creative lofts. Discovery before the mainstream.",
    pq: "\"You heard it here first. Before the algorithm found it.\"",
    vibe: "Intimate · Sonic · Pioneering", image: "/vibez-sessions.jpg",
  },
  {
    num: "05 — Network", title: "Vibez Connect", sub: "The Logic & Magic Mixer",
    desc: "Networking that doesn't feel like work. Rooftop brunches or gallery takeovers where the Corporate Renegade meets the Cultural Architect. Backgrounded by Lounge and Deep House — sharing professional hacks, creative gear tips, and project ideas. Backend meets Bassline.",
    pq: "\"The person next to you runs the systems that run Lagos. And makes the best playlists.\"",
    vibe: "Connected · Elevated · High-Style", image: "/vibez-connect.jpg",
  },
];

export default function ExperiencesPage() {
  return (
    <div className="min-h-screen bg-onyx text-cream" style={{ paddingTop: "52px" }}>
      <Navbar />

      {/* HERO — correct image (vibez-adventures), gradient, bottom-left text */}
      <section className="relative flex items-end overflow-hidden" style={{ height: "72vh", minHeight: "500px", padding: "0 40px 52px" }}>
        <div className="absolute inset-0 z-0">
          <Image src="/vibez-adventures.jpg" alt="Experiences hero" fill className="object-cover" priority />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top,rgba(10,10,10,.9) 0%,rgba(10,10,10,.3) 60%,transparent 100%)" }} />
        </div>
        <div className="relative z-[1]" style={{ maxWidth: "900px" }}>
          <p className="mb-4 font-mono text-[0.5rem] uppercase tracking-[0.25em] text-amber">
            Five High-Frequency Resets
          </p>
          <h1 className="font-display uppercase" style={{ fontSize: "clamp(3rem,12vw,9rem)", lineHeight: "0.84", letterSpacing: "0.01em" }}>
            Experiences <span className="text-amber">we curate.</span>
          </h1>
          <p className="mt-5 font-body italic text-[#B0B0B0]" style={{ fontSize: "clamp(1rem,1.6vw,1.25rem)" }}>
            &quot;We don&apos;t sell tickets. We grant access.&quot;
          </p>
        </div>
      </section>

      {/* ROWS — alternating, with hover-zoom image + amber stacked button */}
      <div className="flex flex-col" style={{ gap: "2px" }}>
        {rows.map((row, i) => {
          const reversed = i % 2 === 1;

          const ImageBlock = (
            // 'group' enables the hover-zoom on the inner image
            <div className="group relative overflow-hidden" style={{ minHeight: "clamp(280px,34vw,520px)" }}>
              <Image
                src={row.image}
                alt={row.title}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
            </div>
          );

          const BodyBlock = (
            <div className="flex flex-col justify-between" style={{ background: "#0D0D0D", padding: "44px" }}>
              <div>
                <p className="font-mono text-[0.46rem] uppercase tracking-[0.22em] text-amber" style={{ marginBottom: "8px" }}>
                  {row.num}
                </p>
                <h2 className="font-display uppercase text-cream" style={{ fontSize: "clamp(1.8rem,4vw,3.2rem)", lineHeight: "0.9", marginBottom: "14px" }}>
                  {row.title}
                </h2>
                <p className="font-mono text-[0.44rem] uppercase tracking-[0.2em] text-acid" style={{ marginBottom: "14px" }}>
                  {row.sub}
                </p>
                <p className="font-body text-[#B0B0B0]" style={{ fontSize: "clamp(.88rem,1.2vw,1rem)", lineHeight: "1.72", marginBottom: "18px" }}>
                  {row.desc}
                </p>
                <div style={{ background: "#0A0A0A", borderLeft: "3px solid #FFBF00", padding: "16px 18px", marginBottom: "18px" }}>
                  <p className="font-body italic text-cream" style={{ fontSize: "clamp(.9rem,1.3vw,1.05rem)", lineHeight: "1.55" }}>
                    {row.pq}
                  </p>
                </div>
              </div>

              {/* vibe tags, then the AMBER button STACKED below */}
              <div>
                <p className="font-mono text-[0.44rem] uppercase tracking-[0.15em] text-grey" style={{ marginBottom: "16px" }}>
                  {row.vibe}
                </p>
                <Link
                  href="/join"
                  className="btn-amber px-[28px] py-[14px] font-mono text-[0.52rem] font-bold uppercase tracking-[0.22em]"
                >
                  Request Access
                </Link>
              </div>
            </div>
          );

          return (
            <div key={row.title} className="grid grid-cols-1 md:grid-cols-2">
              {reversed ? (
                <>
                  <div className="hidden md:block">{BodyBlock}</div>
                  {ImageBlock}
                  <div className="md:hidden">{BodyBlock}</div>
                </>
              ) : (
                <>
                  {ImageBlock}
                  {BodyBlock}
                </>
              )}
            </div>
          );
        })}
      </div>

      <JoinBar />
      <Footer />
    </div>
  );
}