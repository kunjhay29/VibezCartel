// app/community/page.tsx — the full Community / tiers page (/community).

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionTag from "@/components/SectionTag";
import AmberButton from "@/components/AmberButton";

const tiers = [
  { number: "01", name: "THE COUNCIL", desc: "The founders. The keepers of the frequency and the final word on direction." },
  { number: "02", name: "THE ENGINE", desc: "The doers. They plan, organize, and make experiences actually happen." },
  { number: "03", name: "THE SYNDICATE", desc: "The core members. Consistent, committed — the heartbeat of the crew." },
  { number: "04", name: "THE VANGUARD", desc: "The ambassadors. They carry the movement to new rooms and new cities." },
  { number: "05", name: "THE ALLIES", desc: "The extended family. Friends of the cartel who show up and add energy." },
];

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-onyx text-cream">
      <Navbar />

      <section className="px-8 pt-24 pb-12 md:px-16">
        <div className="mx-auto max-w-5xl">
          <SectionTag>THE COMMUNITY · FIVE TIERS</SectionTag>
          <h1 className="mt-6 font-display text-6xl tracking-wide text-cream md:text-8xl">
            HOW YOU BELONG
          </h1>
          <p className="mt-4 max-w-2xl font-body text-lg text-grey">
            You don&apos;t apply to belong. You climb by showing up. Everyone
            starts as an ally — the rest is earned through energy and
            contribution.
          </p>
        </div>
      </section>

      <section className="px-8 pb-20 md:px-16">
        <div className="mx-auto max-w-5xl">
          {tiers.map((tier) => (
            <div
              key={tier.number}
              className="group grid grid-cols-1 gap-2 border-t border-rule py-8 transition-colors hover:border-amber md:grid-cols-[80px_240px_1fr] md:items-center"
            >
              <span className="font-display text-4xl text-rule transition-colors group-hover:text-amber">
                {tier.number}
              </span>
              <span className="font-display text-3xl tracking-wide text-cream">
                {tier.name}
              </span>
              <span className="font-body text-lg text-grey">{tier.desc}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="px-8 pb-32 text-center md:px-16">
        <p className="font-body text-2xl italic text-cream">
          Ready to find your frequency?
        </p>
        <div className="mt-6 flex justify-center">
          <AmberButton label="JOIN THE CARTEL" href="/join" />
        </div>
      </section>

      <Footer />
    </div>
  );
}