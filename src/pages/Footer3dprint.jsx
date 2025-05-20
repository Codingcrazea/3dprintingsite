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
    <footer className="w-full bg-[#1a1a1a]   py-10 px-6 rounded-t-3xl">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Logo & About */}
        <div>
          <Link to="/">
            <h1 className="text-3xl font-extrabold mb-3 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-200 bg-clip-text text-transparent  ">
              <img
                src="/GOPRINT3D.png"
                alt="Logo"
                className="rounded-full w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 object-cover"
              />            </h1>
          </Link>
          <p className=" text-sm leading-6 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-200 bg-clip-text text-transparent">
            Delivering high-quality and affordable 3D printing solutions for
            creators, businesses, and innovators across the globe.
          </p>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-lg font-semibold mb-3 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-200 bg-clip-text text-transparent">Company</h3>
          <ul className="space-y-2  text-sm bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-200 bg-clip-text text-transparent">
            <li ><Link to="/">Home</Link></li>
            <li ><Link to="/services">Our Services</Link></li>
            <li><Link to="/pricing">Pricing</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="">
          <h3 className="text-lg font-semibold mb-3 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-200 bg-clip-text text-transparent ">Contact</h3>
          <p className=" text-sm bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-200 bg-clip-text text-transparent">Indore, Madhya Pradesh</p>
          <p className=" text-sm bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-200 bg-clip-text text-transparent">Email: support@3dprinthub.com</p>
          <p className=" text-sm bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-200 bg-clip-text text-transparent">Phone: +91 9876543210</p>
        </div>

        {/* Newsletter & Social */}
        <div>
          <h3 className="text-lg font-semibold mb-3 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-200 bg-clip-text text-transparent ">Newsletter</h3>
          <form className="flex items-center border border-gray-500 rounded-lg overflow-hidden">
            <input
              type="email"
              placeholder="Your email"
              className="bg-transparent outline-none  px-3 py-2 w-full placeholder-gray-400 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-200 bg-clip-text text-transparent"
            />
            <button className=" px-4 py-2  font-semibold  bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-200 bg-clip-text text-transparent">
              Subscribe
            </button>
          </form>

          <div className="flex space-x-4 mt-5">
            <a href="#" className="bg-white text-black  p-2 rounded-full hover:opacity-80">
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

export default Footer3dd;
