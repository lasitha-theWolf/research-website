import React, { useState } from "react";
import {
  FaChalkboardTeacher,
  FaEnvelope,
  FaFileAlt,
  FaFlagCheckered,
  FaGlobe,
  FaHome,
  FaInfoCircle,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <nav className="fixed bg-transparent py-6 px-6 top-0 z-50 backdrop-blur-lg">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img
            src="/logo.png"
            alt="Logo"
            className="h-20 w-auto transition-transform duration-300 hover:scale-110"
          />
        </div>

        {/* Navigation Links */}
        <div
          className={`${
            show ? "block" : "hidden"
          } md:flex md:items-center absolute md:static top-20 left-0 w-full md:w-auto bg-white/95 md:bg-transparent backdrop-blur-lg md:backdrop-blur-none shadow-xl md:shadow-none p-6 md:p-0 rounded-b-xl md:rounded-none transition-all duration-500 ease-in-out`}
        >
          <div className="flex flex-col md:flex-row md:space-x-10 space-y-6 md:space-y-0 text-gray-900">
            <a
              href="#Home"
              className="flex items-center space-x-3 text-xl font-semibold text-gray-900 hover:text-emerald-600 transition-all duration-300 group"
            >
              <FaHome className="h-5 w-5 text-emerald-500" />
              <span className="relative">
                Home
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-emerald-500 transition-all duration-300 group-hover:w-full" />
              </span>
            </a>
            <a
              href="#Domain"
              className="flex items-center space-x-3 text-xl font-semibold text-gray-900 hover:text-emerald-600 transition-all duration-300 group"
            >
              <FaGlobe className="h-5 w-5 text-emerald-500" />
              <span className="relative">
                Domain
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-emerald-500 transition-all duration-300 group-hover:w-full" />
              </span>
            </a>
            <a
              href="#Milestones"
              className="flex items-center space-x-3 text-xl font-semibold text-gray-900 hover:text-emerald-600 transition-all duration-300 group"
            >
              <FaFlagCheckered className="h-5 w-5 text-emerald-500" />
              <span className="relative">
                Milestones
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-emerald-500 transition-all duration-300 group-hover:w-full" />
              </span>
            </a>
            <a
              href="#Documents"
              className="flex items-center space-x-3 text-xl font-semibold text-gray-900 hover:text-emerald-600 transition-all duration-300 group"
            >
              <FaFileAlt className="h-5 w-5 text-emerald-500" />
              <span className="relative">
                Documents
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-emerald-500 transition-all duration-300 group-hover:w-full" />
              </span>
            </a>
            <a
              href="#Presentation"
              className="flex items-center space-x-3 text-xl font-semibold text-gray-900 hover:text-emerald-600 transition-all duration-300 group"
            >
              <FaChalkboardTeacher className="h-5 w-5 text-emerald-500" />
              <span className="relative">
                Presentations
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-emerald-500 transition-all duration-300 group-hover:w-full" />
              </span>
            </a>
            <a
              href="#OurTeam"
              className="flex items-center space-x-3 text-xl font-semibold text-gray-900 hover:text-emerald-600 transition-all duration-300 group"
            >
              <FaInfoCircle className="h-5 w-5 text-emerald-500" />
              <span className="relative">
                About Us
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-emerald-500 transition-all duration-300 group-hover:w-full" />
              </span>
            </a>
            <a
              href="#Contact"
              className="flex items-center space-x-3 text-xl font-semibold text-gray-900 hover:text-emerald-600 transition-all duration-300 group"
            >
              <FaEnvelope className="h-5 w-5 text-emerald-500" />
              <span className="relative">
                Contact Us
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-emerald-500 transition-all duration-300 group-hover:w-full" />
              </span>
            </a>
          </div>
        </div>

        {/* Hamburger Menu (Mobile) */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setShow(!show)}
            className="text-gray-900 hover:text-emerald-600 focus:outline-none transition-colors duration-300"
          >
            <GiHamburgerMenu className="h-8 w-8" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
