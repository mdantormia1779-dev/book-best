import React from "react";
import { FaBookOpen, FaLaptopCode, FaFlask } from "react-icons/fa";

const PopularCategory = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      {/* Title */}
      <h1 className="text-3xl font-extrabold text-center mb-10 text-gray-800">
        Popular Categories
      </h1>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Story */}
        <div className="bg-white shadow-md hover:shadow-xl transition-all duration-300 rounded-xl p-6 text-center border">
          <div className="flex justify-center mb-4">
            <FaBookOpen className="text-5xl text-blue-500" />
          </div>
          <h2 className="text-xl font-bold text-gray-800 mb-2">Story</h2>
          <p className="text-gray-600 text-sm">
            Explore imaginative and inspiring story books for all ages.
          </p>
        </div>

        {/* Tech */}
        <div className="bg-white shadow-md hover:shadow-xl transition-all duration-300 rounded-xl p-6 text-center border">
          <div className="flex justify-center mb-4">
            <FaLaptopCode className="text-5xl text-green-500" />
          </div>
          <h2 className="text-xl font-bold text-gray-800 mb-2">Tech</h2>
          <p className="text-gray-600 text-sm">
            Learn modern technologies, programming, and innovation.
          </p>
        </div>

        {/* Science */}
        <div className="bg-white shadow-md hover:shadow-xl transition-all duration-300 rounded-xl p-6 text-center border">
          <div className="flex justify-center mb-4">
            <FaFlask className="text-5xl text-purple-500" />
          </div>
          <h2 className="text-xl font-bold text-gray-800 mb-2">Science</h2>
          <p className="text-gray-600 text-sm">
            Discover experiments, facts, and scientific knowledge.
          </p>
        </div>

      </div>
    </div>
  );
};

export default PopularCategory;