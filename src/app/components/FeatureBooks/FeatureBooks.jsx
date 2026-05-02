import React from "react";
import BookPage from "../BookPage/BookPage";

const FeaturedBooks = () => {
  return (
    <section className="container mx-auto my-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-extrabold">Featured Books</h1>

        <button className="btn text-blue-600 font-bold hover:underline">
          View All
        </button>
      </div>

      <BookPage />
    </section>
  );
};

export default FeaturedBooks;