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

            {/* Page Title */}
            <h1 className="text-3xl font-extrabold text-gray-800 mb-8">
                All Books
            </h1>

            {/* Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

                {/* Sidebar */}
                <div className="lg:col-span-1">
                    <div className="bg-white shadow-md rounded-xl p-5 sticky top-24">

                        <h2 className="text-lg font-bold mb-4 text-gray-800">
                            Categories
                        </h2>

                        <div className="flex flex-col gap-3">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setCategory(cat)}
                                    className={`px-4 py-2 rounded-lg border text-sm font-medium transition
                    ${category === cat
                                            ? "bg-blue-500 text-white border-blue-500"
                                            : "hover:bg-blue-500 hover:text-white"
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>

                    </div>
                </div>

                {/* Right Side Content */}
                <div className="lg:col-span-3">

                    {/* Search */}
                    <div className="mb-8 w-full">
                        <label className="flex items-center gap-2 w-full border rounded-md px-3 py-2 focus-within:ring-2 focus-within:ring-blue-400">

                            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <g
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                    strokeWidth="2.5"
                                    fill="none"
                                    stroke="currentColor"
                                >
                                    <circle cx="11" cy="11" r="8"></circle>
                                    <path d="m21 21-4.3-4.3"></path>
                                </g>
                            </svg>

                            <input
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                type="search"
                                placeholder="Search books..."
                                className="w-full outline-none bg-t"
                            />
                        </label>
                    </div>

                    {/* Books Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                        {filteredBooks.length > 0 ? (
                            filteredBooks.map((book) => (
                                <BookCard key={book.id} book={book} />
                            ))
                        ) : (
                            <p className="text-gray-500 col-span-full text-center py-10">
                                No books found
                            </p>
                        )}
                    </div>

                </div>

            </div>
        </div>
    );
};

export default AllBooks;