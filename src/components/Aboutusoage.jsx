import React from 'react';
import Topmenu from './topmenu';
import Foot from "../pages/Footer3dprint";







function About() {
  return (
    <>
      <Topmenu />

      {/* Hero Section */}
      <div className="relative w-full h-72 md:h-96 lg:h-[32rem] overflow-hidden">
        <img
          src="/images/3d-hero.jpg" // Replace with your image path
          alt="3D Printing Banner"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-purple-700 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold text-center px-4">
            Welcome to Smart 3D Prints
          </h1>
        </div>
      </div>

      {/* About Content */}
      <div className="max-w-6xl mx-auto px-4 py-10 space-y-6 text-gray-700">
        <h2 className="text-3xl font-bold text-gray-800">About Us</h2>
        <p>
          At <span className="font-semibold">Smart 3D Prints</span>, we turn your imagination into reality using cutting-edge 3D printing technology. Whether you're a designer, architect, engineer, or hobbyist — we offer high-quality models that bring your ideas to life.
        </p>
        <p>
          We specialize in customized 3D solutions including prototypes, miniatures, mechanical parts, art pieces, and personalized gifts. With a strong focus on precision, quality, and sustainability, we aim to deliver excellence with every print.
        </p>
        <p>
          Our mission is simple — to make 3D printing accessible, affordable, and awesome for everyone.
        </p>

        <div className="mt-10 gap-4 flex flex-wrap md:col-auto sm:col-auto lg:col-auto  justify-center items-start ">
          <img
            src="/3dmodelimageprinter.png" // Optional extra image
            alt="3D printing work"
            className="rounded-xl shadow-lg  object-cover max-h-[400px] mx-auto"
          />
           <img
            src="/3dmodelimageprinter.png" // Optional extra image
            alt="3D printing work"
            className="rounded-xl shadow-lg  object-cover max-h-[400px] mx-auto"
          />
        </div>
      </div>

      <Foot />
    </>
  );
}

export default About;
