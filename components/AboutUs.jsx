"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutUs() {
  return (
    <section
      id="about"
      className="relative py-20 lg:py-20 flex flex-col lg:flex-row items-center max-w-7xl mx-auto px-8 sm:px-6 lg:px-12 gap-8 lg:gap-12"
    >
      {/* Left: Image */}
      <motion.div
        className="lg:w-1/2 w-full h-auto"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <Image
          src="/aboutus.jpeg"
          alt="INDO-US Group Headquarters"
          width={800}
          height={900}
          className="w-full h-full object-cover rounded-2xl shadow-xl"
          unoptimized
        />
      </motion.div>

      {/* Right: Text */}
      <motion.div
        className="lg:w-1/2 w-full text-left"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6 font-['poppins']">
          About <span className="text-teal-500">Us</span>
        </h2>

        <p className="text-gray-700 text-base sm:text-xl mb-6 leading-relaxed font-['roboto']">
          Headquartered in Irinjalakuda since 2010, INDO-US Group has grown into a trusted name in Kerala, with a network of 72
          franchises across the state. Our company, INDO-US Nexus LLP, is duly registered with the Ministry of Corporate Affairs 
          and holds the prestigious ISO 9001-2015 certification, reflecting our unwavering commitment to quality and professional excellence.
        </p>

        <motion.a
          href="#contact"
          className="group inline-flex items-center mt-2 px-8 py-3 bg-gradient-to-r from-teal-500 to-teal-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 text-lg font-['Poppins']"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Learn More
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 ml-3 transform transition-transform duration-300 group-hover:translate-x-2"
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
    </section>
  );
}
