// import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { BsFillPencilFill } from "react-icons/bs";
// import { login, logout, onUserStateChange } from "../api/firebase";
import User from "../User";
import Button from "../ui/Button";
import { useAuthContext } from "../../context/AuthContext";
import { RiArrowDownSLine } from "react-icons/ri";
import CartStatus from "../Cart/CartStatus";
import { useState } from "react";
import DropDownList from "./DropDownList";

export default function Navbar() {
  const { user, login, logout } = useAuthContext();
  const [showDropdown, setShowDropdown] = useState(false);

  const handleMouseEnter = () => {
    setShowDropdown(true);
  };
  const handleMouseLeave = () => {
    setShowDropdown(false);
  };

  return (
    <header>
      <div className="fixed z-50 top-0 left-0 flex w-full justify-between bg-white border-b border-gray-300 py-2 px-20">
        <div className="flex ">
          <div className="flex items-center">
            <Link to="/" className=" text-4xl text-brand">
              <p className="text-2xl"> CAVILL </p>
            </Link>
            <div className="flex pl-28">
              <DropDownList text={"Home"} location={""} />
              <p
                className="text-base p-4 flex items-end cursor-pointer hover:text-gray-500"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                Shop <RiArrowDownSLine />
              </p>
              <DropDownList text={"Blog"} />
              <DropDownList text={"Contact"} />
            </div>
          </div>
        </div>
        <nav className="flex items-center gap-4 font-semibold">
          {/* <Link to="/products" className="text-base hover:text-gray-500">
            Products
          </Link> */}
          {user && (
            <Link to="/carts">
              <CartStatus />
            </Link>
          )}
          {user && user.isAdmin && (
            <Link to="/products/new" className="text-xl">
              <BsFillPencilFill className="" />
            </Link>
          )}
          {user && <User user={user} />}
          {!user && <Button text={"login"} onClick={login} />}
          {user && <Button text={"logout"} onClick={logout} />}
        </nav>
      </div>
      <div>
        <ul
          className={` ${
            showDropdown
              ? "flex fixed z-50 w-full top-14 left-0 bg-white justify-center transition-transform duration-500 origin-top scale-y-100"
              : "flex fixed z-50 w-full top-14 left-0 bg-white justify-center transition-transform duration-500 origin-top scale-y-0"
          }`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <DropDownList text={"Men"} location={"men"} />
          <DropDownList text={"Women"} location={"women"} />
          <DropDownList text={"Accessory"} location={"accessory"} />
          <DropDownList text={"Shoes"} location={"shoes"} />
          <DropDownList text={"Ring"} location={"ring"} />
        </ul>
      </div>
    </header>
  );
}
