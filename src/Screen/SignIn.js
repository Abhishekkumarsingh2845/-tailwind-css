// import React from "react";
import image1 from "./../Asset/Image/dl.beatsnoop 1.png";

function SignIn() {
  return (
    <div className="flex flex-row">
      <div className="my-12">
        <img src={image1} alt="icon" className="w-max h-max" />
      </div>

      <div className="my-12 mx-96   p-8  w-full max-w-md  ">
        <div className="">
          <p className=" text-4xl">Log in to Exclusive</p>
          <p className=" text-xl mt-2">Enter your details below</p>
        </div>
        <div className="  mt-12 flex flex-col">
          <input
            placeholder="Email or Phone Number"
            className="p-2  border-b-grey-500 border-b-2 mt-4"
          />
          <input
            placeholder="Password"
            className="p-2  border-b-grey-500 border-b-2 mt-4"
          />
        </div>
        <div className=" flex flex-row   space-x-24 mt-10">
          <button className=" rounded  text-white  px-4   bg-red-600">
            Log In
          </button>
          <p className=" mt-6    text-red-500">
            <a href="">Forgot Password</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
