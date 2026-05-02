"use client";

import React, { useEffect, useState } from "react";
import BookCard from "../components/BookCard/BookCard";
import { FaSearch } from "react-icons/fa";

const AllBooks = () => {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  useEffect(() => {
    fetch("/book.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  // Filter logic
  const filteredBooks = books.filter((book) => {
    const matchCategory =
      category === "All" ? true : book.category === category;

    const matchSearch = book.title
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchCategory && matchSearch;
  });

  const categories = ["All", "Story", "Tech", "Science"];

  return (
    <div className="container mx-auto px-4 py-10">

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">

        <h1 className="text-3xl font-extrabold text-gray-800">
          All Books
        </h1>

        {/* Search */}
        <div className="relative w-full md:w-80">
          <FaSearch className="absolute top-3 left-3 text-gray-400" />
          <input
            type="search"
            placeholder="Search books..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border rounded-xl focus:ring-2 focus:ring-blue-400"
          />
        </div>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-3 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`px-4 py-2 btn border text-sm font-medium transition
              ${
                category === cat
                  ? "bg-blue-500 text-white border-blue-500"
                  : "hover:bg-blue-500 hover:text-white"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Books Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))
        ) : (
          <p className="text-gray-500 col-span-full text-center">
            No books found 😢
          </p>
        )}
      </div>

    </div>
  );
};

export default AllBooks;