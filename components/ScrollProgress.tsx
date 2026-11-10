"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    function onScroll() {
      // how far down the page we've scrolled, as a percentage
      const scrolled = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const pct = total > 0 ? (scrolled / total) * 100 : 0;
      setWidth(pct);
    }

    window.addEventListener("scroll", onScroll);
    onScroll(); // run once on mount
    return () => window.removeEventListener("scroll", onScroll); // cleanup
  }, []);

  return (
    <div
      className="fixed left-0 right-0 z-[989]"
      style={{ top: "52px", height: "2px", background: "#1A1A1A" }}
    >
      <div
        style={{
          height: "100%",
          width: `${width}%`,
          background: "#FFBF00",
          transition: "width .1s linear",
        }}
      />
    </div>
  );
}