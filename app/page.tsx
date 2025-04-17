import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeatureSection";
import Testimonial from "@/components/Testimonial";
import FAQ from "../components/FAQ";
import CollectionExploration from "../components/CollectionExploration";
import Footer from "../components/Footer";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function HomePage() {
  const session = await getServerSession(authOptions);

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