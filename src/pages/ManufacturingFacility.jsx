import React from 'react';
import { Link } from 'react-router-dom';
import { FaLeaf, FaFlask, FaMortarPestle } from 'react-icons/fa';
import { MdScience, MdGroups } from 'react-icons/md';
import { GiWeightScale } from 'react-icons/gi';
import OurServices from '../components/Home/OurServices';

const ManufacturingFacility = () => {
  const facilities = [
    {
      icon: <FaLeaf className="w-8 h-8 text-cyan-600" />,
      title: "Fresh Procurement",
      description: "Sourcing fresh vegetables and fruits directly from nearby hill regions for the best quality ingredients."
    },
    {
      icon: <MdScience className="w-8 h-8 text-cyan-600" />,
      title: "In-House R&D Team",
      description: "Dedicated team working on recipe innovation and maintaining consistency across all products."
    },
    {
      icon: <FaMortarPestle className="w-8 h-8 text-cyan-600" />,
      title: "Custom Spice Blends",
      description: "Internally developed authentic spice blends that give our pickles their unique, traditional flavors."
    },
    {
      icon: <FaFlask className="w-8 h-8 text-cyan-600" />,
      title: "In-House Lab",
      description: "State-of-the-art laboratory for recipe control and comprehensive ingredient testing."
    },
    {
      icon: <MdGroups className="w-8 h-8 text-cyan-600" />,
      title: "Expert Teams",
      description: "Highly trained production and quality teams ensuring excellence in every batch."
    },
    {
      icon: <GiWeightScale className="w-8 h-8 text-cyan-600" />,
      title: "Production Capacity",
      description: "500 tons monthly capacity with infrastructure ready to scale up to 1000 tons."
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Raw Material Selection",
      description: "Fresh ingredients sourced from hill regions"
    },
    {
      number: "02",
      title: "Quality Testing",
      description: "Rigorous testing in our in-house lab"
    },
    {
      number: "03",
      title: "Processing & Blending",
      description: "Custom spice mixing and careful processing"
    },
    {
      number: "04",
      title: "Quality Control",
      description: "Multiple checks before final packaging"
    }
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-gradient-to-r from-green-100 to-green-300">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Our Manufacturing Facility
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
              A state-of-the-art 43,000 sq. ft. facility designed for efficiency, 
              hygiene, and scale, with a monthly production capacity of 500 tons
            </p>
          </div>
        </div>
      </section>

      {/* Facility Overview */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              World-Class Manufacturing Plant
            </h2>
            <div className="w-24 h-1 bg-cyan-600 mx-auto mb-10"></div>
            <p className="text-lg text-gray-600">
              Our manufacturing facility is designed to meet high-volume demands without 
              compromising on quality. With infrastructure ready to scale up to double our 
              current capacity, we're prepared for growth while maintaining our commitment 
              to excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Facility Features */}
      <section className="py-10 md:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Makes Us Stand Out
            </h2>
            <div className="w-24 h-1 bg-cyan-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="mb-4">{facility.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {facility.title}
                </h3>
                <p className="text-gray-600">{facility.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Quality-First Process
            </h2>
            <div className="w-24 h-1 bg-cyan-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="relative group"
              >
                <div className="bg-gray-50 p-6 rounded-lg group-hover:bg-cyan-50 transition-colors duration-300">
                  <span className="text-5xl font-bold text-cyan-600/20 group-hover:text-cyan-600/30 transition-colors duration-300">
                    {step.number}
                  </span>
                  <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

       <section className="px-4 md:px-8 lg:px-0 lg:mt-16">
        <OurServices />
      </section>

      {/* Quality Commitment */}
      <section className="bg-gradient-to-r from-cyan-600 to-cyan-700 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Commitment to Excellence
            </h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto">
              We follow strict food safety standards and quality checks at every step, 
              from raw material handling to final packaging—ensuring that every product 
              that leaves our facility is something we're proud to serve.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      {/* <section className="py-16 flex justify-center items-center bg-gray-50">
        <Link 
          to="/contact-us" 
          className="text-center text-xl bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium px-10 py-6 rounded-4xl shadow transition-all border border-gray-300"
        >
          Contact Us
        </Link>
      </section> */}
    </div>
  );
};

export default ManufacturingFacility; 