// components/Navbar.tsx
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useSession, signIn, signOut } from "next-auth/react";

const Navbar = () => {
  // Access the session using useSession
  const { data: session } = useSession();

  return (
    <header className="w-full bg-[#14121F] text-white shadow-md">
      <nav className="max-w-7xl mx-auto py-4 flex items-center justify-between">
        {/* Left Section: Logo */}
        <div className="flex items-center">
          <Link href="/" className="text-xl font-bold text-gray-300">
            Bike Bliss
          </Link>
        </div>

        {/* Middle Section: Navigation Links */}
        <ul className="hidden md:flex gap-8 text-lg font-medium text-gray-300 ml-10 justify-center flex-grow">
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

        {/* Right Section: Buttons */}
        <div className="hidden md:flex items-center gap-4">
          {!session && (
            // If the user is not logged in, show a login prompt
            <p className="text-red-500 text-sm">Login to access features</p>
          )}

          {session ? (
            // If the user is logged in, show Logout and Contact buttons
            <>
              <Button
                onClick={() => signOut()}
                className="bg-red-600 border border-red-600 hover:bg-red-700 text-white"
              >
                Logout
              </Button>
              <Button
                className="bg-[#56468B] border border-[#56468B] hover:bg-[#2d2646] text-white"
              >
                Contact
              </Button>
            </>
          ) : (
            // If the user is not logged in, show the Login button
            <Button
              onClick={() => signIn()}
              className="bg-[#56468B] border border-[#56468B] hover:bg-[#2d2646] text-white"
            >
              Login
            </Button>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;