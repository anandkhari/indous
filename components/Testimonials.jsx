"use client";

import { Star, StarHalf, MapPin } from "lucide-react";

export default function Testimonials() {
  return (
    <section id="success" className="py-24 bg-gradient-to-br from-gray-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-['Poppins']">
            Success Stories That <span className="bg-gradient-to-r from-teal-500 to-teal-700 bg-clip-text text-transparent">Inspire</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-['Roboto']">
            Real people, real dreams achieved. Hear from professionals who transformed their careers with our guidance.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="testimonial-carousel flex overflow-x-auto pb-8 gap-8 px-2 sm:px-4 md:px-0 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
            
            {/* Testimonial 1 */}
            <div className="testimonial-slide flex-shrink-0 w-full md:w-[480px] p-8 rounded-3xl shadow-xl bg-white hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="relative">
                  <img
                    src="/test1.jpeg"
                    alt="Anupama"
                    className="w-16 h-16 object-fit rounded-full mr-6 border-4 border-white shadow-lg"
                  />
                 
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 font-['Poppins']">Anupama</h4>
                  <p className="text-teal-600 font-semibold font-['Roboto']">Caregiver, Italy</p>
                 
                </div>
              </div>
              <blockquote className="text-gray-700 text-lg leading-relaxed italic mb-6 font-['Roboto']">
                I am truly grateful to INDOUS NEXUS LLP for helping me secure a caregiver job in Italy. From the very beginning, the team was professional, supportive, and transparent throughout the entire process. They guided me step by step, and made sure everything was smooth and stress-free.
              </blockquote>
              <div className="flex items-center justify-between">
                <div className="flex text-amber-400">
                  <Star fill="currentColor" />
                  <Star fill="currentColor" />
                  <Star fill="currentColor" />
                  <Star fill="currentColor" />
                  <Star fill="currentColor" />
                </div>
                <div className="text-sm text-gray-500 flex items-center gap-1 font-['Roboto']">
                  <MapPin size={14} /> Italy
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="testimonial-slide flex-shrink-0 w-full md:w-[480px] p-8 rounded-3xl shadow-xl bg-white hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="relative">
                  <img
                    src="/test2.jpg"
                    alt="Wilfred nigli."
                    className="w-16 h-16 rounded-full mr-6 border-4 border-white shadow-lg"
                  />
                  
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 font-['Poppins']">Wilfred nigli</h4>
                  <p className="text-teal-600 font-semibold font-['Roboto']"> Restaurant ,Italy</p>
                  
                </div>
              </div>
              <blockquote className="text-gray-700 text-lg leading-relaxed italic mb-6 font-['Roboto']">
 would like to sincerely thank INDOUS NEXUS LLP for helping me get a job as a restaurant worker in Italy. The entire team was very professional, supportive, and reliable throughout the process. They guided me with all the necessary steps, provided clear information, and made sure everything went smoothly until I reached my destination.
              </blockquote>
              <div className="flex items-center justify-between">
                <div className="flex text-amber-400">
                  <Star fill="currentColor" />
                  <Star fill="currentColor" />
                  <Star fill="currentColor" />
                  <Star fill="currentColor" />
                  <Star fill="currentColor" />
                </div>
                <div className="text-sm text-gray-500 flex items-center gap-1 font-['Roboto']">
                  <MapPin size={14} /> Italy
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="testimonial-slide flex-shrink-0 w-full md:w-[480px] p-8 rounded-3xl shadow-xl bg-white hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="relative">
                  <img
                    src="/test4.jpeg"
                    alt="George."
                    className="w-16 h-16 rounded-full mr-6 border-4 border-white shadow-lg"
                  />
                 
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 font-['Poppins']">George.</h4>
                  <p className="text-teal-600 font-semibold font-['Roboto']">Malaysia,</p>
               
                </div>
              </div>
              <blockquote className="text-gray-700 text-lg leading-relaxed italic mb-6 font-['Roboto']">
                I am very thankful to INDOUS NEXUS LLP for helping me secure a job as a restaurant worker in Malaysia. The team was professional, transparent, and made the process smooth. I truly appreciate their efforts and highly recommend them to anyone looking for genuine job placements abroad.
              </blockquote>
              <div className="flex items-center justify-between">
                <div className="flex text-amber-400">
                  <Star fill="currentColor" />
                  <Star fill="currentColor" />
                  <Star fill="currentColor" />
                  <Star fill="currentColor" />
                  <StarHalf fill="currentColor" />
                </div>
                <div className="text-sm text-gray-500 flex items-center gap-1 font-['Roboto']">
                  <MapPin size={14} /> Malaysia
                </div>
              </div>
            </div>

            {/* Testimonial 4 */}
            <div className="testimonial-slide flex-shrink-0 w-full md:w-[480px] p-8 rounded-3xl shadow-xl bg-white hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="relative">
                  <img
                    src="/test3.jpg"
                    alt="."
                    className="w-16 h-16 rounded-full mr-6 border-4 border-white shadow-lg"
                  />
            
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 font-['Poppins']">Akhsay</h4>
                  <p className="text-teal-600 font-semibold font-['Roboto']">Automobile, Japan</p>
            
                </div>
              </div>
              <blockquote className="text-gray-700 text-lg leading-relaxed italic mb-6 font-['Roboto']">
               Thanks to INDOUS NEXUS LLP, I got the chance to work as a car factory worker in Japan. The whole process was smooth, and the team supported me at every step. I’m very satisfied with their service and truly appreciate their guidance. Highly recommended!
              </blockquote>
              <div className="flex items-center justify-between">
                <div className="flex text-amber-400">
                  <Star fill="currentColor" />
                  <Star fill="currentColor" />
                  <Star fill="currentColor" />
                  <Star fill="currentColor" />
                  <Star fill="currentColor" />
                </div>
                <div className="text-sm text-gray-500 flex items-center gap-1 font-['Roboto']">
                  <MapPin size={14} /> Japan
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
