// components/FeaturesSection.tsx
import FeatureCard from "./FeatureCard";

export default function FeaturesSection() {
  return (
    <section id="features" className="w-full py-24 px-6 bg-[#14121F] text-white">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-16">
        {/* Section Heading */}
        <div className="text-center space-y-4 max-w-2xl">
          <p className="text-sm uppercase text-purple-400 tracking-widest">Main Feature</p>
          <h2 className="text-4xl md:text-5xl font-bold">Discover The Perfect Ride</h2>
          <p className="text-gray-400 text-lg">
            Explore the key features that make our bikes stand out from the crowd.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="flex flex-col gap-20 w-full mt-4">
          <FeatureCard
            title="StreetRider"
            description="Embrace the perfect blend of style and performance. Conquer every journey with ease."
            imageSrc="/street-rider.svg"
            reversed={false}
          />
          <FeatureCard
            title="ThunderBolt"
            description="Unleash the power within. Dominate the streets with unmatched agility and design."
            imageSrc="/thunder-bolt.svg"
            reversed={true}
          />
          <FeatureCard
            title="TrailBlazer"
            description="Elevate your riding experience. Precision engineering meets unparalleled comfort and control."
            imageSrc="/trail-blazer.svg"
            reversed={false}
          />
        </div>
      </div>
    </section>
  );
}
