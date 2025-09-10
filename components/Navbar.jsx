"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="bg-white shadow-lg sticky top-0 z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Left: Logo */}
            <div className="relative h-12 w-36">
              <Image
                src="/logo-bg.jpeg"
                alt="Logo"
                fill
                className="rounded-lg object-cover"
              />
            </div>

            {/* Center: Nav Links (Desktop) */}
            <div className="hidden lg:flex space-x-8 font-['Poppins']">
              <Link href="/" className="nav-link font-medium text-slate-700 hover:text-teal-600 py-2">
                Home
              </Link>
              <Link href="/aboutus" className="nav-link font-medium text-slate-700 hover:text-teal-600 py-2">
                About Us
              </Link>
              <Link href="/gallery" className="nav-link font-medium text-slate-700 hover:text-teal-600 py-2">
                Gallery
              </Link>
              <Link href="/contactus" className="nav-link font-medium text-slate-700 hover:text-teal-600 py-2">
               Contact Us
              </Link>
            </div>

            {/* Right: Contact Us Button (Desktop) */}
            <div className="hidden lg:flex">
              <Link
                href="/contactus"
                className="btn-primary text-white px-8 py-3 rounded-xl font-semibold shadow-lg"
              >
                Register Now
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-slate-700 p-2 rounded-lg hover:bg-teal-50 transition-colors"
              onClick={() => setIsOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

{/* Mobile Menu */}
<div
  className={`fixed top-0 left-0 w-full h-auto bg-white shadow-2xl z-50 p-6 transform transition-transform duration-300 ease-in-out lg:hidden ${
    isOpen ? "translate-y-0" : "-translate-y-full"
  }`}
>
  <div className="flex justify-between items-center mb-8">
    <span className="font-bold text-xl">Menu</span>
    <button
      className="text-slate-700 p-2"
      onClick={() => setIsOpen(false)}
    >
      <X className="w-6 h-6" />
    </button>
  </div>
  <nav className="space-y-2 font-['Poppins']">
    <Link href="/" className="block text-lg font-medium text-slate-700 hover:text-teal-600 py-3 border-b border-gray-100" onClick={() => setIsOpen(false)}>Home</Link>
    <Link href="/gallery" className="block text-lg font-medium text-slate-700 hover:text-teal-600 py-3 border-b border-gray-100" onClick={() => setIsOpen(false)}>Gallery</Link>
    <Link href="/aboutus" className="block text-lg font-medium text-slate-700 hover:text-teal-600 py-3 border-b border-gray-100" onClick={() => setIsOpen(false)}>About</Link>
    <Link href="contactus" className="block text-lg font-medium text-slate-700 hover:text-teal-600 py-3 border-b border-gray-100" onClick={() => setIsOpen(false)}>contact Us</Link>
    {/* <Link href="/co" className="block text-lg font-medium text-slate-700 hover:text-teal-600 py-3 border-b border-gray-100" onClick={() => setIsOpen(false)}>Contact Us</Link> */}
  </nav>
</div>


    </>
  );
}
