"use client";

import { Building, Users, Award } from "lucide-react";

export default function StatsSection() {
  return (
    <section className="w-full bg-teal-50 py-16">
      <div className="flex justify-center px-6 lg:px-8">
        {/* Teal container with rounded corners */}
        <div className="max-w-7xl w-full bg-gradient-to-r from-teal-500 to-teal-600 rounded-3xl p-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 font-['poppins'] text-center text-white">

            {/* Franchises */}
            <div className="flex flex-col items-center space-y-2">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/20 rounded-full flex items-center justify-center mb-3">
                <Building className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>
              <p className="text-3xl sm:text-4xl font-bold">72+</p>
              <p className="text-sm sm:text-base opacity-90">Franchises Across Kerala</p>
            </div>

            {/* Successful Placements */}
            <div className="flex flex-col items-center space-y-2">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/20 rounded-full flex items-center justify-center mb-3">
                <Users className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>
              <p className="text-3xl sm:text-4xl font-bold">4000+</p>
              <p className="text-sm sm:text-base opacity-90">Successful Placements</p>
            </div>

            {/* ISO Certified */}
            <div className="flex flex-col items-center space-y-2">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/20 rounded-full flex items-center justify-center mb-3">
                <Award className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>
              <p className="text-3xl sm:text-4xl font-bold">ISO</p>
              <p className="text-sm sm:text-base opacity-90">9001:2015 Certified</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
