"use client";

import {
  FaBalanceScale,
  FaStar,
  FaHandshake,
  FaLightbulb,
  FaUserGraduate,
  FaPeopleCarry,
} from "react-icons/fa";

export default function AboutPage() {
  return (
    <main className="w-full font-['roboto']">
      {/* Hero Section */}
      <section id="home" className="relative w-full py-20 font-['poppins']">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/326576/pexels-photo-326576.jpeg"
            alt="About INDO-US Nexus"
            className="w-full h-full object-cover object-center filter brightness-75"
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content */}
        <div className="relative z-10 flex items-center justify-center px-6 lg:px-16">
          <div className="max-w-7xl text-center text-white">
            <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight mb-6">
              ABOUT <span className="text-teal-400">INDOUS NEXUS LLP</span>
            </h1>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-center gap-12">
          {/* Image */}
          <div className="lg:w-1/2 w-full">
            <img
              src="https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg"
              alt="INDO-US Group"
              className="w-full h-auto rounded-2xl shadow-xl object-cover"
            />
          </div>
          {/* Text */}
          <div className="lg:w-1/2 w-full text-left">
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
          </div>
        </div>
      </section>

     {/* Vision & Mission Section */}
<section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-20 space-y-16">
    
    {/* Vision */}
    <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] items-center gap-8">
      <div className="relative">
        <img
          src="/vision.svg"
          alt="Vision Illustration"
          className="w-full lg:w-[500px]"
        />
      </div>
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
    </div>

    {/* Mission */}
    <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
      <div className="text-left px-4 sm:px-6 lg:px-10 order-2 lg:order-1">
        <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 font-['poppins']">
          Our <span className="text-teal-600">Mission</span>
        </h3>
        <p className="text-gray-700 text-lg lg:text-xl leading-relaxed">
          We ethically and transparently connect skilled and unskilled
          professionals with international employers. Our commitment to
          reliable recruitment empowers individuals to build brighter
          futures and achieve their career aspirations.
        </p>
      </div>
      <div className="relative order-1 lg:order-2">
        <img
          src="/mission.svg"
          alt="Mission Illustration"
          className="w-full lg:w-[500px]"
        />
      </div>
    </div>
  </div>
</section>


      {/* Core Values Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-20 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 font-['poppins']">
            Our <span className="text-teal-600">Core Values</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {/* Integrity */}
            <div className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center mb-4">
                <FaBalanceScale className="text-teal-500 text-3xl mr-4" />
                <h4 className="text-xl font-semibold text-gray-800 font-['poppins']">
                  Integrity
                </h4>
              </div>
              <p className="text-gray-700 text-base leading-relaxed">
                We uphold the highest ethical standards, ensuring honesty and
                transparency in all our interactions.
              </p>
            </div>

            {/* Excellence */}
            <div className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center mb-4">
                <FaStar className="text-teal-500 text-3xl mr-4" />
                <h4 className="text-xl font-semibold text-gray-800 font-['poppins']">
                  Excellence
                </h4>
              </div>
              <p className="text-gray-700 text-base leading-relaxed">
                We are dedicated to providing exceptional service and delivering
                results that exceed expectations.
              </p>
            </div>

            {/* Commitment */}
            <div className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center mb-4">
                <FaHandshake className="text-teal-500 text-3xl mr-4" />
                <h4 className="text-xl font-semibold text-gray-800 font-['poppins']">
                  Commitment
                </h4>
              </div>
              <p className="text-gray-700 text-base leading-relaxed">
                We are deeply invested in the success of our clients and
                candidates, working tirelessly to achieve their goals.
              </p>
            </div>

            {/* Innovation */}
            <div className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center mb-4">
                <FaLightbulb className="text-teal-500 text-3xl mr-4" />
                <h4 className="text-xl font-semibold text-gray-800 font-['poppins']">
                  Innovation
                </h4>
              </div>
              <p className="text-gray-700 text-base leading-relaxed">
                We embrace change and continuously seek innovative solutions to
                navigate the evolving global landscape.
              </p>
            </div>

            {/* Empowerment */}
            <div className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center mb-4">
                <FaUserGraduate className="text-teal-500 text-3xl mr-4" />
                <h4 className="text-xl font-semibold text-gray-800 font-['poppins']">
                  Empowerment
                </h4>
              </div>
              <p className="text-gray-700 text-base leading-relaxed">
                We provide individuals with the resources and support they need
                to thrive in their international careers.
              </p>
            </div>

            {/* Partnership */}
            <div className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center mb-4">
                <FaPeopleCarry className="text-teal-500 text-3xl mr-4" />
                <h4 className="text-xl font-semibold text-gray-800 font-['poppins']">
                  Partnership
                </h4>
              </div>
              <p className="text-gray-700 text-base leading-relaxed">
                We cultivate strong, collaborative relationships built on mutual
                trust, respect, and shared success.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
