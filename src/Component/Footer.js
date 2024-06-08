import React from "react";
import arrow from "./../Asset/Image/icon-send (1).png";

export default function Footer() {
  return (
    <div className="flex bg-slate-950 h-96 justify-around">
      <div className="flex flex-col py-20 space-y-6">
        <p className="text-3xl text-white">Exclusive</p>
        <p className="text-white text-2xl">Subscribe</p>
        <p className="text-white text-xl">Get 10% off on your First order</p>
        <div className="relative flex items-center">
          <input
            type="text"
            placeholder="What are you looking for"
            className="pl-4 pr-10 py-2 border border-gray-300  focus:outline-none bg-black"
          />
          <img
            src={arrow}
            alt="Search"
            className="w-6 h-6 absolute  left-52 top-1/2 transform -translate-y-1/2 placeholder-gray-400" 
          />
        </div>
      </div>
      <div className="flex flex-col py-20 space-y-8">
        <p className="text-3xl text-white">Support</p>
        <p className="text-white text-lg">d-119 vasundhara Ghaziabad</p>
        <p className="text-white text-lg">singhrnq231217@gmail.com</p>
        <p className="text-white  text-lg">9026679170</p>
      </div>
      <div className="flex flex-col py-20 space-y-4">
        <p className="text-3xl text-white">Account</p>
        <p className="text-white text-lg">My Account</p>
        <p className="text-white text-lg">Login/register</p>
        <p className="text-white  text-lg">car</p>
        <p className="text-white  text-lg">whislist</p>
        <p className="text-white  text-lg">Shop</p>
      </div>
      <div className="flex flex-col py-20 space-y-5">
        <p className="text-3xl text-white">Quick Link</p>
        <p className="text-white text-lg">Privacy Policy</p>
        <p className="text-white text-lg">Term of Use</p>
        <p className="text-white  text-lg">FaQ</p>
        <p className="text-white  text-lg">Contact</p>
      </div>
    
    
      <div className="flex flex-col py-20 space-y-6">
        <p className="text-3xl text-white">Exclusive</p>
        <p className="text-white text-2xl">Subscribe</p>
        <p className="text-white text-xl">Get 10% off on your First order</p>
        <div className="relative flex items-center">
          <input
            type="text"
            placeholder="What are you looking for"
            className="pl-4 pr-10 py-2 border border-gray-300  focus:outline-none bg-black"
          />
          <img
            src={arrow}
            alt="Search"
            className="w-6 h-6 absolute  left-52 top-1/2 transform -translate-y-1/2 placeholder-gray-400" 
          />
        </div>
      </div>
      
    </div>
  );
}
