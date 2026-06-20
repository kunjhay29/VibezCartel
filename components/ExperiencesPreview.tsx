// ExperiencesPreview.tsx — a grid of experience cards for the home page.

import SectionTag from "./SectionTag";
import AmberButton from "./AmberButton";
import ExperienceCard from "./ExperienceCard";

// HARDCODED data for now — later this comes from your database.
// Notice: it's an array of objects, each matching ExperienceCardProps.
const experiences = [
  {
    number: "001",
    title: "Olumo Rock",
    vibe: "ADVENTURE · DAY",
    description: "A road trip to Abeokuta. Six of us, one rock, endless views.",
    slug: "olumo-rock",
  },
  {
    number: "002",
    title: "Amapiano District",
    vibe: "RAVE · NIGHT",
    description: "Log drums until sunrise. The crew, deep in the frequency.",
    slug: "amapiano-district",
  },
  {
    number: "003",
    title: "Raveoween",
    vibe: "RAVE · NIGHT",
    description: "Costumes, bass, and chaos. The night the cartel went feral.",
    slug: "raveoween",
  },
];

export default function ExperiencesPreview() {
  return (
    <section className="border-t border-rule px-8 py-32 md:px-16">
      <div className="mx-auto max-w-6xl">
        {/* Header row: tag + title on the left, button on the right */}
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <SectionTag>THE EXPERIENCES · SELECTED</SectionTag>
            <h2 className="mt-6 font-display text-5xl tracking-wide text-cream md:text-7xl">
              WHAT WE&apos;VE LIVED
            </h2>
          </div>
          <AmberButton label="SEE ALL" href="/experiences" variant="ghost" />
        </div>

        {/* The grid. 1 column on mobile, 3 columns on md+ screens. gap = spacing. */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Loop over the array, render an ExperienceCard for each.
              The {...exp} "spreads" all of an experience's fields as props. */}
          {experiences.map((exp) => (
            <ExperienceCard key={exp.slug} {...exp} />
          ))}
        </div>
      </div>
    </section>
  );
}