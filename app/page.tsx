"use client";

import { useEffect, useRef, useState, FormEvent } from "react";
import emailjs from "emailjs-com";
import ParticlesBg from "../components/ParticlesBg";
import { useScroll, motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";

export default function Home() {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const [statusMessage, setStatusMessage] = useState("");
  const { scrollYProgress } = useScroll();

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    emailjs
      .sendForm(
        "service_wj6k8ma",
        "template_4mu78zp",
        form,
        "p1X01Ge746PR3oQIw"
      )
      .then(
        () => {
          setStatusMessage("Message sent successfully!");
          form.reset();
        },
        (error) => {
          console.error("EmailJS error:", error);
          setStatusMessage("Failed to send message. Please try again later.");
        }
      );
  };

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <main className="bg-black text-white">
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed top-0 left-0 right-0 h-1 bg-blue-500 origin-left z-50"
      />
      <ParticlesBg />
      <div ref={cursorRef} className="custom-cursor"></div>
      {/* HERO */}
      <section className="min-h-screen flex flex-col justify-center px-6 md:px-20">

        <h1 className="text-5xl md:text-7xl font-bold">
          Hi, I'm <span className="text-blue-500">Aditya Raj</span>
        </h1>

        <div className="mt-4 text-xl text-gray-400">
          <TypeAnimation
            sequence={[
              "Full Stack Developer",
              1500,
              "React Developer",
              1500,
              "Backend Developer",
              1500,
            ]}
            speed={50}
            repeat={Infinity}
          />
        </div>

        <p className="mt-6 max-w-xl text-gray-300">
          Full Stack Developer building scalable web applications with modern technologies like React, Node.js, and MongoDB.
        </p>

        <div className="mt-6 flex gap-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-blue-500 rounded-xl hover:scale-105 hover:shadow-lg hover:shadow-blue-500/40 transition"
          >
            View Projects
          </a>

          <a href="/resume.pdf" download className="px-6 py-3 border border-gray-600 rounded-xl">
            Resume
          </a>
        </div>

        {/* STATS */}
        <div className="flex gap-10 mt-10">
          <div>
            <h2 className="text-3xl font-bold">5+</h2>
            <p className="text-gray-400">Projects</p>
          </div>
          <div>
            <h2 className="text-3xl font-bold">10+</h2>
            <p className="text-gray-400">Technologies</p>
          </div>
        </div>
      </section>

      {/* DIVIDER */}
      <div className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent my-10" />

      {/* PROJECTS */}
      <motion.section
        id="projects"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="px-6 md:px-20 py-20"
      >
        <h2 className="text-3xl font-semibold mb-10">Projects</h2>

        <div className="grid md:grid-cols-2 gap-8">

          {/* DEVROOMS */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            className="bg-white/5 rounded-2xl border border-gray-800 overflow-hidden"
          >
            <div className="relative group">
              <Image
                src="/projects/devrooms.png"
                width={500}
                height={300}
                alt="DevRooms"
                className="w-full h-48 object-cover"
              />

              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                <p className="text-white">View Project</p>
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold">DevRooms</h3>

              <p className="text-gray-400 mt-2">
                Built a full-stack platform with authentication, REST APIs, and MongoDB.
              </p>

              <p className="text-sm text-gray-500 mt-2">
                React • Node.js • Express • MongoDB
              </p>

              <div className="mt-4 flex gap-4">
                <a href="https://devrooms-chatbot.vercel.app/" target="_blank" className="text-blue-400">Live</a>
                
              </div>
            </div>
          </motion.div>

        </div>
      </motion.section>

      {/* DIVIDER */}
      <div className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent my-10" />

      {/* SKILLS */}
      <section className="px-6 md:px-20 py-20">
        <h2 className="text-3xl font-semibold mb-6">Skills</h2>

        <div className="flex flex-wrap gap-4">
          {["React", "Node.js", "MongoDB", "JavaScript", "TypeScript"].map((skill) => (
            <motion.div
              whileHover={{ scale: 1.1 }}
              key={skill}
              className="px-5 py-2 bg-white/5 rounded-xl border border-gray-800"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-6 md:px-20 py-20">
  <h2 className="text-3xl font-semibold mb-6">Contact Me</h2>

  <form onSubmit={sendEmail} className="flex flex-col gap-4 max-w-md">

    <input
      type="text"
      name="name"
      placeholder="Your Name"
      required
      className="p-3 bg-gray-800 rounded"
    />

    <input
      type="email"
      name="email"
      placeholder="Your Email"
      required
      className="p-3 bg-gray-800 rounded"
    />

    <textarea
      name="message"
      placeholder="Your Message"
      required
      className="p-3 bg-gray-800 rounded"
    />

    <button className="bg-blue-500 p-3 rounded hover:scale-105 transition">
      Send Message
    </button>

    {statusMessage && (
      <p className="text-sm text-green-400 mt-2">{statusMessage}</p>
    )}

  </form>
</section>

      {/* FOOTER */}
      <footer className="text-center py-10 text-gray-500 border-t border-gray-800">
        <p>© 2026 Aditya Raj</p>
        <p className="text-sm mt-2">Built with Next.js & Tailwind CSS</p>
      </footer>

    </main>
  );
}