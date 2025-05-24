import React from "react";
import certificateImage from "../../assets/YumsieProducts/IMG_0007.JPG"; // replace with your image path
import backgroundImage from "../../assets/Background.jpeg"; // Update with your image path

import { Link } from "react-router-dom";

const CertificateSection = () => {
  return (
    <section   style={{ backgroundImage: `url(${backgroundImage})` }}
      className="bg-cover bg-center bg-no-repeat py-12 px-4 md:px-8 lg:px-16 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        {/* Image */}
        <div className="flex-1 flex justify-center">
          <div className="shadow-xl rounded-xl overflow-hidden">
            <img
              src={certificateImage}
              alt="certificate"
              className="w-full max-w-md object-contain"
            />
          </div>
        </div>

        {/* Text content */}
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4">
            Validated and certified
          </h2>
          <div className="flex items-center gap-2 mb-8">
            <div className="w-20 h-1 bg-cyan-400 rounded" />
            <div className="w-40 h-1 bg-cyan-400 rounded" />
          </div>
          <p className="text-gray-600 leading-relaxed mb-12">
            We are the only manufacturing facility in entire north India
            validated and certified by agencies around the world for our
            technologically advanced processing unit along with the Fssc22000
            certificate awarded to us for ticking off every point under the GMP
            (Good Manufacturing Practices) Guidelines.
          </p>
          <Link to="/about-us" className="bg-cyan-600 hover:bg-cyan-700 text-xl text-white px-10 py-6  rounded-full transition">
            KNOW MORE
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CertificateSection;
