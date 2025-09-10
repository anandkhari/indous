"use client";

export default function CallToAction() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-gray-900 rounded-3xl shadow-2xl text-center py-16 px-8">
          {/* Heading */}
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 font-['poppins']">
            Your Global Career Journey{" "}
            <span className="text-teal-400">Starts Here</span>
          </h2>

          {/* Subtext */}
          <p className="text-lg lg:text-xl text-gray-300 mb-10 leading-relaxed font-['roboto']">
            Join thousands of professionals who trusted{" "}
            <span className="font-semibold text-teal-400">INDO-US Nexus</span>{" "}
            to achieve their dream jobs abroad. Start your success story today.
          </p>

          {/* CTA Button */}
          <div className="flex justify-center">
            <a
              href="/contactus"
              className="px-8 py-4 rounded-full text-white font-semibold text-lg shadow-lg 
                         bg-teal-500 hover:bg-teal-600 transition duration-300 
                         flex items-center gap-2"
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
          </div>
        </div>
      </div>
    </section>
  );
}
