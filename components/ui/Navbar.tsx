// components/Navbar.tsx
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
const Navbar = () => {
  return (
<header className="w-full bg-[#14121F] text-white shadow-md">
  <nav className="max-w-7xl mx-auto py-4 flex items-center justify-between">
    <Link href="/" className="text-1xl font-bold text-gray-300  ">
      Bike Bliss
    </Link>

    <ul className="hidden md:flex gap-8 text-lg font-medium text-gray-300">
      <li>
        <Link href="#features" className="hover:text-purple-400 transition">
          Features
        </Link>
      </li>
      <li>
        <Link href="#testimonials" className="hover:text-purple-400 transition">
          Testimonials
        </Link>
      </li>
      <li>
        <Link href="#faqs" className="hover:text-purple-400 transition">
          FAQs
        </Link>
      </li>
    </ul>

    <div className="hidden md:block">
      <Button className="bg-[#56468B] border border-[#56468B] hover:bg-[#2d2646] text-white">
        Contact
      </Button>
    </div>
  </nav>
</header>

  );
};

export default Navbar;
