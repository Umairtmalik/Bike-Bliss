import { Button } from "@/components/ui/button";
import Image from "next/image";

const CollectionExploration = () => {
    return (
        <section className="py-16 text-white text-center relative height-full" id="explore">
          {/* Background SVG */}
          <div className="absolute inset-0">
            <Image
              src="/CollectionExplorationBackground.png" // Replace with your SVG path
              alt="Background"
              layout="fill"
              objectFit="cover"
              className="object-cover"
            />
          </div>
    
          {/* Content Overlay */}
          <div className="max-w-screen-xl mx-auto px-4 z-10 relative">
            {/* Title */}
            <h2 className="text-3xl font-bold mb-8">Explore our collection and find the perfect bike for you.</h2>
    
            {/* Button */}
            <Button className="bg-[#56468B] border border-[#56468B] hover:bg-[#2d2646] text-white" size="lg">
              Get Started
            </Button>
          </div>
        </section>
      );
    };
    
export default CollectionExploration;