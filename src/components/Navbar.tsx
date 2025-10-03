import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full bg-gray-900 text-white px-6 py-3 flex justify-between items-center">
      <div className="text-xl font-bold">
        <Link href="/">Next js</Link>
      </div>

      <div className="flex space-x-6">
        <Link href="/products" className="hover:text-gray-300">
          Products
        </Link>
        <Link href="/about" className="hover:text-gray-300">
          About
        </Link>
        <Link href="/contact" className="hover:text-gray-300">
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
