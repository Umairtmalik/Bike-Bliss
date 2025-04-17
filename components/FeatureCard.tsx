// components/FeatureCard.tsx
import Image from "next/image";
import { Button } from "../components/ui/button";

interface FeatureCardProps {
  title: string;
  description: string;
  imageSrc: string;
  reversed?: boolean;
}

export default function FeatureCard({ title, description, imageSrc, reversed = false }: FeatureCardProps) {
  return (
    <div
      className={`flex flex-col md:flex-row ${
        reversed ? "md:flex-row-reverse" : ""
      } items-center gap-10`}
    >
      {/* Image */}
      <div className="w-full md:w-1/2">
  <Image
    src={imageSrc}
    alt={`${title} bike`}
    width={800}
    height={600}
    className="w-full h-auto object-contain scale-110 md:scale-125"
  />
</div>


      {/* Content */}
      <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
        <h3 className="text-3xl md:text-4xl font-bold text-white">{title}</h3>
        <p className="text-gray-400 text-lg">{description}</p>
        <Button className="bg-[#56468B] hover:bg-purple-700 text-white px-6 py-3 text-base rounded-full">
          Buy Now
        </Button>
      </div>
    </div>
  );
}
