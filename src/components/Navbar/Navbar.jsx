import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CiMenuFries } from "react-icons/ci";
import { TfiClose } from "react-icons/tfi";

const Navbar = () => {
  const [isClick, setIsClick] = useState(false);
  return (
    <div className="bg-white shadow-sm mb-4 p-2 w-full md:top-0 md:sticky  z-40 ">
      <div className=" p-2 md:p-0 container 2xl:max-w-screen-2xl mx-auto">
        <div className="flex items-center justify-between ">
          <Link to="/">
            <h2 className="font-rubik md:text-lg xl:text-xl  font-normal">
              Royal
              <span className="text-sky-600 font-rubik font-normal ml-0.5 ">
                UP
              </span>
            </h2>
          </Link>

          <ul className="hidden md:flex items-center justify-between gap-x-2  ">
            <li>
              <Link
                to="/hotels"
                className="font-rubik mr-2 xl:text-lg hover:text-sky-600 duration-150"
              >
                Hotels
              </Link>
            </li>

            <li>
              <Link
                to="/bookmarks"
                className="font-rubik mr-2 xl:text-lg hover:text-sky-600 duration-150"
              >
                My List
              </Link>
            </li>

            <li>
              <button
                type="button"
                className="text-white text-base bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-1 focus:outline-none font-medium rounded-lg  lg:px-5 lg:py-2.5 px-4 py-2 text-center mr-2 mb-2"
              >
                signin
              </button>
            </li>
          </ul>

          {/* menu  */}
          <div onClick={() => setIsClick(!isClick)} className="block md:hidden">
            {isClick ? (
              <TfiClose className="cursor-pointer" />
            ) : (
              <CiMenuFries size={20} className="cursor-pointer" />
            )}
          </div>
          {/* mobile menu  */}

          <div
            className={
              isClick
                ? "w-full  absolute top-[65px] right-0 flex flex-col items-center justify-center duration-200 ease-in-out z-20"
                : "md:hidden w-full left-0 absolute top-[-100%] duration-75 ease-in-outout "
            }
          >
            <div className="bg-white w-full h-screen p-4 block  md:hidden">
              <ul className="container w-10/12 h-1/2 border border-gray-400 rounded-2xl shadow-lg  mx-auto p-2 mt-16 flex flex-col items-center justify-center gap-y-5 ">
                <li className="w-full border-solid border-b border-gray-300 last:border-b-0 flex justify-center items-center py-1">
                  <Link
                    to="/bookmarks"
                    className="font-rubik text-sky-600 hover:text-sky-600 duration-150"
                  >
                    Signin
                  </Link>
                </li>

                <li className=" w-full border-solid border-b border-gray-300 last:border-b-0 flex justify-center items-center py-1 ">
                  <Link
                    onClick={() => setIsClick(false)}
                    to="/hotels"
                    className="font-rubik text-gray-500  hover:text-sky-600 duration-150"
                  >
                    Hotels
                  </Link>
                </li>

                <li className=" w-full flex justify-center  items-center py-1 ">
                  <Link
                    to="/bookmarks"
                    className="font-rubik text-gray-500  hover:text-sky-600 duration-150"
                  >
                    My List
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
