// app/experiences/page.tsx — the full Experiences listing page (/experiences).
// Folder name "experiences" = the URL "/experiences". That's Next.js routing.

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionTag from "@/components/SectionTag";
import ExperienceCard from "@/components/ExperienceCard";

// The full list of experiences. Hardcoded now — from the database later.
// This is the SAME shape as the home-page preview, just the complete set.
const experiences = [
  { number: "001", title: "Olumo Rock", vibe: "ADVENTURE · DAY", slug: "olumo-rock", description: "A road trip to Abeokuta. Six of us, one rock, endless views." },
  { number: "002", title: "Amapiano District", vibe: "RAVE · NIGHT", slug: "amapiano-district", description: "Log drums until sunrise. The crew, deep in the frequency." },
  { number: "003", title: "Raveoween", vibe: "RAVE · NIGHT", slug: "raveoween", description: "Costumes, bass, and chaos. The night the cartel went feral." },
  { number: "004", title: "Group Therapy", vibe: "RAVE · NIGHT", slug: "group-therapy", description: "House music as medicine. A reset on the dancefloor." },
  { number: "005", title: "PM2AM", vibe: "RAVE · NIGHT", slug: "pm2am", description: "Afternoon to the dead of night. The marathon session." },
  { number: "006", title: "Blak Dave & Friends", vibe: "SESSION · NIGHT", slug: "blak-dave", description: "Intimate, curated, unforgettable. The sound up close." },
];

export default function ExperiencesPage() {
  return (
    <div className="min-h-screen bg-onyx text-cream">
      <Navbar />

      {/* Page header */}
      <section className="px-8 pt-24 pb-12 md:px-16">
        <div className="mx-auto max-w-6xl">
          <SectionTag>THE ARCHIVE OF EXPERIENCES</SectionTag>
          <h1 className="mt-6 font-display text-6xl tracking-wide text-cream md:text-8xl">
            WHAT WE&apos;VE LIVED
          </h1>
          <p className="mt-4 max-w-2xl font-body text-lg text-grey">
            Every road trip, every rave, every night worth remembering. The
            cartel doesn&apos;t just attend the experience — we live it, and we
            keep the record.
          </p>
        </div>
      </section>

      {/* The full grid of experience cards */}
      <section className="px-8 pb-32 md:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {experiences.map((exp) => (
              <ExperienceCard key={exp.slug} {...exp} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}