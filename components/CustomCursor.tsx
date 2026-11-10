"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    if (!dot) return;

    function move(e: MouseEvent) {
      // position the dot at the cursor's coordinates
      dot!.style.left = `${e.clientX}px`;
      dot!.style.top = `${e.clientY}px`;
    }

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      ref={dotRef}
      aria-hidden="true"
      className="pointer-events-none fixed z-[9999] hidden md:block"
      style={{
        width: "10px",
        height: "10px",
        background: "#FFBF00",
        borderRadius: "50%",
        transform: "translate(-50%, -50%)",
        transition: "width .15s, height .15s",
      }}
    />
  );
}