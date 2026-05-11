"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-black text-white">

      {/* Glow Effects */}
      <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-purple-500/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">

        {/* Top */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>

            <h2 className="text-4xl font-black">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                Suraj
              </span>{" "}

              Dev
            </h2>

            <p className="mt-6 leading-8 text-gray-400">
              Premium Full Stack Developer creating modern websites,
              AI powered applications and futuristic digital experiences.
            </p>

            {/* Contact */}
            <div className="mt-6 space-y-3 text-gray-300">

              <p className="flex items-center gap-3">
                📞 +91 9370944696
              </p>

              <p className="flex items-center gap-3">
                📧 itxsurajofficial@gmail.com
              </p>

              <p className="flex items-center gap-3">
                📍 Mumbai, India
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>

            <h3 className="text-2xl font-bold text-cyan-400">
              Quick Links
            </h3>

            <ul className="mt-6 space-y-4">

              <li>
                <Link
                  href="/"
                  className="text-gray-400 transition duration-300 hover:text-cyan-400"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  className="text-gray-400 transition duration-300 hover:text-cyan-400"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  href="/projects"
                  className="text-gray-400 transition duration-300 hover:text-cyan-400"
                >
                  Projects
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 transition duration-300 hover:text-cyan-400"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>

            <h3 className="text-2xl font-bold text-purple-400">
              Services
            </h3>

            <ul className="mt-6 space-y-4 text-gray-400">

              <li className="transition duration-300 hover:text-purple-400">
                🚀 Full Stack Development
              </li>

              <li className="transition duration-300 hover:text-purple-400">
                🤖 AI Integration
              </li>

              <li className="transition duration-300 hover:text-purple-400">
                🎨 UI/UX Design
              </li>

              <li className="transition duration-300 hover:text-purple-400">
                ⚡ Performance Optimization
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>

            <h3 className="text-2xl font-bold text-cyan-400">
              Stay Connected
            </h3>

            <p className="mt-6 leading-7 text-gray-400">
              Subscribe for latest updates, modern projects and
              premium web development content.
            </p>

            {/* Input */}
            <div className="mt-6">

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none backdrop-blur-xl transition duration-300 focus:border-cyan-500"
              />

              <button className="mt-4 w-full rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 py-4 font-bold shadow-2xl transition duration-500 hover:scale-[1.02]">
                Subscribe ✨
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-[1px] w-full bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-5 md:flex-row">

          <p className="text-center text-gray-400">
            © 2026 Suraj Dev. All Rights Reserved.
          </p>

          {/* Social */}
          <div className="flex items-center gap-4">

            <Link
              href="#"
              className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-xl transition duration-300 hover:bg-cyan-500"
            >
              🌐
            </Link>

            <Link
              href="#"
              className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-xl transition duration-300 hover:bg-purple-500"
            >
              💼
            </Link>

            <Link
              href="#"
              className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-xl transition duration-300 hover:bg-blue-500"
            >
              📸
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}