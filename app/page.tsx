import Navbar from "@/components/Navbar"; // import the component we built

export default function Home() {
  return (
    <div className="min-h-screen bg-onyx text-cream">
      {/* Drop the Navbar in. This one line renders the whole bar. */}
      <Navbar />

      {/* Temporary placeholder body, just so the page isn't empty */}
      <main className="flex flex-col items-center justify-center gap-6 py-32">
        <h1 className="font-display text-8xl tracking-wide">
          VIBEZ<span className="text-amber">CARTEL</span>
        </h1>
        <p className="font-mono text-sm tracking-[0.3em] text-grey">
          EXPERIENCE. CREATE. REPEAT.
        </p>
      </main>
    </div>
  );
}