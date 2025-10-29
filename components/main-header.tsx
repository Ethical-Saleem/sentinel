"use client";

import { useSidebar } from "../contexts/sidebar-context";
import { Globe, X, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const MainHeader = () => {
  const { mobileMenuOpen, toggleMobileMenu } = useSidebar();

  return (
    <header className="fixed top-0 left-0 right-0 bg-[#0f1a21] shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16">
          <div className="flex items-center">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/">
                <Image
                  src="/images/logo.jpeg"
                  alt="Sentinel Logo"
                  width={50}
                  height={50}
                  className="rounded-lg"
                />
              </Link>
            </div>

            {/* Desktop Navigation - Centered */}
            <div className="hidden min-[1170px]:flex ml-8">
              <ul className="flex items-center space-x-8">
                <li>
                  <a
                    href="#"
                    className="text-[#e5e7eb] hover:text-white transition-colors font-medium"
                  >
                    Invest
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#e5e7eb] hover:text-white transition-colors font-medium"
                  >
                    Trade
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#e5e7eb] hover:text-white transition-colors font-medium"
                  >
                    Earn
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#e5e7eb] hover:text-white transition-colors font-medium"
                  >
                    Institutions
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#e5e7eb] hover:text-white transition-colors font-medium"
                  >
                    Explore Markets
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#e5e7eb] hover:text-white transition-colors font-medium"
                  >
                    Learn
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#e5e7eb] hover:text-white transition-colors font-medium"
                  >
                    Why Sentinel?
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Globe Icon */}
          <div className="hidden lg:flex items-center">
            <button className="p-2 rounded-full hover:bg-[#1a2730] transition-colors">
              <Globe className="w-5 h-5 text-[#e5e7eb]" />
            </button>
          </div>

          <div className="flex min-[1170px]:hidden items-center">
            <div className="flex items-center gap-2 mr-6">
              <button className="bg-[#17232d] text-[#b6c2cc] px-4 py-3 rounded-lg font-semibold
               hover:bg-[#1e303e] hover:text-[#e2eaf0] transition-colors duration-200">Log in</button>
              <button className="bg-[#2D9CFF] text-[#0a1419] px-4 py-3 rounded-lg font-semibold
               hover:bg-[#3db2ff] transition-colors duration-200">Sign up</button>
            </div>
            {/* Mobile menu button */}
            <div className="min-[1170px]:hidden">
              <button
                onClick={toggleMobileMenu}
                className="p-2 rounded-md text-[#e5e7eb] hover:bg-[#1a2730]"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="min-[1170px]:hidden py-4 border-t border-[#2d3b47]">
            <div className="flex flex-col space-y-3">
              <a
                href="#"
                className="text-[#e5e7eb] hover:text-white px-3 py-2 transition-colors"
              >
                Invest
              </a>
              <a
                href="#"
                className="text-[#e5e7eb] hover:text-white px-3 py-2 transition-colors"
              >
                Trade
              </a>
              <a
                href="#"
                className="text-[#e5e7eb] hover:text-white px-3 py-2 transition-colors"
              >
                Earn
              </a>
              <a
                href="#"
                className="text-[#e5e7eb] hover:text-white px-3 py-2 transition-colors"
              >
                Institutions
              </a>
              <a
                href="#"
                className="text-[#e5e7eb] hover:text-white px-3 py-2 transition-colors"
              >
                Explore Markets
              </a>
              <a
                href="#"
                className="text-[#e5e7eb] hover:text-white px-3 py-2 transition-colors"
              >
                Learn
              </a>
              <a
                href="#"
                className="text-[#e5e7eb] hover:text-white px-3 py-2 transition-colors"
              >
                Why Darkwolf?
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
