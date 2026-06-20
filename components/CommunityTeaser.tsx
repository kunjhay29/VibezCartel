// CommunityTeaser.tsx — previews the five community tiers on the home page.

import SectionTag from "./SectionTag";
import AmberButton from "./AmberButton";

// The five tiers — hardcoded for now, from the DB later.
// Each has a number, name, and short description.
const tiers = [
  { number: "01", name: "THE COUNCIL", desc: "The founders. The keepers of the frequency." },
  { number: "02", name: "THE ENGINE", desc: "The doers. They make experiences happen." },
  { number: "03", name: "THE SYNDICATE", desc: "The core members. The heartbeat of the crew." },
  { number: "04", name: "THE VANGUARD", desc: "The ambassadors. They carry the movement outward." },
  { number: "05", name: "THE ALLIES", desc: "The extended family. Friends of the cartel." },
];

export default function CommunityTeaser() {
  return (
    <section className="border-t border-rule px-8 py-32 md:px-16">
      <div className="mx-auto max-w-5xl">
        <SectionTag>THE COMMUNITY · FIVE TIERS</SectionTag>
        <h2 className="mt-6 font-display text-5xl tracking-wide text-cream md:text-7xl">
          THE STRUCTURE
        </h2>
        <p className="mt-4 max-w-2xl font-body text-lg text-grey">
          You don&apos;t apply to belong. You climb by showing up. Everyone
          starts somewhere — the rest is earned.
        </p>

        {/* The tier list. Each row = number + name + description.
            We map over the array, rendering one row per tier. */}
        <div className="mt-12 flex flex-col">
          {tiers.map((tier) => (
            <div
              key={tier.number}
              // group + hover = the row lights up amber when you hover it.
              // border-b puts a hairline between rows. items-center aligns vertically.
              className="group flex items-center gap-6 border-b border-rule py-6 transition-colors hover:border-amber"
            >
              {/* The tier number */}
              <span className="font-display text-3xl text-rule transition-colors group-hover:text-amber">
                {tier.number}
              </span>
              {/* The tier name */}
              <span className="w-48 font-display text-2xl tracking-wide text-cream">
                {tier.name}
              </span>
              {/* The description — hidden on mobile, shown on md+ */}
              <span className="hidden font-body text-base text-grey md:block">
                {tier.desc}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <AmberButton label="EXPLORE THE COMMUNITY" href="/community" variant="ghost" />
        </div>
      </div>
    </section>
  );
}