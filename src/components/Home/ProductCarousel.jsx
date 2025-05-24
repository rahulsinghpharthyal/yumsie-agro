import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { ProductData } from "../../config/constant";

const ProductCarousel = () => {
  const settings = {
    infinite: true,
    centerMode: true,
    centerPadding: "0px",
    slidesToShow: 3,
    speed: 500,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 text-center">
      <h2 className="text-3xl md:text-4xl font-semibold mb-4">
        Premium Product's that Fit Your Lifestyle
      </h2>
      <div className="flex justify-center items-center gap-2 mb-8">
        <div className="w-10 h-1 bg-cyan-400 rounded" />
        <div className="w-40 h-1 bg-cyan-400 rounded" />
      </div>
      <p className="max-w-3xl mx-auto text-gray-700 mb-14">
        Hundreds of easy recipes crafted by dietitians. Here are a few samples:
      </p>

      <Slider {...settings}>
        {ProductData.map((recipe, index) => (
          <div key={index} className="slide-wrapper px-2">
            <div className="carousel-card relative overflow-hidden rounded-xl ">
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-[350px] object-contain rounded-xl"
              />
              <div className="absolute inset-0 bg-black/10 p-4 flex flex-col justify-between">
                <h3 className="text-green-500 text-lg font-bold">{recipe.title}</h3>
                {/* <div className="flex justify-between text-white text-sm mt-auto">
                  <span>{recipe.ingredients} ingredients</span>
                  <span>{recipe.time}</span>
                  <span>{recipe.calories}</span>
                </div> */}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductCarousel;
