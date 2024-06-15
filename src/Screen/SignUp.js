// import React from "react";
import image1 from "./../Asset/Image/dl.beatsnoop 1.png";

function SignUp() {
  return (
    <div className="flex flex-row">
      <div className="my-12">
        <img src={image1} alt="icon" className="w-max h-max" />
      </div>

      <div className="my-12 mx-96   p-8  w-full max-w-md  ">
        <div className="">
          <p className=" text-4xl">Create an account</p>
          <p className=" text-xl mt-2">Enter Your Details Below</p>
        </div>
        <div className="  mt-12 flex flex-col">
          <input
            placeholder="Name"
            className="p-2  border-b-grey-500 border-b-2 mt-4"
          />
          <input
            placeholder="Email or Phone Number"
            className="p-2  border-b-grey-500 border-b-2 mt-4"
          />
          <input
            placeholder="Password"
            className="p-2  border-b-grey-500 border-b-2 mt-4"
          />
        </div>
        <div className=" flex flex-col  mt-10">
          <button className=" rounded  text-white    py-2 bg-red-600">
            Create Account
          </button>
          <button className=" mt-6 bg-slate-100   py-2 border-grey-600 border-b-2 rounded ">
            Sign Up with Account
          </button>
        </div>
        <div className="flex flex-row mt-6 space-x-2">
          <p>Already have account?</p>
          <p>Log In</p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
