import Link from "next/link";

export default function JoinBar() {
  return (
    <Link
      href="/join"
      className="block bg-amber transition-colors hover:bg-amber-dim"
      style={{ padding: "18px 40px" }}
    >
      <span
        className="flex items-center justify-center gap-3 font-display uppercase text-onyx"
        style={{ fontSize: "clamp(.85rem,1.8vw,1.2rem)", letterSpacing: "0.05em" }}
      >
        The Syndicate is moving. The Reset is here. Join VibezCartel.
        <span>→</span>
      </span>
    </Link>
  );
}