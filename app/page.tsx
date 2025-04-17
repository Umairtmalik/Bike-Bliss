import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeatureSection";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturesSection />
      <Testimonial />
      {/* Add more sections as needed */}
      {/* Other sections like Testimonials, FAQs, etc. can be added here */}
    </main>
  );
}
