import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { faqs } from "../../config/constant";



const FAQ = ({home}) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };



  return (
    <section className="max-w-4xl mx-auto px-4 py-16">
      <h2 className="text-3xl text-center md:text-4xl font-semibold mb-4">
        Frequently Asked Questions
      </h2>
      <div className="flex justify-center items-center gap-2 mb-8">
        <div className="w-10 h-1 bg-cyan-400 rounded" />
        <div className="w-40 h-1 bg-cyan-400 rounded" />
      </div>
      <div className="">
{(home ? faqs.slice(0, 5) : faqs).map((faq, index) => (          <div
            key={index}
            className="border shadow-sm transition-all duration-300"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center text-left p-4"
            >
              <span className="text-gray-800 font-medium text-sm md:text-base">
                {faq.question}
              </span>
              {activeIndex === index ? (
                <FaMinus className="text-gray-600" />
              ) : (
                <FaPlus className="text-gray-600" />
              )}
            </button>
            {activeIndex === index && (
              <div className="px-4 pb-4 text-gray-600 text-sm md:text-base">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
