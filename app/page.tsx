"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const images = [
    "https://i.pinimg.com/736x/24/68/a1/2468a19e048308eabf19eabc4a2ce7a7.jpg",

    "https://img.magnific.com/premium-photo/software-developer-programming-code-abstract-computer-script-code-selective-focus_372999-1130.jpg?w=1480",

    "https://i.pinimg.com/1200x/a7/58/49/a758499316370666df04791f12cb4f3f.jpg",
  ];

  const texts = [
    "Full Stack Developer",
    "Modern UI/UX Designer",
    "AI Powered Web Creator",
    "Premium Digital Experience",
  ];

  const skills = [
    {
      title: "Frontend",
      icon: "⚡",
      desc: "Modern websites using React & Next.js",
      color: "from-cyan-500 to-blue-600",
    },

    {
      title: "Backend",
      icon: "🚀",
      desc: "Secure scalable backend systems",
      color: "from-purple-500 to-pink-600",
    },

    {
      title: "AI Apps",
      icon: "🤖",
      desc: "AI powered modern applications",
      color: "from-orange-500 to-red-600",
    },

    {
      title: "UI/UX",
      icon: "🎨",
      desc: "Premium futuristic interface design",
      color: "from-indigo-500 to-cyan-500",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  // Auto Slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  // Typewriter
  useEffect(() => {
    const currentText = texts[textIndex];

    if (charIndex < currentText.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + currentText[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 80);

      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setDisplayText("");
        setCharIndex(0);
        setTextIndex((prev) => (prev + 1) % texts.length);
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [charIndex, textIndex, texts]);

  // Slider Buttons
  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  return (
    <main className="bg-black text-white overflow-hidden">

      {/* HERO SECTION */}
      <section className="relative h-screen w-full overflow-hidden mt-20 pt-100 pb-120">

        {/* Background Image */}
        <img
          src={images[current]}
          alt="banner"
          className="absolute inset-0 h-full w-full object-cover transition duration-700"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Glow */}
        <div className="absolute top-0 left-0 h-[400px] w-[400px] rounded-full bg-cyan-500/20 blur-[140px]"></div>

        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-purple-500/20 blur-[140px]"></div>

        {/* Content */}
        <div className="relative z-10 flex h-full items-center justify-center px-5">

          <div className="max-w-4xl text-center">

            <span className="inline-block rounded-full border border-cyan-500/30 bg-cyan-500/10 px-6 py-2 text-sm tracking-[0.2em] text-cyan-400 backdrop-blur-xl">
              🚀 WELCOME TO MY PORTFOLIO
            </span>

            <h1 className="mt-8 text-5xl font-black leading-tight sm:text-6xl md:text-8xl">
              Creative
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                Developer
              </span>
            </h1>

            {/* Typewriter */}
            <div className="mt-8 h-16">

              <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-5xl">
                {displayText}
                <span className="animate-pulse text-cyan-400">|</span>
              </h2>
            </div>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-300">
              I build futuristic websites, AI powered applications,
              scalable systems and premium digital experiences.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-5">

              <button className="rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 px-10 py-4 text-lg font-bold shadow-2xl transition duration-500 hover:scale-105">
                Explore Projects
              </button>

              <button className="rounded-2xl border border-white/20 bg-white/10 px-10 py-4 text-lg font-bold backdrop-blur-xl transition duration-500 hover:bg-white/20">
                Contact Me
              </button>
            </div>
          </div>
        </div>

        {/* Prev */}
        <button
          onClick={prevSlide}
          className="absolute left-5 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/10 bg-black/40 p-4 backdrop-blur-xl transition hover:bg-cyan-500"
        >
          ⬅
        </button>

        {/* Next */}
        <button
          onClick={nextSlide}
          className="absolute right-5 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/10 bg-black/40 p-4 backdrop-blur-xl transition hover:bg-cyan-500"
        >
          ➡
        </button>

        {/* Dots */}
        <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-3">

          {images.map((_, index) => (
            <div
              key={index}
              className={`h-3 rounded-full transition-all duration-500 ${
                current === index
                  ? "w-10 bg-cyan-400"
                  : "w-3 bg-white/40"
              }`}
            ></div>
          ))}
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="relative overflow-hidden pt-20 pb-20">

        {/* Glow */}
        <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />

        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-purple-500/10 blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* Heading */}
          <div className="text-center mb-16">

            <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-sm text-cyan-400">
              ✨ ABOUT ME
            </span>

            <h2 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-black leading-tight">
              Creative Full Stack
              <span className="block bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Developer
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-gray-400 leading-8">
              I build modern premium websites, AI apps and futuristic
              digital experiences with clean UI and scalable systems.
            </p>
          </div>

          {/* About Grid */}
          <div className="grid items-center gap-12 lg:grid-cols-2">

            {/* Image */}
            <div className="group relative">

              <div className="absolute -inset-1 rounded-[30px] bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 opacity-30 blur transition duration-500 group-hover:opacity-60"></div>

              <div className="relative overflow-hidden rounded-[30px] border border-white/10">

                <img
                  src="https://i.pinimg.com/736x/14/86/1f/14861fd01fdfc18a2c7110e0d5c308aa.jpg"
                  alt="about"
                  className="h-[420px] w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>

                {/* Stats */}
                <div className="absolute bottom-5 left-5 right-5 rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur-2xl">

                  <div className="grid grid-cols-2 gap-4">

                    <div className="rounded-2xl bg-black/40 p-4 text-center border border-white/10">
                      <h3 className="text-2xl font-black text-cyan-400">
                        50+
                      </h3>

                      <p className="mt-1 text-sm text-gray-400">
                        Projects
                      </p>
                    </div>

                    <div className="rounded-2xl bg-black/40 p-4 text-center border border-white/10">
                      <h3 className="text-2xl font-black text-purple-400">
                        3+
                      </h3>

                      <p className="mt-1 text-sm text-gray-400">
                        Experience
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div>

              <span className="rounded-full border border-purple-500/20 bg-purple-500/10 px-5 py-2 text-sm text-purple-400">
                🚀 Professional Developer
              </span>

              <h3 className="mt-6 text-4xl sm:text-5xl font-black leading-tight">
                Turning Ideas Into
                <span className="block bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  Digital Reality
                </span>
              </h3>

              <p className="mt-6 text-gray-400 leading-8">
                I create premium digital products with modern UI/UX,
                AI integrations and scalable full stack development.
              </p>

              {/* Points */}
              <div className="mt-8 space-y-4">

                <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 text-2xl">
                    ⚡
                  </div>

                  <div>
                    <h4 className="font-bold">Fast Performance</h4>

                    <p className="text-sm text-gray-400">
                      Optimized modern architecture
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-500/10 text-2xl">
                    🔒
                  </div>

                  <div>
                    <h4 className="font-bold">Secure Development</h4>

                    <p className="text-sm text-gray-400">
                      Safe scalable backend systems
                    </p>
                  </div>
                </div>
              </div>

              <button className="mt-8 w-full rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 py-4 text-lg font-bold shadow-2xl transition duration-500 hover:scale-[1.02]">
                Explore Portfolio 🚀
              </button>
            </div>
          </div>

          {/* Skills */}
          <div className="mt-24">

            <div className="text-center mb-14">

              <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-sm text-cyan-400">
                💎 MY SKILLS
              </span>

              <h3 className="mt-6 text-4xl sm:text-5xl font-black">
                Technical
                <span className="block bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  Expertise
                </span>
              </h3>
            </div>

            {/* Cards */}
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-7 text-center backdrop-blur-2xl transition duration-500 hover:-translate-y-3"
                >

                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 blur-3xl transition duration-500 group-hover:opacity-20`}
                  />

                  <div
                    className={`relative z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-r ${skill.color} text-3xl shadow-2xl`}
                  >
                    {skill.icon}
                  </div>

                  <h4 className="relative z-10 mt-6 text-2xl font-black">
                    {skill.title}
                  </h4>

                  <p className="relative z-10 mt-4 text-gray-400 leading-7">
                    {skill.desc}
                  </p>

                  <button
                    className={`relative z-10 mt-6 rounded-2xl bg-gradient-to-r ${skill.color} px-6 py-3 font-bold shadow-xl transition duration-500 hover:scale-105`}
                  >
                    Learn More
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}