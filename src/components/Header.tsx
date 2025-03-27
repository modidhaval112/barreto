"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

interface NavItemProps {
  href: string;
  text: string;
  target?: string;
}

export default function Header() {
  const [isBusinessSolutionsOpen, setIsBusinessSolutionsOpen] = useState(false);

  return (
    <header className="bg-white h-[88px] flex items-center justify-between px-[20px] lg:px-[68px]">
      <Link href="/">
        <Image
          alt="Company Logo"
          width={164}
          height={47}
          src="/logo/battero.svg"
          className="text-transparent"
          priority
        />
      </Link>

      {/* Mobile menu button */}
      <div className="lg:hidden">
        <button aria-label="Toggle menu">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 448 512"
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path>
          </svg>
        </button>
      </div>

      {/* Navigation - Desktop */}
      <nav className="z-10 hidden absolute top-[88px] left-0 w-full bg-white lg:static lg:block lg:w-auto">
        <ul className="flex flex-col lg:flex-row items-center lg:gap-6">
          {/* Business Solutions Dropdown */}
          <li className="relative font-medium text-xl leading-[27px] text-black py-4 lg:py-0">
            <button
              className="flex items-center justify-center gap-2 m-auto"
              onClick={() =>
                setIsBusinessSolutionsOpen(!isBusinessSolutionsOpen)
              }
              aria-expanded={isBusinessSolutionsOpen}
              aria-haspopup="true"
            >
              Business Solutions
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 448 512"
                className={`h-4 w-4 transition-transform ${
                  isBusinessSolutionsOpen ? "rotate-180" : ""
                }`}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
              </svg>
            </button>

            {/* Dropdown Menu */}
            {isBusinessSolutionsOpen && (
              <ul className="lg:absolute -left-6 top-10 mt-2 bg-gray-200 shadow-2xl rounded-lg lg:w-60 w-full py-4 px-6 border">
                <DropdownItem href="/e-waste" text="E-waste Management" />
                <DropdownItem
                  href="/lithium-ion-battery-management"
                  text="Lithium-ion Battery Management"
                />
                <DropdownItem href="/upcycling" text="Upcycling" />
                <DropdownItem href="/selsmart" text="Selsmart" />
                <DropdownItem href="/metalmandi" text="MetalMandi" />
                <DropdownItem href="/green-metals" text="Green Metals" />
                <DropdownItem
                  href="/software-technology"
                  text="Software Technology"
                />
              </ul>
            )}
          </li>

          <NavItem href="/sustainability" text="Sustainability" />
          <NavItem href="/about" text="About Us" />
          <NavItem href="/people-and-culture" text="People & Culture" />
          <NavItem href="/blog" text="Blogs" />
          <NavItem href="/media" text="Media" />

          <li className="py-4 lg:py-0">
            <Link href="/contact">
              <button className="w-50 h-14 rounded-lg bg-black text-white text-xl leading-[27px] hover:bg-gray-800 transition-colors">
                <span className="flex items-center justify-center gap-2">
                  Get in touch
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    className="text-white h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"></path>
                  </svg>
                </span>
              </button>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

// Reusable navigation item component
function NavItem({ href, text }: NavItemProps) {
  return (
    <li className="font-medium text-xl leading-[27px] text-center text-black py-4 lg:py-0 hover:text-gray-600 transition-colors">
      <Link href={href}>{text}</Link>
    </li>
  );
}

// Reusable dropdown item component
function DropdownItem({ href, text, target }: NavItemProps) {
  return (
    <li className="py-2 px-4 mb-2 text-md hover:bg-white underline-offset-4 hover:text-gray-500 rounded-md">
      <Link href={href} target={target}>
        {text}
      </Link>
    </li>
  );
}
