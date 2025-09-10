import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram ,FaYoutube} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 w-full border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col items-center space-y-6">

        {/* Social Media */}
        <div className="flex gap-6 text-2xl text-white">
          <a href="#" className="hover:text-teal-500 transition-colors">
            <FaFacebookF />
          </a>
          <a href="#" className="hover:text-teal-500 transition-colors">
            <FaInstagram />
          </a>
          <a href="#" className="hover:text-teal-500 transition-colors">
            <FaLinkedinIn />
          </a>
          <a href="https://www.youtube.com/@indousnexus" className="hover:text-teal-500 transition-colors">
            <FaYoutube />
          </a>
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-wrap gap-8 text-base font-roboto font-medium">
          <li>
            <a href="#faq" className="hover:text-teal-500 hover:underline underline-offset-4 transition-colors">
              Home
            </a>
          </li>
          <li>
            <a href="#services" className="hover:text-teal-500 hover:underline underline-offset-4 transition-colors">
              Aboutus
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-teal-500 hover:underline underline-offset-4 transition-colors">
              Gallery
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-teal-500 hover:underline underline-offset-4 transition-colors">
              Contact us
            </a>
          </li>
          
        </ul>

        {/* Copyright */}
        <div className="text-sm text-gray-500 text-center">
          © 2025 INDO-US Nexus LLP | All Rights Reserved
        </div>
      </div>
    </footer>
  );
}
