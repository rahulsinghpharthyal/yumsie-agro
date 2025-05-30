import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';

const WhoAreWe = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const openVideo = () => setIsVideoOpen(true);
  const closeVideo = () => setIsVideoOpen(false);

  return (
    <div className="px-4 py-12 relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Video / Image Section */}
        <div className="relative group cursor-pointer" onClick={openVideo}>
          <img
            src="/who-we-are-thumb.jpg" // Replace with your actual thumbnail
            alt="About Yumsie Agro Foods"
            className="w-full rounded-lg shadow-lg object-cover aspect-video"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300 rounded-lg flex items-center justify-center">
            <div className="bg-white/90 group-hover:bg-white p-5 rounded-full shadow-lg transition-all duration-300 group-hover:scale-110">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-green-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M14.752 11.168l-5.197-3.027A1 1 0 008 9.027v5.946a1 1 0 001.555.832l5.197-3.027a1 1 0 000-1.664z" 
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Text Section */}
        <div className="text-center md:text-left">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">WHO ARE WE?</h2>
          <div className="w-60 h-1 bg-teal-400 mb-4 mx-auto md:mx-0"></div>
          <p className="text-gray-600 mb-10">
            Set-up in 2019, Yumsie Agro Foods is a trusted name in food manufacturing, delivering authentic Indian flavors with uncompromising quality. From pickles and sauces to pastes and preserves, we bring farm-fresh ingredients, time-tested recipes, and modern food tech to your table—nationwide.
          </p>
          {/* <Link to="/about-us" className="bg-orange-500 hover:bg-orange-600 text-xl text-white px-10 py-6 rounded-full font-semibold transition">
            ABOUT US
          </Link> */}
        </div>
      </div>

      {/* Video Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl mx-auto aspect-video bg-black rounded-lg overflow-hidden">
            <button 
              onClick={closeVideo}
              className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-all duration-300"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12" 
                />
              </svg>
            </button>
            <ReactPlayer
              url="/your-video-url.mp4" // Replace with your actual video URL
              width="100%"
              height="100%"
              playing={isVideoOpen}
              controls
              config={{
                file: {
                  attributes: {
                    controlsList: 'nodownload',
                    onContextMenu: e => e.preventDefault()
                  }
                }
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default WhoAreWe;
