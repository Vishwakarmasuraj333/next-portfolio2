"use client";

export default function projects() {
  const projects = [
    {
      title: "AI SaaS Platform",
      desc: "Modern AI powered SaaS application with premium dashboard and automation tools.",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
      tech: ["Next.js", "OpenAI", "Tailwind"],
    },

    {
      title: "E-Commerce Store",
      desc: "Premium online shopping platform with secure payments and fast performance.",
      image:
        "https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=2070&auto=format&fit=crop",
      tech: ["React", "Stripe", "MongoDB"],
    },

    {
      title: "Social Media App",
      desc: "Interactive social platform with realtime messaging and modern UI design.",
      image:
        "https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=2074&auto=format&fit=crop",
      tech: ["Next.js", "Firebase", "Socket.io"],
    },

    {
      title: "Netflix Clone",
      desc: "Luxury streaming platform inspired by premium movie applications.",
      image:
        "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?q=80&w=2070&auto=format&fit=crop",
      tech: ["React", "TMDB API", "Tailwind"],
    },

    {
      title: "Portfolio Website",
      desc: "Animated responsive portfolio with futuristic glassmorphism effects.",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop",
      tech: ["Next.js", "Framer Motion", "CSS"],
    },

    {
      title: "Admin Dashboard",
      desc: "Modern analytics dashboard with charts reports and realtime data.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
      tech: ["React", "Chart.js", "Node.js"],
    },
  ];

  return (
    <section className="relative overflow-hidden bg-black py-24 text-white pt-40 pb-30">

      {/* Glow */}
      <div className="absolute top-0 left-0 h-[350px] w-[350px] rounded-full bg-cyan-500/20 blur-[140px]" />

      <div className="absolute bottom-0 right-0 h-[350px] w-[350px] rounded-full bg-purple-500/20 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* Heading */}
        <div className="mb-20 text-center">

          <span className="inline-block rounded-full border border-cyan-500/20 bg-cyan-500/10 px-6 py-2 text-sm tracking-[0.2em] text-cyan-400 backdrop-blur-xl animate-pulse">
            🚀 FEATURED PROJECTS
          </span>

          <h2 className="mt-8 text-5xl font-black leading-tight sm:text-6xl md:text-7xl">
            Creative Digital
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
              Portfolio Works
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            Explore premium modern projects crafted with futuristic UI,
            scalable systems, AI integrations and high performance development.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">

          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-[35px] border border-white/10 bg-white/5 backdrop-blur-2xl transition duration-700 hover:-translate-y-4 hover:border-cyan-500/30"
            >

              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 opacity-0 blur-3xl transition duration-700 group-hover:opacity-100"></div>

              {/* Top Border */}
              <div className="absolute left-0 top-0 h-1 w-full origin-left scale-x-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 transition duration-700 group-hover:scale-x-100"></div>

              {/* Image */}
              <div className="relative overflow-hidden">

                <img
                  src={project.image}
                  alt={project.title}
                  className="h-72 w-full object-cover transition duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>

                {/* Badge */}
                <div className="absolute right-5 top-5 rounded-full border border-white/10 bg-black/40 px-4 py-2 text-sm font-semibold backdrop-blur-xl">
                  Premium
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10 p-8">

                {/* Icon */}
                <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-r from-cyan-500 to-purple-600 text-4xl shadow-2xl transition duration-500 group-hover:rotate-6 -mt-16 border-4 border-black">
                  🚀
                </div>

                {/* Title */}
                <h3 className="mt-8 text-3xl font-black transition duration-300 group-hover:text-cyan-400">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="mt-5 leading-8 text-gray-400">
                  {project.desc}
                </p>

                {/* Tech Stack */}
                <div className="mt-8 flex flex-wrap gap-3">

                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="rounded-full border border-white/10 bg-black/40 px-5 py-2 text-sm text-gray-300 transition duration-300 hover:border-cyan-500 hover:text-cyan-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="mt-10 flex items-center gap-4">

                  <button className="flex-1 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 py-4 font-bold shadow-2xl transition duration-500 hover:scale-[1.02]">
                    View Project
                  </button>

                  <button className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-xl transition duration-300 hover:bg-cyan-500">
                    🔗
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">

          <button className="rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 px-10 py-5 text-lg font-bold shadow-2xl transition duration-500 hover:scale-105">
            Explore More Projects ✨
          </button>
        </div>
      </div>
    </section>
  );
}