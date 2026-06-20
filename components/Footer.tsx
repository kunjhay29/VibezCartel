// Footer.tsx — the site footer.

import AmberButton from "./AmberButton"; // reuse the button we just built!

export default function Footer() {
  return (
    <footer className="border-t border-rule px-8 py-16">
      <div className="flex flex-col items-center gap-6 text-center">
        <span className="font-display text-4xl tracking-wide text-cream">
          VIBEZ<span className="text-amber">CARTEL</span>
        </span>
        <p className="font-mono text-xs tracking-[0.2em] text-grey">
          EXPERIENCE. CREATE. REPEAT.
        </p>
        <AmberButton label="JOIN THE CARTEL" href="/join" />
        <p className="font-mono text-[10px] tracking-[0.15em] text-grey/50">
          LAGOS → THE WORLD · EST. 2025
        </p>
      </div>
    </footer>
  );
}