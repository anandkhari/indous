"use client";

import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/917994101243"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ y: 0 }}
      animate={{ y: [0, -15, 0] }} // subtle bounce for mobile
      transition={{ duration: 2, repeat: Infinity }}
      className="
  fixed bottom-4 right-4 
  sm:bottom-5 sm:right-5 
  bg-green-500 p-5 sm:p-6  /* increased padding */
  rounded-full shadow-lg z-50 
  flex items-center justify-center 
  text-white text-2xl sm:text-3xl  /* increased icon size */
  hover:scale-105 transition-transform
"
    >
      <FaWhatsapp />
    </motion.a>
  );
}
