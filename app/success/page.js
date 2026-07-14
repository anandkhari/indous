"use client";
import { useState } from "react";

// Success stories data
const successStories = [
  {
    id: "s3S0hOJj4Ao",
    name: "George & Praneeth - Malaysia",
    description: "GEORGE & PRANEETH GOT MALAYSIA JOB 👍👍👍",
    thumbnail: "/malaysia.png",
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
  {
    id: "your-video-id5",
    name: "Arjun – Germany Masters",
    description: "Secured admission to top university with scholarship.",
    thumbnail: "/images/testimonial5.png",
  },
];

export default function Success() {
  const [modalVideo, setModalVideo] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageErrors, setImageErrors] = useState({});

  const openModal = (videoId) => {
    setModalVideo(videoId);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setModalVideo("");
    setIsModalOpen(false);
  };

  const handleImageError = (index) => {
    setImageErrors((prev) => ({ ...prev, [index]: true }));
  };

  return (
    <main className="w-full font-['roboto']">
      {/* Hero Section */}
      <section className="relative w-full py-16 md:py-20 font-['poppins']">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/326576/pexels-photo-326576.jpeg"
            alt="Success INDO-US Nexus"
            className="w-full h-full object-cover object-center filter brightness-75"
          />
        </div>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 flex items-center justify-center px-4 sm:px-6 lg:px-16">
          <div className="max-w-5xl text-center text-white">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold leading-tight mb-6">
              Success <span className="text-teal-400">stories</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="bg-gray-50 py-12 px-4 sm:px-6 md:px-10 font-['poppins']">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-10">
            Our Student <span className="text-teal-500">Success Stories</span>
          </h2>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {successStories.map((story, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-2xl overflow-hidden cursor-pointer hover:shadow-xl transition-shadow duration-300"
                onClick={() => openModal(story.id)}
              >
                <div className="relative">
                  {imageErrors[index] ? (
                    <div className="w-full h-48 sm:h-56 bg-gradient-to-r from-teal-400 to-blue-500 flex items-center justify-center">
                      <span className="text-white font-bold text-lg">
                        Success Story #{index + 1}
                      </span>
                    </div>
                  ) : (
                    <img
                      src={story.thumbnail}
                      alt={story.name}
                      className="w-full h-48 sm:h-56 object-cover"
                      onError={() => handleImageError(index)}
                    />
                  )}
                  {/* Play Icon Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
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
                <div className="p-4 sm:p-5">
                  <h3 className="font-semibold text-base sm:text-lg text-gray-800">
                    {story.name}
                  </h3>
                  <p className="text-sm text-gray-600 mt-2">
                    {story.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4 sm:p-6">
          <div className="bg-white rounded-2xl max-w-3xl w-full relative overflow-hidden">
            <button
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 bg-white rounded-full w-8 h-8 flex items-center justify-center z-10 shadow-md"
              onClick={closeModal}
            >
              &times;
            </button>
            <div className="aspect-video w-full">
              <iframe
                src={`https://www.youtube.com/embed/${modalVideo}?autoplay=1`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-t-2xl"
              ></iframe>
            </div>
            <div className="p-4 sm:p-5">
              <h3 className="font-semibold text-base sm:text-lg">
                {successStories.find((story) => story.id === modalVideo)?.name}
              </h3>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
