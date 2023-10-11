import React, { useState } from "react";
import image from "../../assets/zion-c-jdTLcwsJkPg-unsplash.jpg";

import { RiSearch2Line } from "react-icons/ri";
import { GoPeople } from "react-icons/go";
import { HiChevronDown } from "react-icons/hi";
import { HiChevronUp } from "react-icons/hi";
import { SlCalender } from "react-icons/sl";
import { CiLocationOn } from "react-icons/ci";
const Home = () => {
  const [isClick, setIsClick] = useState(false);
  const [isDateClick, setIsDateClick] = useState(false);

  return (
    <div className="w-full h-full relative  ">
      <div className=" mx-auto p-2  container 2xl:max-w-screen-2xl ">
        <img
          src={image}
          className=" w-full h-screen  object-cover rounded-3xl"
          alt=""
        />
        <div className="absolute w-full h-full left-0 top-0  px-2 flex flex-col justify-start items-center gap-y-24 ">
          {/* banner title  */}
          <h1 className="font-semibold mt-32 text-xl sm:text-4xl md:text-5xl xl:text-6xl  drop-shadow-2xl text-white text-center">
            Secure Your Dream Vacation <br /> With a Reservation
          </h1>
          {/* banner inputs  */}
          <div className="w-[90%] sm:w-[60%] container mx-auto flex justify-between items-center p-2 bg-white gap-1 rounded-3xl">
            {/* ..search  */}
            <div className="w-full bg-slate-50 shadow-sm rounded-3xl">
              <div className="flex items-center p-1.5">
                <CiLocationOn color="#0ea5e9" className="md:w-6 md:h-6 mr-1" />
                <input
                  className=" w-2/3 bg-transparent md:text-base font-thin text-sm outline-none"
                  type="text"
                  name="destination"
                  id="destination"
                  placeholder="search"
                />
              </div>
            </div>
            {/* date  */}
            <div className="w-full p-1.5 px-2 bg-slate-50 shadow-sm rounded-3xl">
              <div
                onClick={() => setIsDateClick(!isDateClick)}
                className="flex justify-between items-center"
              >
                <SlCalender color="#0ea5e9" />
                <span className="text-gray-500 font-rubik text-sm font-extralight">
                  date
                </span>
                {isDateClick ? (
                  <HiChevronDown
                    color="#0ea5e9"
                    className="font-thin text-slate-600 "
                  />
                ) : (
                  <HiChevronUp
                    color="#0ea5e9"
                    className="font-thin text-slate-600 "
                  />
                )}
              </div>
            </div>
            {/* drop down  */}
            <div className="relative p-1.5 w-full bg-slate-50 shadow-sm rounded-3xl">
              <div
                className="flex cursor-pointer items-center  justify-between"
                id="optionDropDown"
                onClick={() => setIsClick(!isClick)}
              >
                <GoPeople color="#0ea5e9" className="md:w-5 md:h-5 mr-1" />

                <p className="text-gray-500 font-rubik text-sm font-extralight  ">
                  person
                </p>
                {isClick ? (
                  <HiChevronDown
                    color="#0ea5e9"
                    className="font-thin text-slate-600 "
                  />
                ) : (
                  <HiChevronUp
                    color="#0ea5e9"
                    className="font-thin text-slate-600 "
                  />
                )}
              </div>
            </div>
            {/* search btn */}
            <button className="p-1.5 bg-sky-500 shadow-md cursor-pointer rounded-full">
              <RiSearch2Line className="text-white" />
            </button>

            {/* .. */}
          </div>

          {/* .. */}

          <div className="h-full w-full mt-10">
            <div className="container mx-auto px-10  ">
              <div className=" flex flex-col gap-7 items-center justify-center sm:flex-row sm:items-center sm:justify-between">
                <p className="w-full sm:w-1/2 text-white font-rubik text-sm xl:text-base font-thin  ">
                  We believe in the power of the great outdors. We <br />
                  think that everyone desereves the chance to explore
                  <br /> the wild and to find their very own adventure.
                </p>
                {/* .. */}
                <div className="flex items-center justify-between w-full sm:w-[40%] ">
                  <span>
                    <h1 className="text-4xl xl:text-6xl text-white font-karla">
                      121+
                    </h1>
                    <p className="text-white font-karla font-thin text-sm">
                      Capital Raised
                    </p>
                  </span>
                  <span>
                    <h1 className="text-4xl xl:text-6xl text-white font-karla">
                      80+
                    </h1>
                    <p className="text-white font-karla font-thin text-sm">
                      Happy Costumers
                    </p>
                  </span>
                  <span>
                    <h1 className="text-4xl xl:text-6xl text-white font-karla">
                      1k+
                    </h1>
                    <p className="text-white font-karla font-thin text-sm">
                      Property options
                    </p>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
