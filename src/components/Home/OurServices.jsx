import React from "react";

import {
  FaMicrochip,
  FaIndustry,
  FaUtensils,
  FaShieldAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const services = [
  {
    icon: <FaMicrochip size={60} className="text-black" />,
    title: "3rd Party Manufacturing",
    description:
      "We manufacture and process food items in which we specialise for other companies who reach out to us.",
  },
  {
    icon: <FaIndustry size={60} className="text-white" />,
    title: "Private Label Manufacturing",
    description:
      "These custom manufactured products are then sent to the parent company to for branding.",
    bgColor: "bg-teal-400",
  },
  {
    icon: <FaUtensils size={60} className="text-black" />,
    title: "Food Processing",
    description:
      "A fully farm to home service. We manufacture pastes, pickles and preserves to enhance your culinary experience.",
    bgColor: "bg-yellow-400",
  },
  {
    icon: <FaShieldAlt size={60} className="text-white" />,
    title: "Safe and Hygenic Products",
    description:
      "An inbuilt quality control lab keep a check on the quality of the produced items at every step.",
    bgColor: "bg-sky-400",
  },
];

const OurServices = () => {
  return (
    <section className="py-16 px-4 md:px-8 text-center">
      <h2 className="text-3xl md:text-4xl font-semibold mb-4">Our Services</h2>
      <div className="flex justify-center items-center gap-2 mb-8">
        <div className="w-10 h-1 bg-cyan-400 rounded" />
        <div className="w-30 h-1 bg-cyan-400 rounded" />
      </div>
      <p className="max-w-3xl mx-auto text-gray-700 mb-14">
        Abiding by the statement, we aim to provide our customers with
        unparalleled services carried out by immense hard work and dedication.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col items-center px-4">
            <div
              className={`w-32 h-32 rounded-full flex items-center justify-center ${
                service.bgColor || "bg-gray-200"
              }`}
            >
              {service.icon}
            </div>
            <h3 className="text-lg font-semibold mt-6 mb-2 text-gray-800 text-center">
              {service.title}
            </h3>
            <p className="text-gray-600 text-sm text-center">
              {service.description}
            </p>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-4 flex-wrap">
        <Link to="/about-us" className="bg-black text-white px-10 py-6 text-xl  rounded-full hover:bg-gray-800 transition">
          More Info
        </Link>
        <Link to="/contact-us" className="bg-cyan-600 hover:bg-cyan-700 text-xl text-white px-10 py-6  rounded-full transition">
          Get Started!
        </Link>
      </div>
    </section>
  );
};

export default OurServices;