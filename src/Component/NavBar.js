import React from "react";
import Search from "./../Asset/Image/Vector (4).png";
import wishlist from "./../Asset/Image/Wishlist.png";
import cart from "./../Asset/Image/Cart1.png";

export default function NavBar() {
  return (
    <div className="h-20 flex flex-row justify-between">
      <div className="p-7 text-3xl tracking-wide font-bold">
        <p>Exclusive</p>
      </div>
      <div className="p-7">
        <nav>
          <ul className="flex-row flex justify-between space-x-10">
            <li className="text-xl">
              <a href="/" className="hover:text-blue-500">
                Home
              </a>
            </li>
            <li className="text-xl">
              <a href="/contact" className="hover:text-blue-500">
                Contact
              </a>
            </li>
            <li className="text-xl">
              <a href="/about" className="hover:text-blue-500">
                About
              </a>
            </li>
            <li className="text-xl">
              <a href="/signup" className="hover:text-blue-500">
                Sign Up
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex items-center space-x-4 p-7">
        <div className="relative">
          <input
            type="text"
            placeholder="What are you looking for"
            className="pl-4 pr-10 py-2 border border-gray-300 rounded-xl focus:outline-none bg-gray-100"
          />
          <img
            src={Search}
            alt="Search"
            className="w-6 h-6 absolute right-3 top-1/2 transform -translate-y-1/2"
          />
        </div>
        <img src={wishlist} className="w-10 h-10" alt="Wishlist" />
        <img src={cart} className="w-10 h-10" alt="Cart" />
      </div>
    </div>
  );
}
