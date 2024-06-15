import React from "react";
import Header from "./Component/Header";
import NavBar from "./Component/NavBar";
import Footer from "./Component/Footer";
import SignUp from "./Screen/SignUp";
import SignIn from "./Screen/SignIn";


export default function App() {
  return (
    <div className="flex flex-col ">
     <Header/>
     <NavBar/>
 <SignIn/>
     <Footer/>
    </div>
  );
}
