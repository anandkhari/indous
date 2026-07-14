"use client";

import React, { useState } from "react";
import { 
  Calendar, 
  Users, 
  Moon, 
  CheckCircle2, 
  MapPin, 
  Star, 
  Search,
  Plane,
  Phone,
  Mail,
  MapPinned
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

// Complete dataset including the new Italy Package
const tourPackages = [
  {
    id: 1,
    title: "Discover the Beauty of Netherlands",
    category: "Europe",
    route: "Amsterdam → Rotterdam → The Hague",
    duration: "9 Days / 8 Nights",
    date: "20 Sep – 28 Sep 2026",
    travelers: "Group of 15 Travelers",
    price: "₹2,49,999",
    image: "/Neatherlands.jpeg",
    description: "Explore the charm of the Netherlands - a perfect blend of picturesque landscapes, rich history, vibrant cities and unforgettable experiences.",
    highlights: [
      "Amsterdam Canals & vibrant city life",
      "Zaanse Schans historic windmills & Dutch heritage",
      "Keukenhof Gardens (Seasonal tulip fields)",
      "Rotterdam modern architecture & skyline",
      "The Hague royal palaces & political capital"
    ],
    badge: "Featured Group Tour",
    includesFlight: true,
  },
  {
    id: 2,
    title: "Wonders of Italy: History, Art & Culture",
    category: "Europe",
    route: "Rome → Florence → Venice → Milan",
    duration: "8 Days / 7 Nights",
    date: "05 Oct – 12 Oct 2026",
    travelers: "Premium Group Tour",
    price: "₹2,30,000",
    image: "/indous.jpeg", // Replace with your public image path
    description: "Journey through the cradle of the Renaissance. Marvel at ancient monuments, world-class art masterpieces, scenic romantic canals, and dynamic fashion capitals.",
    highlights: [
      "Guided tour of the historic Roman Colosseum & Vatican City",
      "Explore the masterpieces of the Uffizi Gallery in Florence",
      "Romantic Gondola ride along the grand canals of Venice",
      "Marvel at the Duomo di Milano and high-end fashion hubs",
      "Authentic culinary experiences and Italian wine tasting tours"
    ],
    badge: "Popular Classic",
    includesFlight: true,
  },
  {
    id: 3,
    title: "Unforgettable Journey to Malaysia",
    category: "Asia",
    route: "Kuala Lumpur → Genting → Langkawi → Putrajaya",
    duration: "7 Days / 6 Nights",
    date: "29 Aug – 05 Sep 2026",
    travelers: "Group Tour",
    price: "₹79,999",
    image: "/malaysia.jpeg",
    description: "Experience the vibrant mix of modern cities, breathtaking landscapes, and warm hospitality. Celebrate this Onam with an unforgettable getaway.",
    highlights: [
      "Kuala Lumpur iconic landmarks & city life",
      "Genting Highlands thrilling rides & cool mountain air",
      "Langkawi beautiful beaches & islands",
      "Putrajaya stunning architecture & views",
      "Indulge in shopping, street food & more"
    ],
    badge: "Onam Special",
    includesFlight: true,
  },
  {
    id: 4,
    title: "Escape to Kashmir: Nature, Peace, Memories",
    category: "India",
    route: "Srinagar → Gulmarg → Pahalgam → Sonamarg",
    duration: "7 Days / 6 Nights",
    date: "15 Sep – 21 Sep 2026",
    travelers: "Family & Group Friendly",
    price: "₹16,999",
    image: "/kashmir.jpeg",
    description: "Serene valleys, snow-capped mountains, crystal-clear lakes and warm hospitality await you in Kashmir. Nature at its absolute best.",
    highlights: [
      "Dal Lake Shikara Ride & mesmerizing houseboats",
      "Mughal Gardens (Nishat, Shalimar & Chashme Shahi)",
      "Gulmarg Gondola Ride & snow adventures",
      "Pahalgam scenic valleys & Lidder River",
      "Sonamarg - The Meadow of Gold"
    ],
    badge: "Special Domestic",
    includesFlight: false,
  }
];

export default function ToursPage() {
  const [activeTab, setActiveTab] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [showEnquiryModal, setShowEnquiryModal] = useState(false);

  const categories = ["All", "Europe", "Asia", "India"];

  const filteredTours = tourPackages.filter((tour) => {
    const matchesCategory = activeTab === "All" || tour.category === activeTab;
    const matchesSearch = tour.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          tour.route.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header & Search Bar */}
        <div className="text-center mb-16">
          <span className="text-teal-600 font-bold tracking-wider uppercase text-sm font-['Poppins']">IndoUS Nexus Travels</span>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-2 mb-6 font-['Poppins']">
            Connecting Places, <span className="text-teal-600">Creating Memories</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-['Roboto'] mb-10">
            Curated premium international and domestic tour packages. Enjoy comfortable stays, delicious meals, expert tour guides, and 24/7 travel assistance.
          </p>

        

          {/* Category Filter Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                className={`px-5 py-2 rounded-full font-semibold font-['Poppins'] text-sm transition-all duration-300 ${
                  activeTab === category
                    ? "bg-teal-600 text-white shadow-md scale-105"
                    : "bg-teal-50 text-teal-700 hover:bg-teal-100"
                }`}
              >
                {category === "India" ? "India (Domestic)" : category}
              </button>
            ))}
          </div>
        </div>

        {/* Unified Horizontal Layout Stream */}
        <div className="space-y-12">
          <h2 className="text-2xl font-bold text-gray-900 font-['Poppins'] mb-8 border-b pb-4 border-gray-100">
            {activeTab === "All" ? "Highly Recommended Tour Packages" : `${activeTab} Tour Plans`}
          </h2>

          <AnimatePresence mode="popLayout">
            {filteredTours.map((tour) => (
              <motion.div
                layout
                key={tour.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-br from-teal-50/30 to-white rounded-2xl shadow-sm overflow-hidden flex flex-col lg:flex-row transition-all duration-300 hover:shadow-xl border border-gray-100"
              >
                {/* Image Section */}
                <div className="relative w-full lg:w-2/5 h-64 lg:h-auto min-h-[340px] bg-gray-200">
                  <Image
                    src={tour.image} 
                    alt={tour.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2 shadow-sm border border-teal-50">
                    <Star className="w-4 h-4 text-teal-600 fill-teal-600" />
                    <span className="text-xs font-bold text-gray-900 font-['Poppins'] tracking-wider">
                      {tour.badge.toUpperCase()}
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="w-full lg:w-3/5 p-8 lg:p-10 flex flex-col justify-center">
                  <div className="mb-6">
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 font-['Poppins'] mb-3">
                      {tour.title}
                    </h3>
                    <div className="flex items-center text-teal-600 font-medium font-['Roboto'] mb-4">
                      <MapPin className="w-5 h-5 mr-2 flex-shrink-0" />
                      <span>{tour.route}</span>
                    </div>
                    <p className="text-gray-600 leading-relaxed text-sm lg:text-base font-['Roboto']">
                      {tour.description}
                    </p>
                  </div>

                  {/* Logistics Meta Grid */}
                  <div className="flex flex-wrap items-center gap-4 mb-6">
                    <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm border border-teal-100 text-gray-700 text-sm font-medium font-['Roboto']">
                      <Calendar className="w-4 h-4 text-teal-600" />
                      {tour.date}
                    </div>
                    <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm border border-teal-100 text-gray-700 text-sm font-medium font-['Roboto']">
                      <Users className="w-4 h-4 text-teal-600" />
                      {tour.travelers}
                    </div>
                    <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm border border-teal-100 text-gray-700 text-sm font-medium font-['Roboto']">
                      <Moon className="w-4 h-4 text-teal-600" />
                      {tour.duration}
                    </div>
                  </div>

                  <hr className="border-gray-100 mb-6" />

                  {/* Dynamic Highlights List */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                    {tour.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-teal-500 flex-shrink-0" />
                        <span className="text-sm text-gray-700 font-['Roboto'] truncate">{item}</span>
                      </div>
                    ))}
                  </div>

                  <hr className="border-gray-100 mb-6" />

                  {/* Pricing and Call to Action Row */}
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mt-auto">
                    <div>
                      <div className="flex items-center gap-1.5 mb-1">
                        <p className="text-xs text-gray-500 font-['Roboto'] uppercase tracking-wider">Complete Package Price</p>
                        {tour.includesFlight && (
                          <span className="flex items-center gap-1 text-[10px] bg-teal-100 text-teal-800 px-2 py-0.5 rounded font-bold">
                            <Plane className="w-3 h-3" /> FLIGHT INCLUDED
                          </span>
                        )}
                      </div>
                      <p className="text-2xl lg:text-3xl font-bold text-gray-900 font-['Poppins']">
                        {tour.price} <span className="text-xs font-normal text-gray-600">per person onwards</span>
                      </p>
                    </div>
                    <div className="flex w-full sm:w-auto gap-3">
                      <button 
                        onClick={() => setShowEnquiryModal(true)}
                        className="flex-1 sm:flex-none px-6 py-3 rounded-xl bg-gradient-to-r from-teal-400 to-teal-600 text-white font-semibold font-['Poppins'] text-sm shadow-md transition hover:shadow-lg hover:scale-105"
                      >
                        Enquire Now
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Fallback Display */}
          {filteredTours.length === 0 && (
            <div className="text-center py-16">
              <p className="text-lg text-gray-500 font-['Roboto']">
                No custom itineraries found matching your parameters. Try searching for another country or region.
              </p>
            </div>
          )}
        </div>

      </div>

      {/* QUICK ENQUIRY MODAL */}
      <AnimatePresence>
        {showEnquiryModal && (
          <motion.div 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className="bg-white rounded-3xl max-w-lg w-full p-8 shadow-2xl relative overflow-hidden"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
            >
              <div className="text-center mb-6">
                <span className="text-xs font-bold text-teal-600 uppercase tracking-widest font-['Poppins']">Plan Your Dream Journey</span>
                <h3 className="text-2xl font-bold text-gray-900 font-['Poppins'] mt-1">Get In Touch With Our Experts</h3>
              </div>

              <div className="space-y-4 mb-6">
                <p className="text-gray-600 text-sm text-center leading-relaxed font-['Roboto']">
                  Speak to an IndoUS Nexus representative to block your seats, process your travel documents, or custom-tailor your vacation.
                </p>

                <div className="bg-teal-50/50 p-4 rounded-2xl space-y-3 border border-teal-100">
                  <div className="flex items-center gap-3 text-gray-700">
                    <Phone className="w-5 h-5 text-teal-600" />
                    <div className="font-['Roboto'] text-sm">
                      <p className="font-semibold">+91 79941 01243</p>
                      <p className="font-semibold">+91 77368 42242</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 text-gray-700 border-t border-teal-100/50 pt-3">
                    <Mail className="w-5 h-5 text-teal-600" />
                    <span className="font-['Roboto'] text-sm font-semibold">indousnexusllp@gmail.com</span>
                  </div>

                  <div className="flex items-start gap-3 text-gray-700 border-t border-teal-100/50 pt-3">
                    <MapPinned className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="font-['Roboto'] text-xs leading-relaxed">
                      XII/706/23, Little Flower School, SQUARE, Irinjalakuda, Kerala 680121
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <button 
                  onClick={() => setShowEnquiryModal(false)}
                  className="flex-1 py-3 border border-gray-200 rounded-xl text-gray-600 text-sm font-semibold hover:bg-gray-50 transition font-['Poppins']"
                >
                  Close
                </button>
                <a 
                  href="https://wa.me/917994101243" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex-1 py-3 bg-teal-600 hover:bg-teal-700 text-white text-sm font-semibold rounded-xl text-center transition font-['Poppins']"
                >
                  WhatsApp Now
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}