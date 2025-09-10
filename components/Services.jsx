"use client";

import { Briefcase, GraduationCap, Coins, UserCheck, Plane } from "lucide-react";

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

        {/* First Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Work Visa */}
          <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-teal-50 to-white 
                          shadow-md transition-all duration-300 hover:shadow-xl hover:scale-105">
            <div className="w-20 h-20 bg-gradient-to-br from-teal-400 to-teal-600 rounded-2xl 
                            flex items-center justify-center mx-auto mb-6">
              <Briefcase className="text-white w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900 font-['Poppins']">
              Work Visa
            </h3>
            <p className="text-gray-600 leading-relaxed font-['Roboto']">
              Secure the right work visa with complete documentation and employer support.
            </p>
          </div>

          {/* Study Abroad */}
          <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-teal-50 to-white 
                          shadow-md transition-all duration-300 hover:shadow-xl hover:scale-105">
            <div className="w-20 h-20 bg-gradient-to-br from-teal-400 to-teal-600 rounded-2xl 
                            flex items-center justify-center mx-auto mb-6">
              <GraduationCap className="text-white w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900 font-['Poppins']">
              Study Abroad
            </h3>
            <p className="text-gray-600 leading-relaxed font-['Roboto']">
              Get expert guidance for admissions, student visas, and overseas education.
            </p>
          </div>

          {/* Investment Visa */}
          <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-teal-50 to-white 
                          shadow-md transition-all duration-300 hover:shadow-xl hover:scale-105">
            <div className="w-20 h-20 bg-gradient-to-br from-teal-400 to-teal-600 rounded-2xl 
                            flex items-center justify-center mx-auto mb-6">
              <Coins className="text-white w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900 font-['Poppins']">
              Investment Visa
            </h3>
            <p className="text-gray-600 leading-relaxed font-['Roboto']">
              Unlock opportunities abroad with investment-based visa pathways.
            </p>
          </div>
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10 max-w-4xl mx-auto">
          {/* PR Pathway */}
          <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-teal-50 to-white 
                          shadow-md transition-all duration-300 hover:shadow-xl hover:scale-105">
            <div className="w-20 h-20 bg-gradient-to-br from-teal-400 to-teal-600 rounded-2xl 
                            flex items-center justify-center mx-auto mb-6">
              <UserCheck className="text-white w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900 font-['Poppins']">
              PR Pathway
            </h3>
            <p className="text-gray-600 leading-relaxed font-['Roboto']">
              Build your future with permanent residency support and legal guidance.
            </p>
          </div>

          {/* Air Ticketing */}
          <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-teal-50 to-white 
                          shadow-md transition-all duration-300 hover:shadow-xl hover:scale-105">
            <div className="w-20 h-20 bg-gradient-to-br from-teal-400 to-teal-600 rounded-2xl 
                            flex items-center justify-center mx-auto mb-6">
              <Plane className="text-white w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900 font-['Poppins']">
              Air Ticketing
            </h3>
            <p className="text-gray-600 leading-relaxed font-['Roboto']">
              Hassle-free flight bookings with special fares and travel assistance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
