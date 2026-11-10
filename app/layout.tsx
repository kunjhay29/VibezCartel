import type { Metadata } from "next";
import { Bebas_Neue, Cormorant_Garamond, Space_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";

const bebas = Bebas_Neue({ weight: "400", subsets: ["latin"], variable: "--font-display" });
const cormorant = Cormorant_Garamond({
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-body",
});
const spaceMono = Space_Mono({ weight: ["400", "700"], subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "VibezCartel — Experience. Create. Repeat.",
  description: "An emerging Lagos creative community. Music, raves, road trips, and shared experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${bebas.variable} ${cormorant.variable} ${spaceMono.variable}`}>
        <CustomCursor />
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}