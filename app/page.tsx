import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ManifestoTeaser from "@/components/ManifestoTeaser";
import ExperiencesPreview from "@/components/ExperiencesPreview";
import CommunityTeaser from "@/components/CommunityTeaser";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-onyx text-cream">
      <Navbar />
      <Hero />
      <ManifestoTeaser />
      <ExperiencesPreview />
      <CommunityTeaser />
      <Footer />
    </div>
  );
}