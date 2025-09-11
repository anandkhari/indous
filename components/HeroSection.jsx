"use client";

import React from "react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative w-full h-screen sm:h-[calc(100vh-80px)] overflow-hidden font-poppins"
    >
      {/* Fullscreen Background Video */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="block w-full h-full object-cover object-center filter brightness-75"
        >
          <source
            src="/herovideo.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center px-4 sm:px-6 md:px-8 lg:px-12">
        <motion.div
          className="max-w-2xl text-left lg:pl-22"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.2, duration: 0.8 },
            },
          }}
        >
          <motion.h1
            className="text-4xl sm:text-5xl font-['poppins'] lg:text-7xl font-extrabold text-white leading-tight"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
            }}
          >
            Launch Your <span className="text-teal-400">Global Career</span>
          </motion.h1>

          <motion.p
            className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl text-white/80 font-roboto"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } },
            }}
          >
            Trusted ISO-Certified Placement Experts Since 2010. Your gateway to
            international opportunities.
          </motion.p>

          {/* CTA Button */}
          <motion.a
            href="#jobs"
            className="mt-8 sm:mt-10 inline-flex items-center font-['poppins'] gap-3 bg-white/10 backdrop-blur-md border border-white/30 text-white px-4 sm:px-8 py-2 sm:py-4 rounded-xl font-medium text-lg shadow-lg hover:shadow-2xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.4 } }}
          >
            Find Your Dream Job
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 sm:w-6 sm:h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
