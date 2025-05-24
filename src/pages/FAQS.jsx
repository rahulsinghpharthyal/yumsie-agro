import React from "react";
import FAQ from "../components/Home/FAQ";
import faqImage from "../assets/faq-banner-image.jpg";

const FAQS = () => {
  return (
    <>
      <section className="w-full px-4 md:px-8 lg:px-0 lg:mt-20">
        {/* Header Section */}
        <div className="relative w-full h-48 sm:h-64 md:h-96">
          <img
            src={faqImage}
            alt="About Us"
            className="object-fit w-full h-full"
          />
          {/* Optional overlay title */}
          {/* <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-6xl font-bold">ABOUT US</h1>
        </div> */}
        </div>
        <FAQ />
      </section>
    </>
  );
};

export default FAQS;
