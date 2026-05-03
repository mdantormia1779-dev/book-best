"use client";
import Image from "next/image";
import Link from "next/link";
import 'animate.css';

const Banner = () => {
  return (
    <div className="hero py-4 md:min-h-[80vh] bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse gap-10">
        
        {/* Image */}
        <div className="w-full lg:w-1/2 animate__animated animate__fadeInRight">
          <Image
            src="https://images.unsplash.com/photo-1512820790803-83ca734da794"
            alt="Books"
            width={600}
            height={400}
            className="rounded-xl shadow-lg w-full object-cover"
          />
        </div>

        {/* Text Content */}
        <div className="w-full lg:w-1/2 animate__animated animate__fadeInLeft">
          <h1 className="text-4xl md:text-5xl font-bold">
            {/* Find Your Next Read */}
          </h1>

          <p className="py-6 text-gray-600">
            Explore thousands of books across multiple categories.
            Borrow, read, and discover your next favorite book.
          </p>

          <Link href="/allbook">
            <button className="btn btn-primary">
              Browse Now
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Banner;