import React from "react";
import { FaBookOpen, FaLaptopCode, FaFlask } from "react-icons/fa";

const PopularCategory = () => {
  return (
    <div className="py-12 md:py-16 px-4 bg-gray-50">
      <div className="container mx-auto">

        {/* Title */}
        <h1 className="text-2xl md:text-4xl font-extrabold text-center mb-10 md:mb-12 text-gray-800">
          Popular Categories
        </h1>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

          {/* Story */}
          <div className="bg-white rounded-2xl p-6 md:p-8 text-center shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <FaBookOpen className="text-4xl md:text-5xl text-blue-500 mx-auto mb-4" />
            <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-2">
              Story
            </h2>
            <p className="text-gray-600 text-sm md:text-base">
              Explore imaginative and inspiring story books for all ages.
            </p>
          </div>

          {/* Tech */}
          <div className="bg-white rounded-2xl p-6 md:p-8 text-center shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <FaLaptopCode className="text-4xl md:text-5xl text-green-500 mx-auto mb-4" />
            <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-2">
              Tech
            </h2>
            <p className="text-gray-600 text-sm md:text-base">
              Learn modern technologies, programming, and innovation.
            </p>
          </div>

          {/* Science */}
          <div className="bg-white rounded-2xl p-6 md:p-8 text-center shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <FaFlask className="text-4xl md:text-5xl text-purple-500 mx-auto mb-4" />
            <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-2">
              Science
            </h2>
            <p className="text-gray-600 text-sm md:text-base">
              Discover experiments, facts, and scientific knowledge.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PopularCategory;