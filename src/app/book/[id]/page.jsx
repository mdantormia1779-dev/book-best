"use client";

import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";

const DetailsPage = () => {
  const { id } = useParams();
  const router = useRouter();
  const [book, setBook] = useState(null);

  useEffect(() => {
    fetch("/book.json")
      .then((res) => res.json())
      .then((data) => {
        const singleBook = data.find((b) => b.id == id);
        setBook(singleBook);
      });
  }, [id]);

  if (!book)
    return (
      <div className="flex justify-center items-center h-screen bg-gray-50">
        <span className="loading loading-spinner loading-lg text-blue-500"></span>
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* 🔙 Back */}
      <div className="max-w-6xl mx-auto px-6 pt-8">
        <button
          onClick={() => router.push("/allbook")}
          className="flex items-center gap-2 text-blue-500 hover:underline font-medium"
        >
          <FaArrowLeft /> Back to All Books
        </button>
      </div>

      {/* 📦 Card */}
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="bg-white rounded-3xl shadow-lg p-6 md:p-10 grid md:grid-cols-2 gap-10 items-center">

          {/* 📸 Image Section */}
          <div className="bg-gray-100 rounded-2xl flex items-center justify-center h-125">
            <div className="relative w-full h-full p-6">
              <Image
                src={book.image_url}
                alt={book.title}
                fill
                className="object-contain rounded-xl hover:scale-100 transition-transform duration-300"
              />
            </div>
          </div>

          {/* 📖 Info Section */}
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
              {book.title}
            </h1>

            <p className="text-gray-500 mt-2 text-lg">
              by {book.author}
            </p>

            {/* Category */}
            <span className="inline-block mt-4 px-4 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
              {book.category}
            </span>

            {/* Description */}
            <p className="mt-6 text-gray-600 leading-relaxed">
              {book.description}
            </p>

            {/* Quantity */}
            <p className="mt-6 text-lg font-semibold text-green-600">
              {book.available_quantity} copies available
            </p>

            {/* Button */}
            <button
              disabled={book.available_quantity === 0}
              className={`mt-8 w-full py-3 rounded-xl text-white text-lg font-medium transition ${
                book.available_quantity === 0
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-500 hover:bg-blue-600 active:scale-95"
              }`}
            >
              {book.available_quantity === 0
                ? "Out of Stock"
                : "Borrow This Book"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;