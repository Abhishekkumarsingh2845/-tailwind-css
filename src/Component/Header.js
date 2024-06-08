import React from "react";
import drop from "./../Asset/Image/DropDown.png";

export default function Header() {
  return (
    <div className="bg-black h-full flex justify-between items-center px-6">
      <div className="flex w-1/2 p-4 ml-96 justify-center">
        <h1 className=" text-xl text-white ">
          Summer Sale For All Swim And Free Express Delivery - OFF 50%!
        </h1>
        <h1 className="text-xl text-white ml-4 underline">Shop Now</h1>
      </div>
      <div className="flex items-center ">
        <h1 className="text-white  text-xl">English</h1>
        <img src={drop} alt="dropdown icon" />
      </div>
    </div>
  );
}

