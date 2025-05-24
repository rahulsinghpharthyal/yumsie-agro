import React from 'react';
import { Link } from 'react-router-dom';

const WhoAreWe = () => {
  return (
    <div className="px-4 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Video / Image Section */}
        <div className="relative">
          <img
            src="/your-video-thumbnail.jpg" // Replace with your thumbnail or video still
            alt="Video Thumbnail"
            className="w-full rounded-lg shadow-lg"
          />
          <button className="absolute inset-0 flex items-center justify-center">
            <div className="bg-green-500 hover:bg-green-600 p-4 rounded-full shadow-lg transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-5.197-3.027A1 1 0 008 9.027v5.946a1 1 0 001.555.832l5.197-3.027a1 1 0 000-1.664z" />
              </svg>
            </div>
          </button>
        </div>

        {/* Text Section */}
        <div className="text-center md:text-left">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">WHO ARE WE?</h2>
          <div className="w-60 h-1 bg-teal-400 mb-4 mx-auto md:mx-0"></div>
          <p className="text-gray-600 mb-10">
            Set-up in 2019, Yumsie Agro Foods is a trusted name in food manufacturing, delivering authentic Indian flavors with uncompromising quality. From pickles and sauces to pastes and preserves, we bring farm-fresh ingredients, time-tested recipes, and modern food tech to your table—nationwide.
          </p>
          <Link to="/about-us" className="bg-orange-500 hover:bg-orange-600 text-xl text-white px-10 py-6 rounded-full font-semibold transition">
            ABOUT US
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WhoAreWe;
