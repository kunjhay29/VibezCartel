import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Statement from "@/components/Statement";
import ManifestoTeaser from "@/components/ManifestoTeaser";
import ExperiencesPreview from "@/components/ExperiencesPreview";
import StatsBar from "@/components/StatsBar";
import ArchivePreview from "@/components/ArchivePreview";
import CommunityTeaser from "@/components/CommunityTeaser";
import JoinBar from "@/components/JoinBar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-onyx text-cream" style={{ paddingTop: "52px" }}>
      <Navbar />
      <Hero />
      <Statement />
      <ManifestoTeaser />
      <ExperiencesPreview />
      <StatsBar />
      <ArchivePreview />
      <CommunityTeaser />
      <JoinBar />
      <Footer />
    </div>
  );
}