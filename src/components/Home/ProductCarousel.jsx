import React, { useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import LazyImage from "../common/LazyImage";
import { ProductData } from "../../config/constant";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

const ProductCarousel = () => {
  const swiperRef = useRef(null);

  const handlePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <section className="max-w-[1920px] mx-auto sm:px-6 py-20 sm:py-5 m-10 sm:m-0 overflow-hidden bg-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 font-semibold text-gray-800">
          Premium Products that Fit Your Lifestyle
        </h2>
        <div className="flex justify-center items-center gap-2 mb-8">
          <div className="w-20 sm:w-30 h-1 bg-cyan-400 rounded-full" />
          <div className="w-40 sm:w-60 h-1 bg-cyan-400 rounded-full" />
        </div>
        <p className="max-w-3xl mx-auto text-gray-600 text-lg px-4">
          Hundreds of easy recipes crafted by dietitians. Here are a few samples:
        </p>
      </div>

      <div className="relative product-carousel">
        <button
          onClick={handlePrev}
          className="absolute left-2 lg:left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full z-10 flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-white/20"
          aria-label="Previous slide"
        >
          <FaChevronLeft className="text-black text-xl" />
        </button>
        
        <button
          onClick={handleNext}
          className="absolute right-2 lg:right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full z-10 flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-white/20"
          aria-label="Next slide"
        >
          <FaChevronRight className="text-black text-xl" />
        </button>

        <Swiper
          ref={swiperRef}
          modules={[Navigation, Autoplay, EffectFade]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1536: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          speed={800}
          className="mySwiper"
        >
          {ProductData.map((product, index) => (
            <SwiperSlide key={index}>
                <Link to={product.link}>
              <div className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg">
                <LazyLoadImage
                  src={product.image}
                  alt={product.title}
                  className="w-full h-[300px] sm:h-[350px] object-fill will-change-transform"
                  loading="lazy"
                  />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 text-white">
                    {product.title}
                  </h3>
                  <div className="flex flex-wrap gap-3 text-sm">
                    {product.products && (
                      <span className="bg-white/20 px-3 py-1 rounded-full">
                        {product.products} products
                      </span>
                    )}
                    {/* {product.time && (
                      <span className="bg-white/20 px-3 py-1 rounded-full">
                        {product.time}
                      </span>
                    )}
                    {product.calories && (
                      <span className="bg-white/20 px-3 py-1 rounded-full">
                      {product.calories}
                      </span>
                      )} */}
                  </div>
                </div>
              </div>
                      </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ProductCarousel;
