import Link from "next/link";
export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-100">

      {/* Hero Section */}
      <section className="bg-yellow-900 text-white py-20 px-6 text-center mt-20">
        <h1 className="text-5xl font-bold mb-4">
          About Me
        </h1>

        <p className="max-w-3xl mx-auto text-lg text-gray-200">
          I am a passionate Full Stack Developer who loves
          building modern websites and web applications using
          Next.js, React, Node.js, MongoDB, and Tailwind CSS.
        </p>
      </section>

      {/* About Content */}
      <section className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-10 items-center">

        {/* Image */}
        <div>
          <img
            src="https://i.pinimg.com/1200x/9b/c8/a6/9bc8a66cc4ecd5901674bf43e5fff8de.jpg"
            alt="developer"
            className="rounded-2xl shadow-lg w-full h-[400px] object-cover"
          />
        </div>

        {/* Text */}
        <div>
          <h2 className="text-4xl font-bold text-yellow-900 mb-6">
            Vishwakarma Suraj
          </h2>

          <p className="text-gray-700 text-lg leading-8 mb-4">
            I specialize in creating beautiful, responsive,
            and high-performance web applications.
          </p>

          <p className="text-gray-700 text-lg leading-8 mb-4">
            My skills include React.js, Next.js, Express.js,
            MongoDB, Node.js, and Tailwind CSS.
          </p>

          <p className="text-gray-700 text-lg leading-8">
            I enjoy solving real-world problems and turning
            ideas into amazing digital experiences.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section className="bg-white py-16 px-6">
        <h2 className="text-4xl font-bold text-center text-yellow-900 mb-12">
          My Skills
        </h2>

        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">

          {[
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Next.js",
            "Node.js",
            "MongoDB",
            "Tailwind CSS",
          ].map((skill, index) => (
            <div
              key={index}
              className="bg-yellow-900 text-white p-6 rounded-2xl text-center font-bold shadow-lg hover:scale-105 duration-300"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

    
    </div>
  );
}