"use client";

import { useState } from "react";
import { motion } from "framer-motion";

// Gallery images
const galleryImages = [
  { id: "g1", src: "/gallery1.jpeg", alt: "Gallery Image 1" },
  { id: "g2", src: "/gallery2.jpeg", alt: "Gallery Image 2" },
  { id: "g3", src: "/gallery3.jpeg", alt: "Gallery Image 3" },
];

// Success story videos
const successStories = [
  {
    id: "s3S0hOJj4Ao",
    name: "George & Praneeth - Malaysia",
    description: "GEORGE & PRANEETH GOT MALAYSIA JOB 👍👍👍",
    thumbnail: "/malaysia.png",
  },
  {
    id: "qBmgvj138AU",
    name: "Malta Shengen Visa Succes story",
    description: "Secured admission to top university with scholarship.",
    thumbnail: "malta.png",
  },
  {
    id: "0mgc0UWuxFk",
    name: "Wilfred - Italy",
    description: "CONGRATS WILFRED RECEIVED ITALY VISA 👍👍👍",
    thumbnail: "/wilfred.png",
  },
  {
    id: "3lX986eP7Uw",
    name: "Akshay – Japan Visa",
    description: "One of our clients Akshay reached Japan safely",
    thumbnail: "/akhsay.png",
  },
  {
    id: "OgI4pLHt9lk",
    name: "Anupama – Italy Visa",
    description: "ANUPAMA GOT ITALY CARE GIVER VISA 👍👍👍",
    thumbnail: "/anupama.png",
  },
];

export default function GalleryPage() {
  const [selectedItem, setSelectedItem] = useState(null);

  const openModal = (item) => setSelectedItem(item);
  const closeModal = () => setSelectedItem(null);

  // Merge videos first, then images
  const galleryItems = [
    ...successStories.map((vid) => ({ type: "video", ...vid })),
    ...galleryImages.map((img) => ({ type: "image", ...img })),
  ];

  // Motion variants
  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const itemVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <main className="w-full font-['poppins']">
      {/* Hero Section */}
      <section className="relative w-full py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/heroimage.jpeg"
            alt="Gallery Hero"
            className="w-full h-full object-cover object-center filter brightness-75"
          />
        </div>
        <div className="absolute inset-0 bg-black/40"></div>
        <motion.div
          className="relative z-10 flex items-center justify-center px-6 lg:px-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
        >
          <div className="max-w-4xl text-center text-white">
            <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight mb-6">
              Our <span className="text-teal-400">Gallery</span>
            </h1>
          </div>
        </motion.div>
      </section>

      {/* Gallery Grid */}
      <section className="relative bg-gray-50 py-16">
        <div className="container mx-auto px-6 lg:px-20">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            {galleryItems.map((item) => (
              <motion.div
                key={item.id}
                className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer"
                onClick={() => openModal(item)}
                variants={itemVariant}
                whileHover={{ scale: 1.03 }}
              >
                {item.type === "image" ? (
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-64 object-cover transition duration-500"
                  />
                ) : (
                  <div className="relative">
                    <img
                      src={item.thumbnail}
                      alt={item.name}
                      className="w-full h-64 object-cover transition duration-500"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="bg-white rounded-full p-3">
                        <svg
                          className="w-10 h-10 sm:w-12 sm:h-12 text-teal-600"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                )}
                {item.type === "video" && (
                  <div className="p-2 sm:p-3 bg-white text-center">
                    <h3 className="font-semibold text-sm sm:text-base text-gray-800">
                      {item.name}
                    </h3>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      {selectedItem && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4 sm:p-6"
          onClick={closeModal}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="relative max-w-3xl w-full">
            <button
              className="absolute top-3 right-3 text-white text-3xl z-10"
              onClick={closeModal}
            >
              &times;
            </button>

            {selectedItem.type === "image" ? (
              <motion.img
                src={selectedItem.src}
                alt={selectedItem.alt || "Gallery"}
                className="max-h-[90vh] w-full rounded-2xl shadow-xl"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
              />
            ) : (
              <motion.iframe
                src={`https://www.youtube.com/embed/${selectedItem.id}?autoplay=1`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="aspect-video w-full rounded-2xl shadow-xl"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
              ></motion.iframe>
            )}
          </div>
        </motion.div>
      )}
    </main>
  );
}
