import React from "react";
import factoryImage from "../../assets/logo.jpg"; // Update with your image path
import backgroundImage from "../../assets/Background.jpeg"; // Update with your image path
import { Link } from "react-router-dom";

const ManufacturingFacility = () => {
  return (
    <section
      style={{ backgroundImage: `url(${backgroundImage})` }}
      className="bg-cover bg-center bg-no-repeat py-12 px-4 md:px-8 lg:px-16 relative overflow-hidden"
    >
      <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div className="relative z-10">
          <h2 className="text-3xl md:text-5xl font-semibold text-gray-800 mb-4">
            High-end manufacturing <br className="hidden md:block" /> facility
          </h2>

          {/* Underline lines */}
          <div className="flex space-x-2 mb-6">
            <div className="w-8 h-1 bg-cyan-400 rounded"></div>
            <div className="w-8 h-1 bg-cyan-400 rounded"></div>
          </div>

          <p className="text-gray-800 text-lg mb-6">
            We at Yumsie manufacture products with raw materials sourced
            directly from farms. We aim to provide our customers with a taste
            that is just like home.
          </p>

          <p className="text-gray-600 text-base">
            Situated in Rudrapur-Uttarakhand. Our state-of-the-art manufacturing
            plant spans 43,000 sq. ft. and is designed for efficiency, hygiene,
            and scale. With a current installed production capacity of 500 tons
            per month -- and the infrastructure to scale up to double we are
            ready to meet high-volume demands without compromising on quality
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-10 z-0">
            <Link
              to="/manufacturing-facility"
              className="text-center text-xl bg-cyan-600 hover:bg-cyan-700 text-white font-medium px-10 py-6 rounded-4xl shadow transition-all"
            >
              Learn More
            </Link>
            <Link
              to="/contact-us"
              className="text-center text-xl bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium px-10 py-6 rounded-4xl shadow transition-all border border-gray-300"
            >
              Get a Quote
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative">
          <img
            src={factoryImage}
            alt="Factory jars"
            className="w-full h-auto object-cover rounded-lg shadow-md"
            loading="lazy"
          />
        </div>
      </div>

      {/* Optional background patterns (like leaves) can be placed with absolute positioned elements */}
    </section>
  );
};

export default ManufacturingFacility;
