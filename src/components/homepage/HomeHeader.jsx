import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <header>
      <div className={`transition-all duration-200 delay-150 fixed w-full bg-montego-bay z-40 max-w-7xl mx-auto lg:bg-transparent lg:flex lg:justify-between lg:items-stretch lg:w-full lg:start-1/2 lg:-translate-x-1/2 ${menuActive ? '' : ''} `}>
        <div
          className={`absolute z-30 transition-all duration-200 h-screen w-full bg-white lg:hidden ${
            menuActive ? "" : "-translate-y-full"
          }  z-10 `}
        >
            <ul className={` duration-200 fixed transition-all ps-8  ${menuActive ? 'translate-y-28':'-translate-y-full'}`}>
                <li className="text-2xl"><Link to="/career">Home</Link> </li>
                <li className="text-2xl my-5">Home</li>
                <li className="text-2xl my-5">Home</li>
                <li className="text-2xl my-5">Home</li>
                <li className="text-2xl">Home</li>
            </ul>
        </div>
        <h1 className="bg-poinciana text-white font-cursive w-fit px-6 pb-3 pt-2 mx-5 rounded-b-lg  text-3xl lg:mx-0">
          Game Fury
        </h1>
        <div
          className={` right-6 top-8 transition-all duration-300 z-40 ${
            menuActive ? "bg-poinciana fill-white fixed" : "bg-white absolute"
          } p-2 shadow-lg rounded-b-lg lg:hidden`}
          onClick={() => {
            setMenuActive(!menuActive);
          }}
        >
          <div className="relative w-10 h-10">
            <svg
              className={`absolute transition-all duration-150  ${
                menuActive ? "opacity-0" : "opacity-100"
              }`}
              width="40px"
              height="40px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 7L7 7M20 7L11 7"
                stroke="#1C274C"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M20 17H17M4 17L13 17"
                stroke="#1C274C"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M4 12H7L20 12"
                stroke="#1C274C"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
            <svg
              className={`absolute transition-all duration-150 ${
                menuActive ? "opacity-100" : "opacity-0"
              }`}
              width="40px"
              height="40px"
              viewBox="0 -0.5 25 25"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.96967 16.4697C6.67678 16.7626 6.67678 17.2374 6.96967 17.5303C7.26256 17.8232 7.73744 17.8232 8.03033 17.5303L6.96967 16.4697ZM13.0303 12.5303C13.3232 12.2374 13.3232 11.7626 13.0303 11.4697C12.7374 11.1768 12.2626 11.1768 11.9697 11.4697L13.0303 12.5303ZM11.9697 11.4697C11.6768 11.7626 11.6768 12.2374 11.9697 12.5303C12.2626 12.8232 12.7374 12.8232 13.0303 12.5303L11.9697 11.4697ZM18.0303 7.53033C18.3232 7.23744 18.3232 6.76256 18.0303 6.46967C17.7374 6.17678 17.2626 6.17678 16.9697 6.46967L18.0303 7.53033ZM13.0303 11.4697C12.7374 11.1768 12.2626 11.1768 11.9697 11.4697C11.6768 11.7626 11.6768 12.2374 11.9697 12.5303L13.0303 11.4697ZM16.9697 17.5303C17.2626 17.8232 17.7374 17.8232 18.0303 17.5303C18.3232 17.2374 18.3232 16.7626 18.0303 16.4697L16.9697 17.5303ZM11.9697 12.5303C12.2626 12.8232 12.7374 12.8232 13.0303 12.5303C13.3232 12.2374 13.3232 11.7626 13.0303 11.4697L11.9697 12.5303ZM8.03033 6.46967C7.73744 6.17678 7.26256 6.17678 6.96967 6.46967C6.67678 6.76256 6.67678 7.23744 6.96967 7.53033L8.03033 6.46967ZM8.03033 17.5303L13.0303 12.5303L11.9697 11.4697L6.96967 16.4697L8.03033 17.5303ZM13.0303 12.5303L18.0303 7.53033L16.9697 6.46967L11.9697 11.4697L13.0303 12.5303ZM11.9697 12.5303L16.9697 17.5303L18.0303 16.4697L13.0303 11.4697L11.9697 12.5303ZM13.0303 11.4697L8.03033 6.46967L6.96967 7.53033L11.9697 12.5303L13.0303 11.4697Z"
                fill="#fff"
              />
            </svg>
          </div>
        </div>

        <ul className="hidden lg:flex shadow-lg rounded-b-lg overflow-hidden">
        <NavLink className={({isActive})=>`${isActive ? 'bg-poinciana text-white ' : 'bg-white '}flex items-center py-5 px-8  hover:bg-poinciana hover:text-white `} to="/">
          Home
          </NavLink>
          <NavLink className={({isActive})=>`${isActive ? 'bg-poinciana text-white ' : 'bg-white '}flex items-center py-5 px-8  hover:bg-poinciana hover:text-white `} to="/games/Kipon">
          Games
          </NavLink>          
          <NavLink className={({isActive})=>`${isActive ? 'bg-poinciana text-white ' : 'bg-white '}flex items-center py-5 px-8  hover:bg-poinciana hover:text-white `} to="/career">
          Career
          </NavLink>
          <NavLink className={({isActive})=>`${isActive ? 'bg-poinciana text-white ' : 'bg-white '}flex items-center py-5 px-8  hover:bg-poinciana hover:text-white `} to="/about">
          About
          </NavLink>
          <NavLink className={({isActive})=>`${isActive ? 'bg-poinciana text-white ' : 'bg-white '}flex items-center py-5 px-8  hover:bg-poinciana hover:text-white `} to="/contact">
          Contact
          </NavLink>
        </ul>
      </div>
    </header>
  );
};

export default Header;
