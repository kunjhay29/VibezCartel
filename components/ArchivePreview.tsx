import Link from "next/link";
import Image from "next/image";

const items = [
  { type: "Aftermovie", title: "Vibez Nights Vol. 04 — Oregun Sessions", meta: "Film · 2026 · 8min", image: "/vibez-nights.jpg", amberTop: true },
  { type: "Documentary", title: "Idanre: The Untapped Mist", meta: "Film · 2026 · 14min", image: "/vibez-adventures.jpg", amberTop: false },
  { type: "Photo Series", title: "Golden Hour Nigeria — Vol. 1", meta: "Photography · 2026", image: "/vibez-escapes.jpg", amberTop: false },
];

export default function ArchivePreview() {
  return (
    <section style={{ padding: "88px 40px" }}>
      <div className="mb-9 flex flex-wrap items-end justify-between gap-[14px]">
        <div>
          <p className="mb-[6px] font-mono text-[0.5rem] uppercase tracking-[0.25em] text-amber">
            The Archive
          </p>
          <h2 className="font-display uppercase tracking-[0.03em] text-cream" style={{ fontSize: "clamp(2rem,5vw,4.2rem)", lineHeight: "0.9" }}>
            What we create.
          </h2>
        </div>
        <Link
          href="/archive"
          className="inline-flex items-center border px-[26px] py-[13px] font-mono text-[0.52rem] uppercase tracking-[0.22em] text-cream transition-colors hover:bg-cream hover:text-onyx"
          style={{ borderColor: "rgba(245,242,236,.3)" }}
        >
          Full Archive →
        </Link>
      </div>

      {/* 3-column grid; image on top, text body below */}
      <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: "2px" }}>
        {items.map((item) => (
          <div
            key={item.title}
            style={{
              background: "#0D0D0D",
              borderTop: item.amberTop ? "2px solid #FFBF00" : "none",
            }}
          >
            {/* Image area (landscape) */}
            <div className="relative overflow-hidden" style={{ aspectRatio: "16/11" }}>
              <Image src={item.image} alt={item.title} fill className="object-cover" />
            </div>

            {/* Text body BELOW the image */}
            <div style={{ padding: "16px 18px" }}>
              <p className="mb-[5px] font-mono text-[0.44rem] uppercase tracking-[0.2em] text-amber">
                {item.type}
              </p>
              <h3 className="mb-[4px] font-display uppercase tracking-[0.04em] text-cream" style={{ fontSize: "clamp(.9rem,1.5vw,1.2rem)" }}>
                {item.title}
              </h3>
              <p className="font-mono text-[0.42rem] uppercase tracking-[0.12em] text-grey">
                {item.meta}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}