const stats = [
  { num: "5", label: "Experience Types" },
  { num: "234", label: "The Frequency" },
  { num: "10", label: "Culture Laws" },
  { num: "∞", label: "Lagos & Beyond" },
];

export default function StatsBar() {
  return (
    <section style={{ background: "#111111" }}>
      <div className="grid grid-cols-2 md:grid-cols-4" style={{ gap: "1px" }}>
        {stats.map((s) => (
          <div
            key={s.label}
            style={{ background: "#0D0D0D", padding: "40px 32px" }}
          >
            <div
              className="font-display text-amber"
              style={{ fontSize: "clamp(2.5rem,6vw,4.5rem)", lineHeight: "1", marginBottom: "6px" }}
            >
              {s.num}
            </div>
            <div className="font-mono text-[0.46rem] uppercase tracking-[0.2em] text-grey">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}