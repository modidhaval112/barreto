"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/solutions", label: "Solutions" },
    { href: "/about", label: "About" },
    { href: "/technology", label: "Technology" },
    { href: "/contact", label: "Contact" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo/logo.svg"
            alt="Barreto Logo"
            width={120}
            height={40}
            className="h-10 w-auto"
          />
        </Link>

        {/* Navigation Links - Desktop */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-black hover:text-gray-600 transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA and Mobile Menu Toggle */}
        <div className="flex items-center space-x-4">
          {/* Desktop CTA */}
          <Link
            href="/get-started"
            className="hidden md:block bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition-colors duration-300"
          >
            Get Started
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-black focus:outline-none"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-40 md:hidden">
          <div className="flex flex-col items-center justify-center h-full space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={toggleMenu}
                className="text-2xl text-black hover:text-gray-600 transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/get-started"
              onClick={toggleMenu}
              className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors duration-300"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
