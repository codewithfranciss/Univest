"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Import icons

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-emerald-500/20 bg-black/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        
        {/* Logo */}
        <div className="flex items-center justify-center gap-3">
          <div className="flex size-9 items-center justify-center rounded-xl">
            <img src="/univest-logo.png" alt="Logo" className="h-full w-full object-contain" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white">UnivestAI</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {["Features", "AI Solutions", "Portfolio", "Resources"].map((item) => (
            <Link 
              key={item} 
              href="#" 
              className="text-sm font-medium text-gray-400 transition hover:text-emerald-400"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4 sm:gap-6">
          <Link 
            href="/waitlist" 
            className="hidden sm:flex h-10 items-center justify-center rounded-lg bg-white px-6 text-sm font-bold text-black transition-all hover:brightness-110 active:scale-95"
          >
            Join the Waitlist
          </Link>

          {/* Mobile Menu Button with Lucide Icons */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="group flex size-10 items-center justify-center rounded-lg bg-black text-white transition hover:bg-emerald-500/10 md:hidden"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-emerald-400 transition-transform duration-200" />
            ) : (
              <Menu className="h-6 w-6 transition-transform duration-200 group-hover:scale-110" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="border-t border-emerald-500/20 bg-black md:hidden animate-in slide-in-from-top-2 fade-in duration-200">
          <div className="flex flex-col space-y-1 p-4">
            {["Features", "AI Solutions", "Portfolio", "Resources"].map((item) => (
              <Link 
                key={item} 
                href="#" 
                className="rounded-lg px-3 py-2 text-base font-medium text-gray-400 hover:bg-emerald-500/10 hover:text-emerald-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
            <div className="mt-4 border-t border-emerald-500/20 pt-4">
              <Link 
                href="/waitlist" 
                className="flex h-10 items-center justify-center rounded-lg bg-white px-6 text-sm font-bold text-black hover:bg-gray-200 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Join the Waitlist
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}