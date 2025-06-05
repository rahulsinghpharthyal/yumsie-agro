import React from 'react';
import LazyImage from '../components/common/LazyImage';
// import horecaImage from '../assets/horeca-banner.png'; // Replace with actual banner image path
import { Link } from 'react-router-dom';

const Horeca = () => {
  return (
    <section className="w-full bg-white text-gray-800">

      {/* Banner Section */}
      <div className="relative w-full overflow-hidden transform transition-all duration-500 hover:scale-[1.01]">
        {/* <LazyImage
          src={horecaImage}
          alt="TOPS Horeca Banner"
          className="w-full h-72 object-cover md:h-96 lg:h-[500px]"
          priority={true}
        /> */}
         <div className="absolute inset-0 bg-gradient-to-r from-lime-400/80 via-lime-300/70 to-white/30 flex flex-col justify-center items-center p-6 text-white text-shadow-lg">
          <h1 className="font-extrabold text-4xl md:text-6xl lg:text-7xl drop-shadow-md animate-fade-in-down">
            Horeca
          </h1>
          <p className="italic text-2xl md:text-4xl lg:text-5xl mt-3 drop-shadow-md animate-fade-in-up">
            descipiton
          </p>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-lime-400/80 via-lime-300/70 to-white/30 flex flex-col justify-center items-center p-6 text-white text-shadow-lg">
          <h1 className="font-extrabold text-4xl md:text-6xl lg:text-7xl drop-shadow-md animate-fade-in-down">
            TOPS HORECA
          </h1>
          <p className="italic text-2xl md:text-4xl lg:text-5xl mt-3 drop-shadow-md animate-fade-in-up">
            Quality, Quantity & Price for your Business
          </p>
        </div>
      </div>

      {/* Overview Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Overview
            </h2>
            <div className="w-24 h-1 bg-cyan-600 mx-auto mb-10"></div>
            <p className="text-lg text-gray-600">
              The Indian Food, Drink and Hospitality industry is known to be dynamic, diverse, and extremely fast paced.
              With a population of over 1 billion, a rising middle class and increased spending power of consumers,
              the India of today is indeed an economic powerhouse.
            </p>
          </div>
        </div>
      </section>

      {/* HORECA Section */}
      <section className="py-10 md:py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Horeca (Hotel-Restaurant-Catering)
            </h2>
            <div className="w-24 h-1 bg-cyan-600 mx-auto mb-10"></div>
            <p className="text-lg text-gray-600">
              G.D. Foods Mfg. (I) Private Limited, known by its brand name "TOPS", has expanded its operations in the HORECA segment.
              TOPS offers a wide range of products in bulk packs to fulfill the need of Hotels, Restaurants, Cafe & Caterers along with
              a unique combination of Quality, Quantity and Price.
            </p>
          </div>
        </div>
      </section>

      {/* Why Should Companies Choose Us */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Should Companies Choose Us?
            </h2>
            <div className="w-24 h-1 bg-cyan-600 mx-auto"></div>
          </div>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-4 md:px-8 py-10 items-start">
            <div>
              <p className="mb-4 text-gray-700 leading-relaxed">
                <strong>We add taste to your business</strong><br />
                With over 180 SKUs, TOPS is a one-stop solution for HORECA requirements.
              </p>
              <p className="mb-4 text-gray-700 leading-relaxed">
                Since 1987, TOPS has grown to become one of the leading names in the FMCG industry in the processed food product segment of India.
                With a focus on innovation and efficiency, our dedicated HORECA team will simplify your execution through our quality products.
              </p>
              <p className="text-gray-700 leading-relaxed">
                From product packaging to logistics, we provide economical solutions to help you grow.
                Our portfolio is designed specifically to cater to HORECA needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why "TOPS" Products */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why "TOPS" Products?
            </h2>
            <div className="w-24 h-1 bg-cyan-600 mx-auto"></div>
          </div>
          <div className="max-w-5xl mx-auto text-center px-4 md:px-8 pb-12">
            <ul className="text-lg text-gray-700 leading-relaxed list-disc list-inside text-left max-w-3xl mx-auto">
              <li>Trusted by the industry with quality products for over 35 years.</li>
              <li>Pan India presence for effective delivery of products.</li>
              <li>Wide product basket: from Single Server to Tabletop to Bulk Packs.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 flex justify-center items-center bg-gray-50">
        <Link
          to="/contact-us"
          className="text-center text-xl bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium px-10 py-6 rounded-4xl shadow transition-all border border-gray-300"
        >
          Get in Touch
        </Link>
      </section>
    </section>
  );
};

export default Horeca;
