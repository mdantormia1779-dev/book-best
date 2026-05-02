import React from "react";
import { FaBook, FaFacebook, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-12">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Brand */}
          <div>
            <h1 className="text-2xl font-bold flex items-center gap-2">
              <FaBook className="text-blue-400" />
              BookNest
            </h1>
            <p className="text-gray-400 mt-3 text-sm leading-relaxed">
              Discover thousands of books across Story, Tech, and Science.
              Read anytime, anywhere with ease.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="hover:text-white cursor-pointer">Home</li>
              <li className="hover:text-white cursor-pointer">Books</li>
              <li className="hover:text-white cursor-pointer">Categories</li>
              <li className="hover:text-white cursor-pointer">About</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
            <div className="flex gap-4 text-xl">
              <FaFacebook className="hover:text-blue-500 cursor-pointer" />
              <FaTwitter className="hover:text-sky-400 cursor-pointer" />
              <FaInstagram className="hover:text-pink-500 cursor-pointer" />
              <FaGithub className="hover:text-gray-300 cursor-pointer" />
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} BookNest. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;