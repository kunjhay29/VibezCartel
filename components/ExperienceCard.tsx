// ExperienceCard.tsx — a single experience card.
// Takes props for one experience and renders it. We'll reuse this in a grid.

import Link from "next/link";

// The shape of one experience's data. Later, this same shape comes from the DB.
type ExperienceCardProps = {
  number: string;   // e.g. "001"
  title: string;    // e.g. "Olumo Rock"
  vibe: string;     // e.g. "ADVENTURE · DAY"
  description: string;
  slug: string;     // used for the link, e.g. "olumo-rock"
};

export default function ExperienceCard({
  number,
  title,
  vibe,
  description,
  slug,
}: ExperienceCardProps) {
  return (
    // group lets child elements react when you hover the whole card.
    // border + hover:border-amber = subtle amber highlight on hover.
    <Link
      href={`/experiences/${slug}`}
      className="group flex flex-col border border-rule p-8 transition-colors hover:border-amber"
    >
      {/* Big faint number, top of the card */}
      <span className="font-display text-5xl text-rule transition-colors group-hover:text-amber">
        {number}
      </span>

      {/* The vibe tag */}
      <span className="mt-6 font-mono text-[10px] tracking-[0.2em] text-amber">
        {vibe}
      </span>

      {/* The title */}
      <h3 className="mt-2 font-display text-3xl tracking-wide text-cream">
        {title}
      </h3>

      {/* The description */}
      <p className="mt-3 font-body text-base leading-relaxed text-grey">
        {description}
      </p>
    </Link>
  );
}