"use client";

import Link from "next/link";
import React from "react";
import Image from "next/image";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import Navlink from "../Navlink/Navlink";
import avatar from "@/app/assets/user.png";
import { FaBookOpen } from "react-icons/fa";


const Navbar = () => {
  const { data } = authClient.useSession();
  const router = useRouter();

  const user = data?.user;

  const handleLogout = async () => {
    try {
      await authClient.signOut({
        fetchOptions: {
          onSuccess: () => {
            router.push("/login");
          },
        },
      });
    } catch (error) {
      console.error(error);
      alert("Logout failed");
    }
  };

  return (
    <div className="flex justify-between items-center container mx-auto py-4">
      <div className="flex items-center text-3xl gap-4">
        <FaBookOpen className="text-blue-500"/>
        <h1 className="text-3xl font-extrabold text-black">Book<span className="text-blue-500">Nest</span></h1>
      </div>
      {/* Nav links */}
      <ul className="flex items-center mx-auto space-x-5 font-bold">
        <Navlink href="/">Home</Navlink>
        <Navlink href="/about">All Books</Navlink>
        <Navlink href="/career">My Profile</Navlink>
      </ul>

      {/* Auth section */}
      <div className="flex items-center gap-4">

        <p className="font-bold">{user?.name}</p>

        <Image
          className="rounded-full"
          src={user?.image || avatar}
          alt="User avatar"
          width={50}
          height={50}
        />

        {user ? (
          <button
            onClick={handleLogout}
            className="btn bg-blue-500 text-white"
          >
            Logout
          </button>
        ) : (
          <Link href="/login">
            <button className="btn bg-purple-500 text-white">
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;