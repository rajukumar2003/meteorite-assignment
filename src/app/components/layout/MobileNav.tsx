// components/layout/MobileNav.tsx
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

interface NavItem {
  href: string;
  label: string;
}

const navItems: NavItem[] = [
  { href: "#locations", label: "Locations" },
  { href: "#recommendations", label: "Recommendations" },
  { href: "#faq", label: "FAQ" },
];

const MobileNav = ({ isScrolled }: { isScrolled: boolean }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        className={`p-2 transition-colors duration-300 ${
          isScrolled ? "text-gray-900" : "text-white"
        }`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <Menu size={24} />
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed inset-y-0 right-0 w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-5">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 p-2 text-gray-600 hover:text-gray-900"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>

          <nav className="mt-12">
            <ul className="space-y-4">
              {navItems.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="block py-2 text-lg font-medium text-gray-800 hover:text-gray-900 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
