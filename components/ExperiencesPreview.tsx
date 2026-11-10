import Link from "next/link";
import ExperienceCard from "./ExperienceCard";

const experiences = [
  { number: "01", title: "Vibez Nights", sub: "The Underground Pulse", vibe: "Rhythmic · Industrial", image: "/vibez-nights.jpg", description: "Abandoned warehouses. Hidden rooftops. Afrohouse, Gqom, 3-Step, Amapiano, Mara." },
  { number: "02", title: "Vibez Adventures", sub: "The Horizon Quest", vibe: "Earthy · Cinematic", image: "/vibez-adventures.jpg", description: "Idanre Hills at dawn. The Epe Mangroves. Untapped waterfalls. Nigeria as destination." },
  { number: "03", title: "Vibez Escapes", sub: "The Coastal Reset", vibe: "Golden · Soulful", image: "/vibez-escapes.jpg", description: "Ilashe. Tarkwa Bay. Sunset House sets. Bonfire conversations with your tribe." },
  { number: "04", title: "Vibez Sessions", sub: "The Sonic Laboratory", vibe: "Intimate · Precise", image: "/vibez-sessions.jpg", description: "Intimate. Invite-only. Live sets and discovery before the mainstream." },
  { number: "05", title: "Vibez Connect", sub: "Logic & Magic Mixer", vibe: "Connected · High-Style", image: "/vibez-connect.jpg", description: "Rooftop brunches. Backend meets Bassline. The network that feels like belonging." },
];

export default function ExperiencesPreview() {
  return (
    <section style={{ padding: "80px 0 0" }}>
      <div className="flex flex-wrap items-end justify-between gap-[14px]" style={{ padding: "0 40px 36px" }}>
        <div>
          <p className="mb-[6px] font-mono text-[0.5rem] uppercase tracking-[0.25em] text-amber">
            Five Resets
          </p>
          <h2 className="font-display uppercase tracking-[0.03em] text-cream" style={{ fontSize: "clamp(2rem,5vw,4.2rem)", lineHeight: "0.9" }}>
            Experiences we curate.
          </h2>
        </div>
        <Link
          href="/experiences"
          className="inline-flex items-center border px-[26px] py-[13px] font-mono text-[0.52rem] uppercase tracking-[0.22em] text-cream transition-colors hover:bg-cream hover:text-onyx"
          style={{ borderColor: "rgba(245,242,236,.3)" }}
        >
          View All
        </Link>
      </div>

      <div className="overflow-hidden" style={{ padding: "0 40px 40px" }}>
        <div className="flex gap-[2px] overflow-x-auto" style={{ scrollbarWidth: "none" }}>
          {experiences.map((exp) => (
            <ExperienceCard key={exp.title} {...exp} />
          ))}
        </div>
      </div>
    </section>
  );
}