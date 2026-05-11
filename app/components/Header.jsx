"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/40 backdrop-blur-2xl text-white">

      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-10">

        {/* Logo */}
        <Link href="/">

          <h1 className="text-3xl font-black tracking-wide">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
              Suraj
            </span>{" "}

            <span className="text-white">
              Dev
            </span>
          </h1>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:block">

          <ul className="flex items-center gap-10 font-semibold">

            <li>
              <Link
                href="/"
                className="relative transition duration-300 hover:text-cyan-400"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                href="/About"
                className="relative transition duration-300 hover:text-purple-400"
              >
                About
              </Link>
            </li>

            <li>
              <Link
                href="/Projects"
                className="relative transition duration-300 hover:text-cyan-400"
              >
                Projects
              </Link>
            </li>

            <li>
              <Link
                href="/contact"
                className="relative transition duration-300 hover:text-purple-400"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Contact Button */}
        <div className="hidden md:block">

          <Link
            href="/contact"
            className="rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 px-6 py-3 font-bold shadow-2xl transition duration-500 hover:scale-105"
          >
            Hire Me 🚀
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-2xl backdrop-blur-xl transition duration-300 hover:bg-cyan-500 md:hidden"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden transition-all duration-500 md:hidden ${open ? "max-h-[500px]" : "max-h-0"
          }`}
      >

        <div className="border-t border-white/10 bg-black/90 px-6 py-8 backdrop-blur-2xl">

          <ul className="flex flex-col gap-6 text-lg font-semibold">

            <li>
              <Link
                href="/"
                onClick={() => setOpen(false)}
                className="block rounded-2xl border border-white/10 bg-white/5 px-5 py-4 transition duration-300 hover:border-cyan-500 hover:bg-cyan-500/10 hover:text-cyan-400"
              >
                🏠 Home
              </Link>
            </li>

            <li>
              <Link
                href="/About"
                onClick={() => setOpen(false)}
                className="block rounded-2xl border border-white/10 bg-white/5 px-5 py-4 transition duration-300 hover:border-purple-500 hover:bg-purple-500/10 hover:text-purple-400"
              >
                👨‍💻 About
              </Link>
            </li>

            <li>
              <Link
                href="/Projects"
                onClick={() => setOpen(false)}
                className="block rounded-2xl border border-white/10 bg-white/5 px-5 py-4 transition duration-300 hover:border-cyan-500 hover:bg-cyan-500/10 hover:text-cyan-400"
              >
                🚀 Projects
              </Link>
            </li>

            <li>
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="block rounded-2xl border border-white/10 bg-white/5 px-5 py-4 transition duration-300 hover:border-purple-500 hover:bg-purple-500/10 hover:text-purple-400"
              >
                📩 Contact
              </Link>
            </li>
          </ul>

          {/* Mobile Button */}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-8 block rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 py-4 text-center text-lg font-bold shadow-2xl transition duration-500 hover:scale-[1.02]"
          >
            Hire Me 🚀
          </Link>
        </div>
      </div>
    </header>
  );
}