import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer3dd = () => {
  return (
    <footer className="w-full bg-[#1a1a1a] text-white py-10 px-6 rounded-t-3xl">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Logo & About */}
        <div>
          <Link to="/">
            <h1 className="text-3xl font-extrabold mb-3 text-[#6A38C2]">
              3DPrintHub
            </h1>
          </Link>
          <p className="text-gray-400 text-sm leading-6">
            Delivering high-quality and affordable 3D printing solutions for
            creators, businesses, and innovators across the globe.
          </p>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-white">Company</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Our Services</Link></li>
            <li><Link to="/pricing">Pricing</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-white">Contact</h3>
          <p className="text-gray-400 text-sm">Indore, Madhya Pradesh</p>
          <p className="text-gray-400 text-sm">Email: support@3dprinthub.com</p>
          <p className="text-gray-400 text-sm">Phone: +91 9876543210</p>
        </div>

        {/* Newsletter & Social */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-white">Newsletter</h3>
          <form className="flex items-center border border-gray-500 rounded-lg overflow-hidden">
            <input
              type="email"
              placeholder="Your email"
              className="bg-transparent outline-none text-white px-3 py-2 w-full placeholder-gray-400"
            />
            <button className="bg-[#6A38C2] px-4 py-2 text-white font-semibold hover:bg-purple-800">
              Subscribe
            </button>
          </form>

          <div className="flex space-x-4 mt-5">
            <a href="#" className="bg-white text-black p-2 rounded-full hover:opacity-80">
              <FaFacebookF />
            </a>
            <a href="#" className="bg-white text-black p-2 rounded-full hover:opacity-80">
              <FaInstagram />
            </a>
            <a href="#" className="bg-white text-black p-2 rounded-full hover:opacity-80">
              <FaLinkedinIn />
            </a>
            <a href="#" className="bg-white text-black p-2 rounded-full hover:opacity-80">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      <hr className="border-gray-600 mt-10 mb-4" />
      <p className="text-center text-sm text-gray-400">
        © 2025 3DPrintHub. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer3dd ;
