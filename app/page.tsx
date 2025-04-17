import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeatureSection";
import Testimonial from "@/components/Testimonial";
import FAQ from "../components/FAQ";
import CollectionExploration from "../components/CollectionExploration";
import Footer from "../components/Footer";
export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturesSection />
      <Testimonial />
      <FAQ />
      <CollectionExploration />
      <Footer />
    </main>
  );
}
