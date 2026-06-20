// layout.tsx is the ROOT wrapper around every page on your site.
// Whatever you put here (fonts, <html>, <body>) applies everywhere.

import type { Metadata } from "next";

// Import your three brand fonts from Next.js's built-in Google Fonts loader.
// Next downloads + self-hosts them automatically (faster than a <link> tag).
import { Bebas_Neue, Cormorant_Garamond, Space_Mono } from "next/font/google";

// Import the global stylesheet (where your brand colours will live).
import "./globals.css";

// ── FONT 1: Bebas Neue — your big DISPLAY font (headlines like "VIBEZ CARTEL")
const bebas = Bebas_Neue({
  weight: "400",              // Bebas only comes in one weight
  subsets: ["latin"],         // which character set to load (latin = standard)
  variable: "--font-display", // expose it as a CSS variable we can reuse anywhere
});

// ── FONT 2: Cormorant Garamond — your elegant BODY/serif font
const cormorant = Cormorant_Garamond({
  weight: ["300", "400", "600"],   // load light, regular, and semibold
  style: ["normal", "italic"],     // load both upright and italic versions
  subsets: ["latin"],
  variable: "--font-body",
});

// ── FONT 3: Space Mono — your MONO font (small labels, tags, technical text)
const spaceMono = Space_Mono({
  weight: ["400", "700"],     // regular + bold
  subsets: ["latin"],
  variable: "--font-mono",
});

// This sets the browser-tab title and the description search engines read.
export const metadata: Metadata = {
  title: "VibezCartel — Experience. Create. Repeat.",
  description:
    "An emerging Lagos creative community. Music, raves, road trips, and shared experiences.",
};

// This is the actual layout component. `children` = whatever page is showing.
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      {/* 
        We attach all three font CSS-variables to the <body>.
        `.variable` outputs the CSS variable name, so now
        --font-display, --font-body, and --font-mono are available
        to every element on the page. 
      */}
      <body
        className={`${bebas.variable} ${cormorant.variable} ${spaceMono.variable}`}
      >
        {children}
      </body>
    </html>
  );
}