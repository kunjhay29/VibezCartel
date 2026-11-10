import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionTag from "@/components/SectionTag";
import AmberButton from "@/components/AmberButton";

const tiers = [
  { number: "01", name: "The Council", desc: "Keepers of the Logic & Magic blueprint. Strategic direction, financial oversight, and protecting the frequency." },
  { number: "02", name: "The Engine", desc: "Lead Lens Archivists and Sonic Alchemists. Documenting every Reset to global cinematic standards." },
  { number: "03", name: "The Syndicate", desc: "The heartbeat of the collective. Priority access to all experiences and a network of high-frequency peers." },
  { number: "04", name: "The Vanguard", desc: "Faces of the movement in different cities. Bridge between the Underground and the Mainstream." },
  { number: "05", name: "The Allies", desc: "Spaces and entities that align with our frequency — the canvas that enhances the Reset." },
];

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-onyx text-cream" style={{ paddingTop: "52px" }}>
      <Navbar />
      <section className="px-8 pt-24 pb-12 md:px-16">
        <div className="mx-auto max-w-5xl">
          <SectionTag>THE SYNDICATE NETWORK</SectionTag>
          <h1 className="mt-6 font-display text-6xl tracking-wide text-cream md:text-8xl">
            THE COMMUNITY.
          </h1>
          <p className="mt-4 max-w-2xl font-body text-lg text-grey">
            You already know which one you are. Here is how we are organised.
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
          One founding dot. Infinite connections.
        </p>
        <div className="mt-6 flex justify-center">
          <AmberButton label="JOIN THE CARTEL" href="/join" />
        </div>
      </section>

      <Footer />
    </div>
  );
}