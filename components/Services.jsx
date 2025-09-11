"use client";

import { Briefcase, GraduationCap, Coins, UserCheck, Plane } from "lucide-react";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.2 },
  }),
};

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-['Poppins']">
            Our <span className="text-teal-600">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-['Roboto']">
            Indo US provides end-to-end support for your global journey. Explore our
            specialized services designed to make your transition smooth and successful.
          </p>
        </div>

        {/* First Row: 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">
          {[
            {
              icon: <Briefcase className="text-white w-10 h-10" />,
              title: "Work Visa",
              description:
                "Secure the right work visa with complete documentation and employer support.",
            },
            {
              icon: <GraduationCap className="text-white w-10 h-10" />,
              title: "Study Abroad",
              description:
                "Get expert guidance for admissions, student visas, and overseas education.",
            },
            {
              icon: <Coins className="text-white w-10 h-10" />,
              title: "Investment Visa",
              description:
                "Unlock opportunities abroad with investment-based visa pathways.",
            },
          ].map((service, index) => (
            <motion.div
              key={index}
              className="text-center p-8 rounded-2xl bg-gradient-to-br from-teal-50 to-white 
                         shadow-md transition-all duration-300 hover:shadow-xl hover:scale-105"
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
            >
              <div className="w-20 h-20 bg-gradient-to-br from-teal-400 to-teal-600 rounded-2xl 
                              flex items-center justify-center mx-auto mb-6">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 font-['Poppins']">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed font-['Roboto']">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Second Row: 2 cards centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {[
            {
              icon: <UserCheck className="text-white w-10 h-10" />,
              title: "PR Pathway",
              description:
                "Build your future with permanent residency support and legal guidance.",
            },
            {
              icon: <Plane className="text-white w-10 h-10" />,
              title: "Air Ticketing",
              description:
                "Hassle-free flight bookings with special fares and travel assistance.",
            },
          ].map((service, index) => (
            <motion.div
              key={index}
              className="text-center p-8 rounded-2xl bg-gradient-to-br from-teal-50 to-white 
                         shadow-md transition-all duration-300 hover:shadow-xl hover:scale-105"
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
            >
              <div className="w-20 h-20 bg-gradient-to-br from-teal-400 to-teal-600 rounded-2xl 
                              flex items-center justify-center mx-auto mb-6">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 font-['Poppins']">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed font-['Roboto']">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
