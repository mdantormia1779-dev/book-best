"use client";

import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div>
        <div className="bg-gray-400 min-h-screen flex flex-col items-center justify-center text-center px-4">
      
      {/* 404 Text */}
      <h1 className="text-7xl font-extrabold text-primary mb-4">
        404
      </h1>

      {/* Message */}
      <h2 className="text-2xl font-semibold mb-2">
        Oops! Page Not Found
      </h2>

      <p className="text-gray-500 mb-6">
        The page you are looking for doesn’t exist or has been moved.
      </p>

      {/* Button */}
      <Link href="/">
        <button className="btn btn-primary px-6">
          Go Back Home
        </button>
      </Link>

    </div>
    </div>
  );
};

export default NotFoundPage;