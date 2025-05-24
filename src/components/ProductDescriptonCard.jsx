import React from 'react';
import {Link} from 'react-router-dom';

const ProductDescriptonCard = ({ heading, subheading, description, pastes, images }) => {
  return (
     <section className="w-full text-center py-12 px-4 md:px-20 mt-14">
      {/* Banner */}
      <div className="relative w-full">
        <img
          src={images.banner}
          alt="Banner"
          className="w-full h-64 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-lime-300 via-lime-200 to-white/10 flex flex-col justify-center items-center text-green-900 font-bold text-3xl md:text-5xl p-4">
          <p>{heading}</p>
          <p className="text-red-700 italic text-2xl md:text-3xl">{subheading}</p>
        </div>
      </div>

      {/* Content */}
      <div className="mt-10 max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">COOKING PASTE</h2>
        <p className="text-gray-700 mb-6">{description}</p>
        <ul className="text-left text-gray-800 space-y-4">
          {pastes.map((paste, idx) => (
            <li key={idx}>
              <strong>{paste.title}:</strong> {paste.text}
            </li>
          ))}
        </ul>
      </div>

      {/* Images */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
        {images.items.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`Paste ${idx + 1}`}
            className="rounded-xl shadow-lg object-cover w-full h-64"
          />
        ))}
      </div>

      {/* Button */}
      <div className="mt-10">
        <Link to="/contact-us" className="bg-cyan-600 text-xl hover:bg-cyan-700 text-white font-medium px-14 py-6 rounded-4xl shadow transition-all hover:cursor-pointer">
          Contact Us
        </Link>
      </div>
    </section>
  )
}

export default ProductDescriptonCard
