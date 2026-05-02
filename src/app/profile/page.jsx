"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useEffect } from "react";

const ProfilePage = () => {
  const { data, isPending } = authClient.useSession();
  const router = useRouter();

  const user = data?.user;

  //  redirect if not logged in
  useEffect(() => {
    if (!isPending && !user) {
      router.push("/login");
    }
  }, [user, isPending, router]);

  //  loading state
  if (isPending) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-gray-500">Loading profile...</p>
      </div>
    );
  }

  //  not logged in (fallback UI)
  if (!user) {
    return (
      <div className="flex flex-col justify-center items-center h-screen gap-4">
        <p className="text-red-500 font-semibold">
          User not logged in
        </p>

        <button
          onClick={() => router.push("/login")}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg"
        >
          Go to Login
        </button>
      </div>
    );
  }

  //  logged in → show profile
  return (
    <div className="bg-gray-100 min-h-screen p-6 md:p-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-12 gap-6">

          {/* 👤 Left Sidebar */}
          <div className="col-span-12 md:col-span-3 bg-white p-6 rounded-2xl shadow">
            <div className="flex flex-col items-center">

              <Image
                src={user.image || "/user.png"}
                alt="profile"
                width={96}
                height={96}
                className="rounded-full"
              />

              <h1 className="font-bold mt-4 text-lg">
                {user.name}
              </h1>

              <p className="text-gray-500 text-sm">
                {user.email}
              </p>
            </div>
          </div>

          {/* 📖 Middle Section */}
          <div className="col-span-12 md:col-span-6 bg-white p-6 rounded-2xl shadow">

            <h1 className="text-xl font-bold mb-4">
              Profile Information
            </h1>

            <hr className="mb-4" />

            <div className="space-y-4">

              <div>
                <p className="text-gray-500 text-sm">User ID</p>
                <p className="font-medium">{user.id}</p>
              </div>

              <div>
                <p className="text-gray-500 text-sm">Name</p>
                <p className="font-medium">{user.name}</p>
              </div>

              <div>
                <p className="text-gray-500 text-sm">Email</p>
                <p className="font-medium">{user.email}</p>
              </div>

              <div>
                <p className="text-gray-500 text-sm">Member Since</p>
                <p className="font-medium">
                  {user.createdAt
                    ? new Date(user.createdAt).toDateString()
                    : "N/A"}
                </p>
              </div>

              <div>
                <p className="text-gray-500 text-sm">Total Borrowed Books</p>
                <p className="font-medium">5</p>
              </div>

            </div>

            <button className="mt-6 w-full py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition">
              Update Information
            </button>
          </div>

          {/*  Right Section */}
          <div className="col-span-12 md:col-span-3 bg-white p-6 rounded-2xl shadow">

            <h1 className="text-lg font-bold mb-4">
              Borrowed Books
            </h1>

            <p className="text-sm text-gray-500">
              No data connected yet (API pending)
            </p>

          </div>

        </div>
      </div>
    </div>
  );
};

export default ProfilePage;