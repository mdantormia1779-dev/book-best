
import Image from "next/image";
import React from "react";

// Book Card Component
const BookCard = ({ book }) => {
  console.log(book);
  return (
    <div className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition duration-300">
      <div className="flex justify-center items-center p-4">
        <div className="w-full h-96 relative">
          <Image
            className="rounded-lg object-cover"
            src={book.image_url}
            alt={book.title}
            fill
          />
        </div>
      </div>

      <div className="p-4">
        <h2 className="text-lg font-semibold">{book.title}</h2>
        <p className="text-sm text-gray-500">by {book.author}</p>


        <button className="mt-3 w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition">
          View Details
        </button>
      </div>
    </div>
  );
};

export default BookCard;