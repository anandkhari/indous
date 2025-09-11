"use client";

import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

export default function ContactUs() {
  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <main className="w-full font-['roboto']">
      {/* Hero Section */}
      <section id="home" className="relative w-full py-20 font-['poppins']">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/326576/pexels-photo-326576.jpeg"
            alt="Contact INDO-US Nexus"
            className="w-full h-full object-cover object-center filter brightness-75"
          />
        </div>
        <div className="absolute inset-0 bg-black/40"></div>

        <motion.div
          className="relative z-10 flex items-center justify-center px-6 lg:px-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <div className="max-w-7xl text-center text-white">
            <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight mb-6">
              Contact <span className="text-teal-500">Us</span>
            </h1>
          </div>
        </motion.div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Column: Contact Form */}
        <motion.div
          className="rounded-2xl p-6 md:p-8 shadow-md"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 font-['poppins']">
            GET IN TOUCH
          </h2>

          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 mb-2 font-medium font-['poppins']">
                  NAME
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Enter your name*"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2 font-medium font-['poppins']">
                  EMAIL
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Enter your email*"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 mb-2 font-medium font-['poppins']">
                PHONE NUMBER
              </label>
              <input
                type="tel"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Enter your phone number*"
                required
              />
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 font-['poppins']">
                YOUR MESSAGE
              </h3>
              <textarea
                rows="5"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Type your message here..."
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              className="w-full bg-teal-500 hover:bg-teal-600 text-white py-3 px-6 rounded-lg font-semibold font-['poppins'] transition-colors"
            >
              SEND MESSAGE
            </motion.button>
          </div>
        </motion.div>

        {/* Right Column: Contact Info */}
        <motion.div
          className="space-y-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          {/* Contact Information */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-md">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 font-['poppins']">
              CONTACT INFORMATION
            </h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-teal-500 p-3 rounded-full mr-4 flex-shrink-0">
                  <FaPhoneAlt className="text-white text-lg" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 font-['poppins']">
                    PHONE
                  </h3>
                  <div className="flex flex-col space-y-1">
                    <a href="tel:+917994101243" className="text-gray-700 hover:text-teal-500 transition-colors">
                      +91 79941 01243
                    </a>
                    <a href="tel:+919567276183" className="text-gray-700 hover:text-teal-500 transition-colors">
                      +91 95672 76183
                    </a>
                    <a href="tel:+919400211243" className="text-gray-700 hover:text-teal-500 transition-colors">
                      +91 94002 11243
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-teal-500 p-3 rounded-full mr-4 flex-shrink-0">
                  <FaMapMarkerAlt className="text-white text-lg" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 font-['poppins']">
                    ADDRESS
                  </h3>
                  <p className="text-gray-700">
                    LF Square, Near Chungath Jewellary, <br />
                    Tana, Irinjalakuda.
                    <br />
                    PIN 690121. Thrissur, India
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-teal-500 p-3 rounded-full mr-4 flex-shrink-0">
                  <FaEnvelope className="text-white text-lg" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 font-['poppins']">
                    EMAIL
                  </h3>
                  <a href="mailto:indousnexusllp@gmail.com" className="text-gray-700 hover:text-teal-500 transition-colors">
                    indousnexusllp@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-md">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 font-['poppins']">
              BUSINESS HOURS
            </h2>
            <div className="p-4 rounded-lg">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-gray-300">
                    <th className="pb-2 font-['poppins']">DAY</th>
                    <th className="pb-2 font-['poppins']">MONDAY - FRIDAY</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-3 font-['poppins']">HOURS</td>
                    <td className="py-3">9:00 am - 8:00 pm</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
