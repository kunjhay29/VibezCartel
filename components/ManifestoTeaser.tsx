// ManifestoTeaser.tsx — the section below the hero that previews the manifesto.
// Features a large pull-quote, a signature piece of the VibezCartel design.

import SectionTag from "./SectionTag";
import AmberButton from "./AmberButton";

export default function ManifestoTeaser() {
  return (
    // py-32 = generous vertical breathing room. border-t = hairline divider on top.
    <section className="border-t border-rule px-8 py-32 md:px-16">
      <div className="mx-auto max-w-5xl">
        {/* The little amber label */}
        <SectionTag>THE MANIFESTO · ISSUE 001</SectionTag>

        {/* The big pull-quote. Cormorant (font-body) italic at large size reads
            like an editorial statement. leading-tight keeps the lines close. */}
        <blockquote className="mt-10 font-body text-4xl italic leading-tight text-cream md:text-6xl">
          “We don’t escape life.
          <br />
          We escape the{" "}
          <span className="text-amber not-italic">monotony</span> of it.”
        </blockquote>

        {/* A supporting paragraph in muted grey */}
        <p className="mt-10 max-w-2xl font-body text-lg leading-relaxed text-grey md:text-xl">
          VibezCartel is a movement for the ones who refuse to be
          one-dimensional. The high-performers who still need the dancefloor.
          The professionals who live for the function. We build experiences
          worth remembering — and document the culture as we go.
        </p>

        {/* CTA to read the full manifesto */}
        <div className="mt-10">
          <AmberButton label="READ THE FULL MANIFESTO" href="/manifesto" variant="ghost" />
        </div>
      </div>
    </section>
  );
}