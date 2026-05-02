"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

const BookCard = ({ book }) => {
  const router = useRouter();
  const { data: session } = authClient.useSession();

  const handleView = () => {
    if (!session?.user) {
      // ❌ not logged in → go login
      router.push("/login");
    } else {
      // ✅ logged in → go details
      router.push(`/book/${book.id}`);
    }
  };

  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 
      shadow-sm hover:shadow-xl transition-all duration-300">

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

        {/*  Protected Button */}
        <button
          onClick={handleView}
          className="mt-4 w-full bg-blue-500 text-white text-center py-2 px-4 rounded-xl hover:bg-blue-600 transition-colors duration-200"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default BookCard;