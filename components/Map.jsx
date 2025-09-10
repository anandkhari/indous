
"use client";

export default function Map() {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden mb-16 max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold text-teal-500 p-6 border-b font-['poppins']">
        Our Location
      </h2>
      <div className="h-80 md:h-96 w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.574089227038!2d76.2181895747314!3d10.347826092922865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7d0f7b6d8795f%3A0x3f68df5e7caa8561!2sLF%20Square%2C%20Near%20Chungath%20Jewellery%2C%20Tana%2C%20Irinjalakuda%2C%20Thrissur%2C%20Kerala%20690121!5e0!3m2!1sen!2sin!4v1694254321012!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="INDOUS Irinjalakuda Location"
        ></iframe>
      </div>
    </div>
  );
}
