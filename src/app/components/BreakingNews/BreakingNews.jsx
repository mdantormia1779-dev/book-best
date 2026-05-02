"use client";
import React from "react";
import Marquee from "react-fast-marquee";

const news = [
  { id: 1, title: "New Arrivals: Atomic Habits এখন available!" },
  { id: 2, title: "Special Offer: Membership এ 20% Discount " },
  { id: 3, title: "Top Reads: The Alchemist trending now!" },
  { id: 4, title: "Science Category তে নতুন বই যোগ হয়েছে " },
  { id: 5, title: "Borrow System এখন আরও faster " },
  { id: 6, title: "Tech Books Collection আপডেট করা হয়েছে " },
  { id: 7, title: "User Profile Update feature added " },
  { id: 8, title: "Story Books এখন সবচেয়ে বেশি পড়া হচ্ছে " },
];

const BreakingNews = () => {
  return (
    <div className="bg-linear-to-r from-blue-600 to-indigo-600 text-white">
      <div className="flex items-center gap-4 container mx-auto py-3 px-4">
        
        {/* Label */}
        <button className="btn btn-sm bg-pink-500 border-none text-white">
          New Arrivals
        </button>

        {/* Marquee */}
        <Marquee pauseOnHover={true} speed={60}>
          {news.map((data) => (
            <p key={data.id} className="mx-6 font-medium">
              {data.title}
            </p>
          ))}
        </Marquee>

      </div>
    </div>
  );
};

export default BreakingNews;