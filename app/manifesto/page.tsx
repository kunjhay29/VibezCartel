// app/manifesto/page.tsx — the full Manifesto page (/manifesto).

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionTag from "@/components/SectionTag";

// The manifesto "tenets" — the belief statements. An array we map over.
const tenets = [
  { n: "01", title: "WE LIVE IT FIRST", body: "The movement isn't announced — it's lived. We build real memories before we build anything else." },
  { n: "02", title: "ENERGY IS EVERYTHING", body: "We use music to move between flowstates. The dancefloor isn't escape — it's transformation." },
  { n: "03", title: "DOCUMENT THE CULTURE", body: "If it wasn't captured, did it happen? We keep the archive. The story is half the experience." },
  { n: "04", title: "DEPTH OVER SCALE", body: "A hundred real ones beats a thousand strangers. We grow by chemistry, not by numbers." },
  { n: "05", title: "EXPERIENCE. CREATE. REPEAT.", body: "It's not a tagline. It's the loop. Live something, make something from it, and go again." },
];

export default function ManifestoPage() {
  return (
    <div className="min-h-screen bg-onyx text-cream">
      <Navbar />

      {/* Hero statement */}
      <section className="px-8 pt-24 pb-16 md:px-16">
        <div className="mx-auto max-w-5xl">
          <SectionTag>THE MANIFESTO · ISSUE 001</SectionTag>
          <blockquote className="mt-10 font-body text-4xl italic leading-tight text-cream md:text-7xl">
            “We don&apos;t escape life. We escape the{" "}
            <span className="text-amber not-italic">monotony</span> of it.”
          </blockquote>
          <p className="mt-10 max-w-2xl font-body text-lg leading-relaxed text-grey md:text-xl">
            VibezCartel is for the ones who refuse to be one-dimensional. The
            high-performers who still need the dancefloor. This is what we
            believe.
          </p>
        </div>
      </section>

      {/* The tenets — numbered belief statements */}
      <section className="px-8 pb-32 md:px-16">
        <div className="mx-auto max-w-5xl">
          {tenets.map((t) => (
            <div
              key={t.n}
              className="grid grid-cols-1 gap-4 border-t border-rule py-10 md:grid-cols-[80px_1fr]"
            >
              {/* The big amber number */}
              <span className="font-display text-4xl text-amber">{t.n}</span>
              {/* The tenet title + body */}
              <div>
                <h3 className="font-display text-3xl tracking-wide text-cream">{t.title}</h3>
                <p className="mt-3 max-w-2xl font-body text-lg leading-relaxed text-grey">{t.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}