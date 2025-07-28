"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { FaHome, FaInfoCircle, FaUser, FaSignInAlt, FaUserPlus } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  // Replace this with your real authentication logic
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home", icon: <FaHome /> },
    { href: "/about", label: "About", icon: <FaInfoCircle /> },
    { href: "/edit-profile", label: "Profile", icon: <FaUser /> },
    { href: "/login", label: "Login", icon: <FaSignInAlt /> },
  ];

  // Helper to get classes for each link
  const getLinkClasses = (href) => {
    const base =
      "flex items-center gap-1 px-4 py-2 transition-colors font-medium";
    if (href === pathname) {
      return (
        base +
        " bg-[#ecfdf5] text-[#166534] rounded-xl shadow-sm"
      );
    }
    return (
      base +
      " text-[#166534] hover:bg-[#d1fae5] rounded-xl"
    );
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        <Link href="/" className="text-2xl font-bold text-black">Rentistaan</Link>
        <div className="hidden md:flex space-x-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={getLinkClasses(link.href)}
            >
              {link.icon}
              {link.label}
            </Link>
          ))}
          {!isLoggedIn && (
            <Link
              href="//register"
              className={getLinkClasses("//register")}
            >
              <FaUserPlus />
              Register
            </Link>
          )}
        </div>
        {/* Hamburger Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-[#166534] focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white px-4 pb-4 shadow space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={getLinkClasses(link.href) + " w-full"}
              onClick={() => setMenuOpen(false)}
            >
              {link.icon}
              {link.label}
            </Link>
          ))}
          {!isLoggedIn && (
            <Link
              href="/register"
              className={getLinkClasses("/register") + " w-full"}
              onClick={() => setMenuOpen(false)}
            >
              <FaUserPlus />
              Register
            </Link>
          )}
        </div>
      )}
    </nav>
  );
}