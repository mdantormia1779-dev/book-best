"use client";

import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import Navlink from "../Navlink/Navlink";
import avatar from "@/app/assets/user.png";
import { FaBookOpen, FaBars, FaTimes } from "react-icons/fa";
import { toast } from "react-toastify";
import 'animate.css';

const Navbar = () => {
  const { data } = authClient.useSession();
  const router = useRouter();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const user = data?.user;

  const handleLogout = async () => {
    try {
      await authClient.signOut();
      toast.success("Logged out successfully");
      router.push("/login");
      router.refresh();
    } catch (error) {
      toast.error("Logout failed");
    }
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="bg-white shadow-sm sticky top-0 z-50 animate__animated animate__fadeInDown">
      <div className="flex justify-between items-center container mx-auto px-4 py-4">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-xl md:text-2xl font-bold">
          <FaBookOpen className="text-blue-500" />
          <span>
            Book<span className="text-blue-500">Nest</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 font-medium">
          <Navlink href="/">Home</Navlink>
          <Navlink href="/allbook">All Books</Navlink>
          <Navlink href="/profile">My Profile</Navlink>
        </ul>

        {/* Right Section (Desktop) */}
        <div className="hidden md:flex items-center gap-3">

          {user && (
            <>
              <p className="font-medium">{user.name}</p>

              <Image
                className="rounded-full"
                src={user.image || avatar}
                alt="user"
                width={38}
                height={38}
              />
            </>
          )}

          {user ? (
            <button
              onClick={handleLogout}
              className="bg-blue-500 text-white px-4 py-1 rounded-lg hover:bg-blue-600"
            >
              Logout
            </button>
          ) : (
            <Link href="/login">
              <button className="bg-purple-500 text-white px-4 py-1 rounded-lg hover:bg-purple-600">
                Login
              </button>
            </Link>
          )}
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t px-4 py-4 space-y-4">

          {/* Nav Links */}
          <div className="flex flex-col gap-3">
            <div onClick={closeMenu}>
              <Navlink href="/">Home</Navlink>
            </div>

            <div onClick={closeMenu}>
              <Navlink href="/allbook">All Books</Navlink>
            </div>

            <div onClick={closeMenu}>
              <Navlink href="/profile">My Profile</Navlink>
            </div>
          </div>

          {/* User Section */}
          <div className="border-t pt-4 flex flex-col gap-3">

            {user && (
              <div className="flex items-center gap-2">
                <Image
                  className="rounded-full"
                  src={user.image || avatar}
                  alt="user"
                  width={35}
                  height={35}
                />
                <p className="font-medium">{user.name}</p>
              </div>
            )}

            {user ? (
              <button
                onClick={handleLogout}
                className="bg-blue-500 text-white w-full py-2 rounded-lg"
              >
                Logout
              </button>
            ) : (
              <Link href="/login">
                <button className="bg-purple-500 text-white w-full py-2 rounded-lg">
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