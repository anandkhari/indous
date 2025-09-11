"use client";

export default function Map() {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden mb-12 max-w-7xl mx-auto p-4 sm:p-6">
      <h2 className="text-xl sm:text-2xl font-bold text-teal-500 pb-4 border-b font-['poppins']">
        Our Location
      </h2>

      <div className="relative w-full pb-[56%] mt-4">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3924.929684165232!2d76.21394238600857!3d10.34750759746793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sLF%20Square%2C%20Near%20Chungath%20Jewellery%2C%20Tana%2C%20Irinjalakuda%2C%20Thrissur%2C%20Kerala%20690121%2C%20India!5e0!3m2!1sen!2sin!4v1757582005639!5m2!1sen!2sin"
          className="absolute top-0 left-0 w-full h-full border-0 rounded-lg"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
