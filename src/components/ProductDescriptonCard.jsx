import React from 'react';
import {Link} from 'react-router-dom';

const ProductDescriptonCard = ({ heading, subheading, description, products, images }) => {
  return (
     <section className="w-full text-center pb-12 bg-gray-50">
      {/* Hero Banner Section */}
      <div className="relative w-full overflow-hidden transform transition-all duration-500 hover:scale-[1.01]">
        <img
          src={images.banner}
          alt={heading}
          className="w-full h-72 object-cover md:h-96 lg:h-[500px]"
          loading='lazy'
        />
        <div className="absolute inset-0 bg-gradient-to-r from-lime-400/80 via-lime-300/70 to-white/30 flex flex-col justify-center items-center p-6 text-white text-shadow-lg">
          <h1 className="font-extrabold text-4xl md:text-6xl lg:text-7xl drop-shadow-md animate-fade-in-down">
            {heading}
          </h1>
          <p className="italic text-2xl md:text-4xl lg:text-5xl mt-3 drop-shadow-md animate-fade-in-up">
            {subheading}
          </p>
        </div>
      </div>

      {/* Main Category Description Section */}
      <div className="mt-16 max-w-5xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-8 text-gray-800 relative inline-block group">
          <span className="relative z-10">{heading.toUpperCase()} CATEGORY</span>
        </h2>
        <p className="text-gray-700 leading-relaxed mb-8 text-lg md:text-xl max-w-3xl mx-auto">
          {description}
        </p>
      </div>

      {/* Individual Products Grid */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
        {products && products.map((product, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden transform transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl flex flex-col"
          >
            {product.images && product.images.length > 0 && (
              <div className="relative h-60 w-full overflow-hidden">
                <img
                  src={product.images[0]} // Display first image as a prominent one
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  loading='lazy'
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-xl md:text-2xl font-bold text-white text-shadow-sm">{product.title}</h3>
                </div>
              </div>
            )}
            <div className="p-6 flex flex-col flex-grow text-left">
              {product.description && (
                <p className="text-gray-600 mb-3 leading-relaxed flex-grow">{product.description}</p>
              )}
              {product.sizes && product.sizes.length > 0 && (
                <p className="text-gray-800 font-semibold mt-auto">
                  Available Sizes: <span className="text-lime-700 font-bold">{product.sizes.join(', ')}</span>
                </p>
              )}
              {/* Additional images in a smaller grid for more detail */}
              {product.images && product.images.length > 1 && (
                <div className="grid grid-cols-2 gap-2 mt-4">
                  {product.images.slice(1, 3).map((img, imgIdx) => ( // Show next two images
                    <img
                      key={imgIdx}
                      src={img}
                      alt={`${product.title} detail ${imgIdx + 2}`}
                      className="rounded-md w-full h-24 object-cover
                       shadow-sm transition-transform duration-200 hover:scale-105"
                       loading='lazy'
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action Button */}
      <div className="mt-16">
        <Link 
          to="/contact-us" 
          className="bg-cyan-600 text-white font-extrabold text-xl md:text-2xl px-16 py-6 rounded-full shadow-lg transition-all duration-300 hover:bg-cyan-700 hover:scale-105 transform inline-flex items-center justify-center tracking-wide"
        >
          Get in Touch
        </Link>
      </div>
    </section>
  )
}

export default ProductDescriptonCard
