import React from "react";
import { NavLink } from "react-router-dom";
import { ChevronDownIcon } from "@heroicons/react/24/solid";


type StylesClass = string;

const Header = () : JSX.Element => {
  
  let activeStyle : StylesClass = "border-b-4 border-b-yellow-400 text-yellow-400 black-2";

  return (
    <nav className="black-3 h-16">
      <ul className="grid grid-cols-4 h-full">
        <li className="flex justify-center items-center cursor-pointer">
          Comics
        </li>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? activeStyle : "text-white")}
        >
          <li className="flex justify-center h-full items-center cursor-pointer text-center font-medium text-[20px]">
            Home
          </li>
        </NavLink>
        <NavLink
          to="/list-chapter"
          className={({ isActive }) => (isActive ? activeStyle : "text-white")}
        >
          <li className="flex justify-center h-full items-center cursor-pointer text-center font-medium text-[19px]">
            Manga
          </li>
        </NavLink>
        <li className="flex justify-center items-center cursor-pointer">
          <ChevronDownIcon className="h-4 w-4 text-white"/>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
