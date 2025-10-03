"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="w-full bg-gray-900 text-white px-6 py-3 flex justify-between items-center">
      <div className="text-xl font-bold">
        <Link href="/">Next js</Link>
      </div>

      <div className="flex space-x-6">
        <Link href="/products" className={`${pathname === "/products" ? "text-blue-500 font-semibold underline" : "text-white hover:underline"}`}>
          Products
        </Link>
        <Link href="/posts" className={`${pathname === "/posts" ? "text-blue-500 font-semibold underline" : "text-white hover:underline"}`}>
          Posts
        </Link>
        <Link href="/gallery" className={`${pathname === "/gallery" ? "text-blue-500 font-semibold underline" : "text-white hover:underline"}`}>
          Gallery
        </Link>
        <Link href="/about" className={`${pathname === "/about" ? "text-blue-500 font-semibold underline" : "text-white hover:underline"}`}>
          About
        </Link>
        <Link href="/contact" className={`${pathname === "/contact" ? "text-blue-500 font-semibold underline" : "text-white hover:underline"}`}>
          Contact
        </Link>
        <Link href="/dashboard" className="hover:text-gray-300">
          Dashboard
        </Link>
        <Link href="/login" className="hover:text-gray-300">
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
