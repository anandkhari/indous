"use client";

import { motion } from "framer-motion";

export default function CallToAction() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6 } 
    },
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="bg-gray-900 rounded-3xl shadow-2xl text-center py-16 px-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Heading */}
          <motion.h2
            className="text-4xl lg:text-5xl font-bold text-white mb-6 font-['poppins']"
            variants={fadeUp}
          >
            Your Global Career Journey{" "}
            <span className="text-teal-400">Starts Here</span>
          </motion.h2>

          {/* Subtext */}
          <motion.p
            className="text-lg lg:text-xl text-gray-300 mb-10 leading-relaxed font-['roboto']"
            variants={fadeUp}
            transition={{ delay: 0.2 }}
          >
            Join thousands of professionals who trusted{" "}
            <span className="font-semibold text-teal-400">INDO-US Nexus</span>{" "}
            to achieve their dream jobs abroad. Start your success story today.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            className="flex justify-center"
            variants={fadeUp}
            transition={{ delay: 0.4 }}
          >
            <a
              href="/contactus"
              className="px-8 py-3 rounded-xl text-white font-semibold text-lg shadow-lg 
                         bg-teal-500 hover:bg-teal-600 transition duration-300 
                         flex items-center gap-2 transform hover:scale-105"
            >
              Register Now
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
