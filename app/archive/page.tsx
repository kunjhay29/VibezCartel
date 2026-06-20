// app/archive/page.tsx — the content/media archive (/archive).
// This is where recap videos, photo sets, and recaps from experiences live.

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionTag from "@/components/SectionTag";

// The archive items — hardcoded now, from the database later.
// "type" tells us if it's a film, photo set, etc. "experience" links it to an event.
const archiveItems = [
  { id: "1", type: "AFTERMOVIE", title: "Olumo Rock — The Film", experience: "Olumo Rock", meta: "3:42 · FILM" },
  { id: "2", type: "PHOTO SET", title: "Faces of Raveoween", experience: "Raveoween", meta: "24 PHOTOS" },
  { id: "3", type: "RECAP", title: "Amapiano District, In Words", experience: "Amapiano District", meta: "READ · 4 MIN" },
  { id: "4", type: "AFTERMOVIE", title: "Group Therapy — Session 01", experience: "Group Therapy", meta: "2:18 · FILM" },
  { id: "5", type: "PHOTO SET", title: "PM2AM — Golden Hour", experience: "PM2AM", meta: "31 PHOTOS" },
  { id: "6", type: "RECAP", title: "Why We Started", experience: "The Movement", meta: "READ · 6 MIN" },
];

export default function ArchivePage() {
  return (
    <div className="min-h-screen bg-onyx text-cream">
      <Navbar />

      <section className="px-8 pt-24 pb-12 md:px-16">
        <div className="mx-auto max-w-6xl">
          <SectionTag>THE ARCHIVE · CONTENT</SectionTag>
          <h1 className="mt-6 font-display text-6xl tracking-wide text-cream md:text-8xl">
            THE RECORD
          </h1>
          <p className="mt-4 max-w-2xl font-body text-lg text-grey">
            Every experience leaves a trace. Films, photos, and stories from the
            nights and trips that built the cartel. The story is half the
            experience.
          </p>
        </div>
      </section>

      <section className="px-8 pb-32 md:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {archiveItems.map((item) => (
              <div
                key={item.id}
                className="group flex aspect-[4/5] flex-col justify-between border border-rule p-6 transition-colors hover:border-amber"
              >
                {/* top: the type tag */}
                <span className="font-mono text-[10px] tracking-[0.2em] text-amber">
                  {item.type}
                </span>

                {/* bottom: title + meta */}
                <div>
                  <h3 className="font-display text-2xl leading-tight tracking-wide text-cream">
                    {item.title}
                  </h3>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="font-mono text-[10px] tracking-[0.15em] text-grey">
                      {item.experience}
                    </span>
                    <span className="font-mono text-[10px] tracking-[0.15em] text-grey">
                      {item.meta}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}