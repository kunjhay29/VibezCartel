import Image from "next/image";

type ExperienceCardProps = {
  number: string;
  title: string;
  sub: string;
  vibe: string;
  description: string;
  image?: string; // optional now — the "?" means it may be missing
};

export default function ExperienceCard({
  number, title, sub, vibe, description, image,
}: ExperienceCardProps) {
  return (
    <div className="flex-shrink-0 overflow-hidden bg-[#0D0D0D]" style={{ width: "clamp(260px,26vw,340px)" }}>
      {/* Image area with scrim — only render <Image> if we actually have one */}
      <div className="relative" style={{ height: "clamp(200px,22vw,280px)" }}>
        {image ? (
          <Image src={image} alt={title} fill className="object-cover" />
        ) : (
          // graceful fallback: a dark panel if no image is supplied
          <div className="absolute inset-0 bg-[#141414]" />
        )}
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: "linear-gradient(to top,rgba(10,10,10,.85) 0%,rgba(10,10,10,.1) 55%,transparent 100%)" }}
        />
      </div>

      <div style={{ padding: "18px" }}>
        <p className="mb-[6px] font-mono text-[0.44rem] uppercase tracking-[0.2em] text-amber">{number}</p>
        <h3 className="mb-[6px] font-display uppercase tracking-[0.04em] text-cream" style={{ fontSize: "clamp(1rem,1.6vw,1.3rem)" }}>{title}</h3>
        <p className="mb-2 font-mono text-[0.42rem] uppercase tracking-[0.15em] text-acid">{sub}</p>
        <p className="font-body text-[0.8rem] leading-[1.55] text-grey">{description}</p>
        <p className="mt-[10px] inline-flex items-center gap-[7px] font-mono text-[0.42rem] uppercase tracking-[0.14em] text-grey">{vibe}</p>
      </div>
    </div>
  );
}