// SectionTag.tsx — the small amber label that sits above section headings.

type SectionTagProps = {
  children: React.ReactNode; // "children" = whatever text you put between the tags
};

export default function SectionTag({ children }: SectionTagProps) {
  return (
    <div className="flex items-center gap-3">
      {/* a short amber line before the text */}
      <span className="h-px w-8 bg-amber" />
      <span className="font-mono text-xs tracking-[0.2em] text-amber">
        {children}
      </span>
    </div>
  );
}