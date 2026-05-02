import React from "react";
import { FaBookOpen, FaLaptopCode, FaFlask } from "react-icons/fa";

const PopularCategory = () => {
  return (
    <div className="py-16 px-4">
      <div className="container mx-auto">

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-12 text-gray-800">
          Popular Categories
        </h1>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Story */}
          <div className="bg-white/80 backdrop-blur-md border border-gray-100 
            shadow-md hover:shadow-xl transition-all duration-300 
            rounded-2xl p-8 text-center">
            <FaBookOpen className="text-5xl text-blue-500 mx-auto mb-4" />
            <h2 className="text-xl font-bold text-gray-800 mb-2">Story</h2>
            <p className="text-gray-600 text-sm">
              Explore imaginative and inspiring story books for all ages.
            </p>
          </div>

          {/* Tech */}
          <div className="bg-white/80 backdrop-blur-md border border-gray-100 
            shadow-md hover:shadow-xl transition-all duration-300 
            rounded-2xl p-8 text-center">
            <FaLaptopCode className="text-5xl text-green-500 mx-auto mb-4" />
            <h2 className="text-xl font-bold text-gray-800 mb-2">Tech</h2>
            <p className="text-gray-600 text-sm">
              Learn modern technologies, programming, and innovation.
            </p>
          </div>

          {/* Science */}
          <div className="bg-white/80 backdrop-blur-md border border-gray-100 
            shadow-md hover:shadow-xl transition-all duration-300 
            rounded-2xl p-8 text-center">
            <FaFlask className="text-5xl text-purple-500 mx-auto mb-4" />
            <h2 className="text-xl font-bold text-gray-800 mb-2">Science</h2>
            <p className="text-gray-600 text-sm">
              Discover experiments, facts, and scientific knowledge.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PopularCategory;