"use client";

import Link from "next/link";

export default function Contact() {
  const features = [
    {
      icon: "⚡",
      title: "Fast Response",
      desc: "Quick replies and smooth communication for every project.",
    },

    {
      icon: "🚀",
      title: "Modern Development",
      desc: "Premium websites with modern technologies and animations.",
    },

    {
      icon: "🤖",
      title: "AI Integration",
      desc: "Smart AI powered applications and automation systems.",
    },

    {
      icon: "🎨",
      title: "Luxury UI/UX",
      desc: "Clean futuristic designs with premium user experience.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-black py-24 text-white pt-40 pb-40">

      {/* Glow Effects */}
      <div className="absolute top-0 left-0 h-[350px] w-[350px] rounded-full bg-cyan-500/20 blur-[140px]" />

      <div className="absolute bottom-0 right-0 h-[350px] w-[350px] rounded-full bg-purple-500/20 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* Heading */}
        <div className="mb-20 text-center">

          <span className="inline-block rounded-full border border-cyan-500/20 bg-cyan-500/10 px-6 py-2 text-sm tracking-[0.2em] text-cyan-400 backdrop-blur-xl animate-pulse">
            ✨ CONTACT ME
          </span>

          <h2 className="mt-8 text-5xl font-black leading-tight sm:text-6xl md:text-7xl">
            Let's Build Something
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
              Amazing Together
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            Contact me for premium websites, AI applications,
            modern UI/UX projects and scalable digital products.
          </p>
        </div>

        {/* Features */}
        <div className="mb-20 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/5 p-7 text-center backdrop-blur-2xl transition duration-500 hover:-translate-y-4 hover:border-cyan-500/30"
            >

              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 opacity-0 blur-3xl transition duration-500 group-hover:opacity-100"></div>

              {/* Icon */}
              <div className="relative z-10 mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-r from-cyan-500 to-purple-600 text-4xl shadow-2xl transition duration-500 group-hover:rotate-6">
                {feature.icon}
              </div>

              <h3 className="relative z-10 mt-6 text-2xl font-black">
                {feature.title}
              </h3>

              <p className="relative z-10 mt-4 leading-7 text-gray-400">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Contact Grid */}
        <div className="grid items-center gap-12 lg:grid-cols-2">

          {/* Left Side */}
          <div>

            <span className="rounded-full border border-purple-500/20 bg-purple-500/10 px-5 py-2 text-sm text-purple-400">
              🚀 Available For Work
            </span>

            <h3 className="mt-8 text-4xl font-black leading-tight sm:text-5xl">
              Get In
              <span className="block bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Touch
              </span>
            </h3>

            <p className="mt-6 text-lg leading-8 text-gray-400">
              Feel free to contact me for web development,
              AI projects, freelance work, startup ideas
              or collaboration opportunities.
            </p>

            {/* Contact Info */}
            <div className="mt-10 space-y-5">

              <div className="flex items-center gap-5 rounded-2xl border border-white/10 bg-white/5 p-5 transition duration-500 hover:border-cyan-500/30">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10 text-2xl">
                  📞
                </div>

                <div>
                  <h4 className="font-bold text-lg">
                    Phone Number
                  </h4>

                  <p className="text-gray-400">
                    +91 9370944696
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-5 rounded-2xl border border-white/10 bg-white/5 p-5 transition duration-500 hover:border-purple-500/30">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-500/10 text-2xl">
                  📧
                </div>

                <div>
                  <h4 className="font-bold text-lg">
                    Email Address
                  </h4>

                  <p className="text-gray-400">
                    itxsurajofficial@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-5 rounded-2xl border border-white/10 bg-white/5 p-5 transition duration-500 hover:border-cyan-500/30">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10 text-2xl">
                  📍
                </div>

                <div>
                  <h4 className="font-bold text-lg">
                    Location
                  </h4>

                  <p className="text-gray-400">
                    Mumbai, India
                  </p>
                </div>
              </div>
            </div>

            {/* Social Buttons */}
            <div className="mt-10 flex flex-wrap gap-4">

              <Link
                href="#"
                className="rounded-2xl border border-white/10 bg-white/5 px-6 py-3 font-bold transition duration-500 hover:bg-cyan-500"
              >
                GitHub
              </Link>

              <Link
                href="#"
                className="rounded-2xl border border-white/10 bg-white/5 px-6 py-3 font-bold transition duration-500 hover:bg-purple-500"
              >
                LinkedIn
              </Link>

              <Link
                href="#"
                className="rounded-2xl border border-white/10 bg-white/5 px-6 py-3 font-bold transition duration-500 hover:bg-blue-500"
              >
                Instagram
              </Link>
            </div>
          </div>

          {/* Form */}
          <form className="relative overflow-hidden rounded-[35px] border border-white/10 bg-white/5 p-8 backdrop-blur-2xl">

            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10"></div>

            <div className="relative z-10">

              <h3 className="text-3xl font-black">
                Send Message 🚀
              </h3>

              <p className="mt-3 text-gray-400">
                Fill the form and let's create something amazing.
              </p>

              {/* Name */}
              <div className="mt-8">

                <label className="mb-3 block font-semibold">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full rounded-2xl border border-white/10 bg-black/40 p-4 text-white outline-none transition duration-300 focus:border-cyan-500"
                />
              </div>

              {/* Email */}
              <div className="mt-6">

                <label className="mb-3 block font-semibold">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-2xl border border-white/10 bg-black/40 p-4 text-white outline-none transition duration-300 focus:border-purple-500"
                />
              </div>

              {/* Message */}
              <div className="mt-6">

                <label className="mb-3 block font-semibold">
                  Message
                </label>

                <textarea
                  rows="6"
                  placeholder="Write your message..."
                  className="w-full rounded-2xl border border-white/10 bg-black/40 p-4 text-white outline-none transition duration-300 focus:border-cyan-500"
                ></textarea>
              </div>

              {/* Button */}
              <button
                type="submit"
                className="mt-8 w-full rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 py-4 text-lg font-bold shadow-2xl transition duration-500 hover:scale-[1.02]"
              >
                Send Message ✨
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}