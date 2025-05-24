import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HomeCarouselSlides } from "../../config/constant";

// Custom Arrow components
const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow custom-next-arrow`}
      style={{ ...style, display: "block", right: "25px", zIndex: 10 }}
      onClick={onClick}
    />
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow custom-prev-arrow`}
      style={{ ...style, display: "block", left: "25px", zIndex: 10 }}
      onClick={onClick}
    />
  );
};

const HomeCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    cssEase: "linear",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    appendDots: (dots) => (
      <div style={{ position: "absolute", bottom: "30px", width: "100%" }}>
        <ul style={{ margin: "0px", padding: "0px", textAlign: "center" }}>
          {" "}
          {dots}{" "}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div className="custom-dot">
        {/* You can put numbers, or just keep it as a styled div */}
      </div>
    ),
  };

  return (
    <div className="w-full px-0 lg:mt-20 mt-10">
  <Slider {...settings}>
    {HomeCarouselSlides.map((slide, index) => (
      <div
        key={index}
        className="relative bg-white overflow-hidden rounded-none lg:rounded-3xl shadow-md px-4 md:px-10 py-10 w-full"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 max-w-screen-xl mx-auto">
          {/* Text Section */}
          <div className="text-center md:text-left space-y-4 px-2 sm:px-0">
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
              {slide.title}{" "}
              <span className="text-green-600">{slide.brand}</span>
            </h2>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
              {slide.description}
            </p>
            <button className="inline-block bg-yellow-600 hover:bg-yellow-500 text-white font-medium px-6 py-3 rounded-full shadow-lg transition-all duration-300">
              {slide.buttonText}
            </button>
          </div>

          {/* Image Section */}
          <div className="relative flex justify-center items-center h-[300px] sm:h-[400px] md:h-[500px] px-4">
            <div className="relative w-full max-w-md sm:max-w-lg md:max-w-xl group">
              {/* Background Glow */}
              <div className="absolute -inset-4 sm:-inset-6 bg-gradient-to-br from-yellow-900 to-yellow-800 rounded-full blur-2xl opacity-30 z-0" />

              {/* Background Image */}
              {/* <img
                src={slide.image2}
                alt="Secondary Visual"
                className="absolute top-5 left-5 w-3/4 sm:w-2/3 object-contain z-0 opacity-50 scale-110 blur-sm transition duration-300"
              /> */}

              {/* Foreground Image */}
              <div className="relative z-10 backdrop-blur-md p-4 rounded-3xl shadow-xl">
                <img
                  src={slide.image1}
                  alt="Main Visual"
                  className="w-full object-contain transform transition duration-500 group-hover:scale-105 rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    ))}
  </Slider>
</div>

  );
};

export default HomeCarousel;
