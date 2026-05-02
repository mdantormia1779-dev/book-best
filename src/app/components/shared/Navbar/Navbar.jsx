"use client";

import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import Navlink from "../Navlink/Navlink";
import avatar from "@/app/assets/user.png";
import { FaBookOpen, FaBars, FaTimes } from "react-icons/fa";
import { toast } from "react-toastify";

const Navbar = () => {
  const { data } = authClient.useSession();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const user = data?.user;

  const handleLogout = async () => {
    try {
      await authClient.signOut();
      toast.success("Logged out successfully ");
      router.push("/login");
      router.refresh();
    } catch (error) {
      toast.error("Logout failed ");
    }
  };

  return (
    <div className="bg-white shadow-md">
      <div className="flex justify-between items-center container mx-auto px-4 py-4">

        {/*  Logo */}
        <Link href="/" className="flex items-center gap-2 text-xl md:text-2xl font-bold">
          <FaBookOpen className="text-blue-500" />
          <span>
            Book<span className="text-blue-500">Nest</span>
          </span>
        </Link>

        {/*  Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 font-semibold">
          <Navlink href="/">Home</Navlink>
          <Navlink href="/allbook">All Books</Navlink>
          <Navlink href="/profile">My Profile</Navlink>
        </ul>

        {/*  Right Section */}
        <div className="hidden md:flex items-center gap-3">

          {user && (
            <>
              <p className="font-medium">{user.name}</p>

              <Image
                className="rounded-full"
                src={user?.image || avatar}
                alt="User avatar"
                width={40}
                height={40}
              />
            </>
          )}

          {user ? (
            <button
              onClick={handleLogout}
              className="btn bg-blue-500 text-white px-4 py-1 rounded-lg"
            >
              Logout
            </button>
          ) : (
            <Link href="/login">
              <button className="btn bg-purple-500 text-white px-4 py-1 rounded-lg">
                Login
              </button>
            </Link>
          )}
        </div>

        {/*  Mobile Menu Button */}
        <button
          className="md:hidden text-xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/*  Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md px-4 pb-4 space-y-3 space-x-4">

          <Navlink href="/">Home</Navlink>
          <Navlink href="/allbook">All Books</Navlink>
          <Navlink href="/profile">My Profile</Navlink>

          <div className="border-t pt-3 flex flex-col gap-3">

            {user && (
              <div className="flex items-center gap-2">
                <Image
                  className="rounded-full"
                  src={user?.image || avatar}
                  alt="User avatar"
                  width={35}
                  height={35}
                />
                <p>{user.name}</p>
              </div>
            )}

            {user ? (
              <button
                onClick={handleLogout}
                className="btn bg-blue-500 text-white w-full"
              >
                Logout
              </button>
            ) : (
              <Link href="/login">
                <button className="btn bg-purple-500 text-white w-full">
                  Login
                </button>
              </Link>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;