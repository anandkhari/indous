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
                    src="https://randomuser.me/api/portraits/women/44.jpg"
                    alt="Anjali K."
                    className="w-16 h-16 rounded-full mr-6 border-4 border-white shadow-lg"
                  />
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white"></div>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 font-['Poppins']">Anjali K.</h4>
                  <p className="text-teal-600 font-semibold font-['Roboto']">Registered Nurse, Canada</p>
                  <p className="text-sm text-gray-500 font-['Roboto']">Toronto General Hospital</p>
                </div>
              </div>
              <blockquote className="text-gray-700 text-lg leading-relaxed italic mb-6 font-['Roboto']">
                "INDO-US Nexus transformed my dream into reality. Their guidance through the entire process was exceptional. I've been working in Toronto for 2 years now with excellent salary and benefits. The support didn't end after placement - they continue to check on my progress."
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
                  <MapPin size={14} /> Toronto, Canada
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="testimonial-slide flex-shrink-0 w-full md:w-[480px] p-8 rounded-3xl shadow-xl bg-white hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="relative">
                  <img
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    alt="Rajesh M."
                    className="w-16 h-16 rounded-full mr-6 border-4 border-white shadow-lg"
                  />
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white"></div>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 font-['Poppins']">Rajesh M.</h4>
                  <p className="text-teal-600 font-semibold font-['Roboto']">Software Engineer, USA</p>
                  <p className="text-sm text-gray-500 font-['Roboto']">Google, Mountain View</p>
                </div>
              </div>
              <blockquote className="text-gray-700 text-lg leading-relaxed italic mb-6 font-['Roboto']">
                "The visa process seemed impossible, but INDO-US Nexus handled everything professionally. They matched me with a top tech company in California and helped negotiate an amazing package. My salary increased by 400% compared to my India job!"
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
                  <MapPin size={14} /> California, USA
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="testimonial-slide flex-shrink-0 w-full md:w-[480px] p-8 rounded-3xl shadow-xl bg-white hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="relative">
                  <img
                    src="https://randomuser.me/api/portraits/men/75.jpg"
                    alt="Sameer P."
                    className="w-16 h-16 rounded-full mr-6 border-4 border-white shadow-lg"
                  />
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white"></div>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 font-['Poppins']">Sameer P.</h4>
                  <p className="text-teal-600 font-semibold font-['Roboto']">Senior Accountant, UAE</p>
                  <p className="text-sm text-gray-500 font-['Roboto']">KPMG, Dubai</p>
                </div>
              </div>
              <blockquote className="text-gray-700 text-lg leading-relaxed italic mb-6 font-['Roboto']">
                "I was initially skeptical, but their ISO certification gave me confidence. They found me a position in Dubai with a reputable firm. The relocation assistance was particularly helpful for my family. Tax-free income was a game-changer!"
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
                  <MapPin size={14} /> Dubai, UAE
                </div>
              </div>
            </div>

            {/* Testimonial 4 */}
            <div className="testimonial-slide flex-shrink-0 w-full md:w-[480px] p-8 rounded-3xl shadow-xl bg-white hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="relative">
                  <img
                    src="https://randomuser.me/api/portraits/women/68.jpg"
                    alt="Priya S."
                    className="w-16 h-16 rounded-full mr-6 border-4 border-white shadow-lg"
                  />
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white"></div>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 font-['Poppins']">Priya S.</h4>
                  <p className="text-teal-600 font-semibold font-['Roboto']">Marketing Manager, UK</p>
                  <p className="text-sm text-gray-500 font-['Roboto']">BBC, London</p>
                </div>
              </div>
              <blockquote className="text-gray-700 text-lg leading-relaxed italic mb-6 font-['Roboto']">
                "Working with the BBC was always my dream. INDO-US Nexus not only made it possible but also prepared me thoroughly for the British work culture. The interview coaching was phenomenal. Now I'm leading campaigns for one of the world's most respected media companies."
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
                  <MapPin size={14} /> London, UK
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
