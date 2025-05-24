import React from "react";
// import ceepee from "../../assets/Yumsie data/IMG_0002.JPG";
// import hommade from "../../assets/Yumsie data/IMG_0003.JPG";
// import catchLogo from "../../assets/Yumsie data/IMG_0004.JPG";

const ClientSection = () => {
  return (
    //this is test
    <div className="max-w-6xl mx-auto px-4 pb-12 text-center">
  <h2 className="text-3xl md:text-5xl font-semibold text-gray-800 mb-4">
    Our Valuable Clients
  </h2>

  {/* Underline lines */}
  <div className="flex justify-center space-x-2 mb-8">
    <div className="w-20 h-1 bg-cyan-400 rounded"></div>
    <div className="w-28 h-1 bg-cyan-400 rounded"></div>
  </div>

  <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-6">
    {/* <img
      src={ceepee}
      alt="Cee Pee"
      className="h-16 md:h-24 object-contain w-auto max-w-[160px] flex-shrink-0"
    />
    <img
      src={hommade}
      alt="Hommade"
      className="h-16 md:h-24 object-contain w-auto max-w-[160px] flex-shrink-0"
    />
    <img
      src={catchLogo}
      alt="Catch"
      className="h-16 md:h-24 object-contain w-auto max-w-[160px] flex-shrink-0"
    /> */}
  </div>
</div>

  );
};

export default ClientSection;
