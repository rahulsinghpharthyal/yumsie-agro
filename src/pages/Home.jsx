import React from "react";
import HomeCarousel from "../components/Home/HomeCarousel";
import WhoAreWe from "../components/Home/WhoAreWe";
import ManufacturingFacility from "../components/Home/ManufacturingFacility";
import OurServices from "../components/Home/OurServices";
import ProductCarousel from "../components/Home/ProductCarousel";
import FAQ from "../components/Home/FAQ";
import CertificateSection from "../components/Home/CertificateSection";
import BlogSection from "../components/Home/BlogSection";
import FullWidthImageCarousel from "../components/Home/FullWidthImageCarousel";
import { HomeCarouselSlides } from "../config/constant";

const Home = () => {
  return (
   <div className=" text-gray-800">
      {/* Hero or Carousel */}
      <section className="flex justify-center items-center">
        {/* <HomeCarousel /> */}
        <FullWidthImageCarousel images={HomeCarouselSlides}/>
      </section>

      <section className="px-6 md:px-8 lg:px-6 lg:mt-16">
        <ProductCarousel />
      </section>
      {/* Who Are We Section */}
      {/* <section className="px-4 md:px-8 lg:px-0">
        <WhoAreWe />
      </section> */}
      <section className="px-4 md:px-8 lg:px-0 lg:mt-16">
        <ManufacturingFacility  />
      </section>
      {/* <section className="px-4 md:px-8 lg:px-0 lg:mt-16">
        <OurServices  />
      </section> */}
      {/* <section className="px-4 md:px-8 lg:px-0 lg:mt-16">
        <FAQ home={true}/>
      </section> */}
      {/* <section className="px-4 md:px-8 lg:px-0 lg:mt-16">
        <CertificateSection/>
      </section> */}
      {/* <section className="px-4 md:px-8 lg:px-0 lg:mt-16">
        <BlogSection/>
      </section> */}
    </div>
  );
};

export default Home;
