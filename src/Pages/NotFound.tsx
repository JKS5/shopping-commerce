import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center bg-black w-screen h-screen">
      <div className="flex flex-col items-center ">
        <h1 className="text-white animate-glow text-[100px]">404</h1>
        <h1 className="text-white pb-2 text-[100px]">ERROR</h1>
        <p className="text-white text-center mt-2 mb-4">
          The page you are looking for might have been removed had its <br />{" "}
          name changed or is temparaily unavaiable
        </p>
        <button className="border-2 text-white text-2xl flex items-center">
          <Link to={"/"} className="text-sm mx-4 my-2 animate-pulse ">
            Home Page
          </Link>
        </button>
      </div>
    </div>
  );
}
