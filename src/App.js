import React from "react";
import Header from "./Component/Header";
import NavBar from "./Component/NavBar";
import Footer from "./Component/Footer";
import Login from "./Screen/Login";

export default function App() {
  return (
    <div className="flex flex-col ">
     <Header/>
     <NavBar/>
     <Login/>
     <Footer/>
    </div>
  );
}
