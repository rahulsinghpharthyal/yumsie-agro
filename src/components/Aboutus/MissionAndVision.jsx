import { FaBullseye, FaLightbulb } from "react-icons/fa";

const MissionAndVision = () => {
  return (
    <div className="w-full py-10 px-4 sm:px-6 lg:px-16">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-800 mb-4">
          Our Mission & Vision
        </h2>
        <div className="flex justify-center space-x-2 mb-6">
          <div className="w-10 h-1 bg-cyan-400 rounded"></div>
          <div className="w-24 h-1 bg-cyan-400 rounded"></div>
        </div>
        <p className="text-gray-600 text-base md:text-lg">
          At Yumsie, we blend tradition with innovation to bring premium quality
          food products to every Indian household.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Mission Card */}
        <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
          <div className="flex justify-center mb-4 text-green-600">
            <FaBullseye size={40} />
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">Our Mission</h3>
          <p className="text-gray-600 text-sm md:text-base">
            To consistently produce and deliver quality, and delicious food
            products using the finest ingredients, authentic recipes, and modern
            technology-while supporting farmers and ensuring timely delivery
            across India.
          </p>
        </div>

        {/* Vision Card */}
        <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
          <div className="flex justify-center mb-4 text-yellow-500">
            <FaLightbulb size={40} />
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">Our Vision</h3>
          <p className="text-gray-600 text-sm md:text-base">
            To become a trusted name in every Indian household , hotels ,
            restaurants and caterers by delivering authentic, flavorful, and
            high-quality food products -crafted with care and rooted in
            tradition.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MissionAndVision;
