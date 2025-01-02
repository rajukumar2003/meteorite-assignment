'use client'

import { useState, useEffect } from "react";
import Link from "next/link";
import MobileNav from "@/app/components/layout/MobileNav";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 0);
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-30">
      <div
        className={`absolute inset-0 transition-opacity duration-300 ${
          isScrolled ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="absolute inset-0 bg-white/90 backdrop-blur-md shadow-md" />
      </div>

      {/* Content */}
      <nav className="container mx-auto px-4 py-4 relative">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className={`text-2xl font-bold transition-colors duration-300 ${
              isScrolled ? "text-gray-900" : "text-white"
            }`}
          >
            Iceland Travel
          </Link>

          <div className="hidden md:flex space-x-6">
            {["locations", "recommendations", "faq"].map((item) => (
              <Link
                key={item}
                href={`#${item}`}
                className={`capitalize transition-colors duration-300 ${
                  isScrolled
                    ? "text-gray-700 hover:text-gray-900"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {item}
              </Link>
            ))}
          </div>

          <MobileNav isScrolled={isScrolled} />
        </div>
      </nav>
    </header>
  );
};

export default Header;
