"use client";

import {
  FaBalanceScale,
  FaStar,
  FaHandshake,
  FaLightbulb,
  FaUserGraduate,
  FaPeopleCarry,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function AboutPage() {
  const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
  const fadeLeft = { hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6 } } };
  const fadeRight = { hidden: { opacity: 0, x: 30 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6 } } };

  return (
    <main className="w-full font-['roboto']">
      {/* Hero Section */}
      <section id="home" className="relative w-full py-20 font-['poppins']">
        <div className="absolute inset-0">
          <img
            src="/heroimage.jpeg"
            alt="About INDO-US Nexus"
            className="w-full h-full object-cover object-center filter brightness-75"
          />
        </div>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 flex items-center justify-center px-6 lg:px-16">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeUp}>
            <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight mb-6 text-white">
              ABOUT <span className="text-teal-400">INDOUS NEXUS LLP</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            className="lg:w-1/2 w-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeLeft}
          >
            <img
              src="/aboutuspage.jpeg"
              alt="INDO-US Group"
              className="w-full h-auto rounded-2xl shadow-xl object-cover"
            />
          </motion.div>
          <motion.div
            className="lg:w-1/2 w-full text-left"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeRight}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 font-['poppins']">
              Who <span className="text-teal-600">We Are</span>
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              INDO-US Group, headquartered in Irinjalakuda since 2010, has grown
              into a trusted name in Kerala with a network of 72 franchises
              across the state. Our company, INDO-US Nexus LLP, is duly
              registered with the Ministry of Corporate Affairs and holds the
              prestigious ISO 9001-2015 certification, reflecting our unwavering
              commitment to quality and professional excellence.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              With a strong global presence, we have successfully facilitated
              over 4,000 job placements worldwide, bridging top talent with
              organizations and creating life-changing career opportunities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-20 space-y-16">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-[auto_1fr] items-center gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeLeft}
          >
            <img src="/vision.svg" alt="Vision Illustration" className="w-full lg:w-[500px]" />
            <div className="text-left px-4 sm:px-6 lg:px-10">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 font-['poppins']">
                Our <span className="text-teal-600">Vision</span>
              </h3>
              <p className="text-gray-700 text-lg lg:text-xl leading-relaxed">
                To be the premier gateway to global careers, serving as a
                trusted partner that connects talent with international
                opportunities.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div className="text-left px-4 sm:px-6 lg:px-10 order-2 lg:order-1" variants={fadeLeft}>
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 font-['poppins']">
                Our <span className="text-teal-600">Mission</span>
              </h3>
              <p className="text-gray-700 text-lg lg:text-xl leading-relaxed">
                We ethically and transparently connect skilled and unskilled
                professionals with international employers. Our commitment to
                reliable recruitment empowers individuals to build brighter
                futures and achieve their career aspirations.
              </p>
            </motion.div>
            <motion.div className="relative order-1 lg:order-2" variants={fadeRight}>
              <img src="/mission.svg" alt="Mission Illustration" className="w-full lg:w-[500px]" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-20 text-center">
          <motion.h2
            className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 font-['poppins']"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
          >
            Our <span className="text-teal-600">Core Values</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {[
              { icon: FaBalanceScale, title: "Integrity", text: "We uphold the highest ethical standards, ensuring honesty and transparency in all our interactions." },
              { icon: FaStar, title: "Excellence", text: "We are dedicated to providing exceptional service and delivering results that exceed expectations." },
              { icon: FaHandshake, title: "Commitment", text: "We are deeply invested in the success of our clients and candidates, working tirelessly to achieve their goals." },
              { icon: FaLightbulb, title: "Innovation", text: "We embrace change and continuously seek innovative solutions to navigate the evolving global landscape." },
              { icon: FaUserGraduate, title: "Empowerment", text: "We provide individuals with the resources and support they need to thrive in their international careers." },
              { icon: FaPeopleCarry, title: "Partnership", text: "We cultivate strong, collaborative relationships built on mutual trust, respect, and shared success." },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.1 } } }}
              >
                <div className="flex items-center mb-4">
                  <item.icon className="text-teal-500 text-3xl mr-4" />
                  <h4 className="text-xl font-semibold text-gray-800 font-['poppins']">{item.title}</h4>
                </div>
                <p className="text-gray-700 text-base leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
