import ClientSection from "../components/Aboutus/ClientSection";
import aboutImage from "../assets/AboutUs.png";
import MissionAndVision from "../components/Aboutus/MissionAndVision";

const AboutUs = () => {
  return (
    <section className="w-full mt-30 md:mt-20">
      {/* Header Section */}
      <div className="relative w-full h-48 sm:h-64 md:h-96">
        <img
          src={aboutImage}
          alt="About Us"
          className="object-cover w-full h-full"
        />
        {/* Optional overlay title */}
        {/* <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <h1 className="text-white text-4xl md:text-6xl font-bold">ABOUT US</h1>
    </div> */}
      </div>

      {/* About Section */}
      <div className="max-w-6xl mx-auto px-4 py-10 sm:py-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-800 mb-4">
          About Us
        </h2>
        <div className="flex space-x-2 mb-6">
          <div className="w-10 h-1 bg-cyan-400 rounded"></div>
          <div className="w-24 h-1 bg-cyan-400 rounded"></div>
        </div>

        <p className="text-gray-700 text-base md:text-lg mb-4">
          Bringing Authentic Flavors from the Hills to Your Plate
        </p>

        <p className="text-gray-600 text-sm md:text-base mb-4">
          Established in 2019, Yumsie Agro Foods Private Limited is a
          fast-growing food manufacturing company based in Rudrapur,
          Uttarakhand. Surrounded by the rich agricultural lands of the
          Himalayan foothills, we source vegetables and fruits directly from
          nearby farms, ensuring quality in every product.
        </p>

        <p className="text-gray-600 text-sm md:text-base mb-4">
          From traditional Indian pickles made with our in-house spice blends,
          to creamy mayonnaise, flavorful sauces, and everyday essentials like
          ginger-garlic paste, tomato ketchup and tomato puree-our range is
          built to bring both taste and trust to your table. We are proud to
          serve customers pan India, with a growing distribution network and a
          commitment to quality that sets us apart.
        </p>

        <p className="text-gray-600 text-sm md:text-base mb-4">
          As a forward-thinking company, we are always looking for innovative
          ways to improve our processes and stay ahead of the competition. Our
          unwavering commitment to excellence, coupled with our passion for
          food, has made us a trusted partner in the food manufacturing
          industry.
        </p>
      </div>

      {/* Why Choose Us Section */}
      <div className="max-w-6xl mx-auto px-4 pb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-800 mb-4">
          Why Choose Us
        </h2>
        <div className="flex space-x-2 mb-6">
          <div className="w-20 h-1 bg-cyan-400 rounded"></div>
          <div className="w-32 h-1 bg-cyan-400 rounded"></div>
        </div>

        <p className="text-gray-700 text-base md:text-lg mb-4">
          Leading manufacturer in North India with Farm-fresh, artificial
          preservative-free and additive-free products made using "traditional
          India recipes" right from offered products. These numerous attributes
          make us a preferable partner for our brands:
        </p>

        <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm md:text-base">
          <li>Quality, freshness, and a real taste</li>
          <li>Free from any artificial additive</li>
          <li>Rich aroma & flavor</li>
          <li>Customer-focused production setup</li>
          <li>Hygiene standards</li>
          <li>Maintained at each level of production</li>
        </ul>
      </div>

      <MissionAndVision/>

      {/* Client Section Component */}
      {/* <ClientSection /> */}
    </section>
  );
};

export default AboutUs;
