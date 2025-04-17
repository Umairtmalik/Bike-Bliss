// components/HeroSection.tsx
import Image from "next/image";
import { Button } from "../components/ui/button";

export default function HeroSection() {
  return (
    <section className="w-full bg-[#14121F] text-white py-20">
      <div className="max-w-4xl mx-auto px-6 flex flex-col items-center text-center gap-6">
        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Ride with passion<br />
          <span className="text-white-500">Ride with us</span>
        </h1>

        {/* Subtext */}
        <p className="text-lg text-gray-300 max-w-2xl">
          Experience the thrill of the city like never before with cutting-edge designs built for the urban explorer.
        </p>

        {/* CTA Button */}

        <Button className="bg-[#56468B] hover:bg-purple-700 text-white px-6 py-3 text-lg rounded-full">
          Buy Now
        </Button>
        {/* Bike Container with glowing background */}
        <div className="relative w-full max-w-2xl mt-1 rounded-[70px]  p-3 bg-white/50 backdrop-blur-2xl shadow-[0_0px_0px_rgba(0,0,0,0.1)]">
  {/* Vignette-style background image with inset shadow */}
  <div
    className="absolute inset-0 z-0 bg-center bg-cover"
    style={{

      boxShadow: "inset 0px 0px 65px 70px #14121F",
      
    }}
  />

  {/* Bike Image */}
  <Image
    src="/red-bike.svg"
    alt="Red sport bike"
    width={800}
    height={500}
    className="relative z-10 w-full h-auto object-contain"
    priority
  />
</div>


      </div>
    </section>
  );
}
