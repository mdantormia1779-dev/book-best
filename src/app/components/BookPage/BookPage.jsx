"use client";
import React, { useEffect, useState } from "react";
import BookCard from "../BookCard/BookCard";
import { FaBookmark, FaCrown } from "react-icons/fa6";
import PopularCategory from "../PopularCategory/PopularCategory";


const BookPage = () => {
  const [book, setBook] = useState([]);

  useEffect(() => {
    fetch("/book.json")
      .then((res) => res.json())
      .then((data) => setBook(data));
  }, []);

  return (
    <div className="p-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {book.slice(0, 4).map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
      <div className="py-10 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Card 1 */}
          <div className="flex items-start gap-5 bg-white shadow-md hover:shadow-xl transition-all duration-300 rounded-xl p-6 border border-gray-100">
            <div className="p-3 bg-blue-100 rounded-full">
              <FaBookmark className="text-3xl text-blue-600" />
            </div>

            <div>
              <h1 className="font-bold text-xl text-gray-800 mb-2">
                Why Join BookNest
              </h1>
              <p className="text-gray-600 leading-relaxed text-sm">
                Access a wide range of books with an easy-to-use interface and enjoy seamless reading opportunities anytime, anywhere.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex items-start gap-5 bg-white shadow-md hover:shadow-xl transition-all duration-300 rounded-xl p-6 border border-gray-100">
            <div className="p-3 bg-blue-100 rounded-full">
              <FaCrown className="text-4xl text-yellow-500" />
            </div>

            <div>
              <h1 className="font-bold text-xl text-gray-800 mb-2">
                Why Choose BookNest
              </h1>
              <p className="text-gray-600 leading-relaxed text-sm">
                Discover thousands of books across different categories. Enjoy smooth navigation, fast access, and a modern digital reading experience built for everyone.
              </p>
            </div>
          </div>

        </div>
      </div>
      <PopularCategory></PopularCategory>
    </div>
  );
};

export default BookPage;