import Image from "next/image";
import React from "react";

const BookCard = ({ book }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 
      shadow-sm hover:shadow-lg transition-all duration-300">

      {/* Image */}
      <div className="relative w-full h-96 overflow-hidden">
        <Image
          className="object-cover"
          src={book.image_url}
          alt={book.title}
          fill
        />
      </div>

      {/* Content */}
      <div className="p-5">
        <h2 className="text-lg font-semibold text-gray-800">
          {book.title}
        </h2>

        <p className="text-sm text-gray-500 mt-1">
          by {book.author}
        </p>

        {/* Button */}
        <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-xl 
          hover:bg-blue-600 transition-colors duration-200">
          View Details
        </button>
      </div>
    </div>
  );
};

export default BookCard;