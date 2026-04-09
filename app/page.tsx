"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500 rounded-full blur-3xl opacity-20"></div>

      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-6 md:px-20 py-6 backdrop-blur-md sticky top-0 z-50">
        <h1 className="text-xl font-bold tracking-wide">Aditya</h1>
        <div className="flex gap-6 text-gray-400">
          <a href="#about" className="hover:text-white">About</a>
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="min-h-screen flex flex-col justify-center px-6 md:px-20 relative z-10">

        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-bold"
        >
          Hi, I'm <span className="text-blue-500">Aditya Raj</span>
        </motion.h1>

        {/* TYPING EFFECT */}
        <div className="mt-4 text-xl text-gray-400">
          <TypeAnimation
            sequence={[
              "Full Stack Developer",
              1500,
              "React Developer",
              1500,
              "Node.js Backend Developer",
              1500,
            ]}
            speed={50}
            repeat={Infinity}
          />
        </div>

        <p className="mt-6 max-w-xl text-gray-300">
          I build modern, scalable and visually stunning web applications.
        </p>

        <div className="mt-6 flex gap-4">
          <a href="#projects" className="px-6 py-3 bg-blue-500 rounded-xl hover:scale-105 transition shadow-lg shadow-blue-500/30">
            View Projects
          </a>

          <a href="/resume.pdf" download className="px-6 py-3 border border-gray-600 rounded-xl hover:bg-white hover:text-black transition">
            Resume
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="px-6 md:px-20 py-20">
        <h2 className="text-3xl font-semibold mb-6">About Me</h2>

        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="bg-white/5 backdrop-blur-lg p-6 rounded-2xl border border-gray-800"
        >
          <p className="text-gray-300">
            Passionate Full Stack Developer skilled in building scalable and performant applications using modern technologies.
          </p>
        </motion.div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="px-6 md:px-20 py-20">
        <h2 className="text-3xl font-semibold mb-10">Projects</h2>

        <div className="grid md:grid-cols-2 gap-8">

          {/* PROJECT */}
          <motion.div 
            whileHover={{ scale: 1.05, rotate: 1 }}
            className="bg-white/5 backdrop-blur-lg rounded-2xl border border-gray-800 overflow-hidden"
          >
            <Image src="/projects/devrooms.png" width={500} height={300} alt="DevRooms" className="w-full h-48 object-cover"/>

            <div className="p-6">
              <h3 className="text-xl font-bold">DevRooms</h3>
              <p className="text-gray-400 mt-2">
                Full-stack app with authentication, REST APIs, and MongoDB.
              </p>

              <div className="mt-4 flex gap-4">
                <a href="#" className="text-blue-400 hover:underline">Live</a>
                <a href="#" className="text-blue-400 hover:underline">GitHub</a>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* SKILLS */}
      <section className="px-6 md:px-20 py-20">
        <h2 className="text-3xl font-semibold mb-6">Skills</h2>

        <div className="flex flex-wrap gap-4">
          {["React", "Node.js", "MongoDB", "JavaScript", "TypeScript"].map((skill) => (
            <motion.div 
              whileHover={{ scale: 1.1 }}
              key={skill} 
              className="px-5 py-2 bg-white/5 backdrop-blur-lg rounded-xl border border-gray-800"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-6 md:px-20 py-20">
        <h2 className="text-3xl font-semibold mb-6">Contact</h2>

        <div className="bg-white/5 backdrop-blur-lg p-6 rounded-2xl border border-gray-800">
          <p>Email: rajaditya.0052@email.com</p>
          <p>GitHub: https://github.com/AdityaRaj0052</p>
          <p>LinkedIn: https://www.linkedin.com/in/aditya-raj-9557523a0</p>

          <a href="mailto:rajaditya.0052@email.com" className="inline-block mt-4 px-6 py-3 bg-blue-500 rounded-xl shadow-lg shadow-blue-500/30">
            Send Email
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-6 text-gray-500">
        © 2026 Aditya Raj
      </footer>

    </main>
  );
}