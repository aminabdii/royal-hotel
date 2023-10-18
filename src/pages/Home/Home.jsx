import React, { useRef, useState } from "react";
import image from "../../assets/oak-motion-7vYMAVS-cKo-unsplash.jpg";
import { RiSearch2Line } from "react-icons/ri";
import { GoPeople } from "react-icons/go";
import { HiChevronDown } from "react-icons/hi";
import { HiChevronUp } from "react-icons/hi";
import { SlCalender } from "react-icons/sl";
import { CiLocationOn } from "react-icons/ci";
import { BiPlus } from "react-icons/bi";
import { BiMinus } from "react-icons/bi";
import useOutsideClick from "../../hooks/useOutsideClick";
// date fns styles
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRange, DateRangePicker } from "react-date-range";
import { format } from "date-fns";
import Banner from "../../components/Banner/Banner";
import HotelList from "../../components/HotelsList/HotelList";
import Subscribe from "../../components/Subscribe/Subscribe";
import { createSearchParams, useNavigate } from "react-router-dom";

const Home = () => {
  const [isClick, setIsClick] = useState(false);
  const [isDateClick, setIsDateClick] = useState(false);

  // ..search destinition
  const [destination, setDestination] = useState("");
  // guest options
  const [options, setOptions] = useState({
    adult: 0,
    children: 0,
    room: 0,
  });
  const countHandler = (type, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [type]: operation === "inc" ? options[type] + 1 : options[type] - 1,
      };
    });
  };
  // .. dateRange info
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  // ... navigate
  const navigate = useNavigate();
  // ... search Handler
  const searchHandler = () => {
    const encodedParams = createSearchParams({
      options: JSON.stringify(options),
      date: JSON.stringify(date),
      destination,
    });
    navigate({
      pathname: "/hotels",
      search: decodeURIComponent(encodedParams.toString()),
    });
  };

  return (
    <>
      <div className="w-full h-full relative">
        <div className=" mx-auto p-2 container 2xl:max-w-screen-2xl mb-24">
          <img
            src={image}
            className=" w-full h-screen object-cover rounded-3xl bg-fixed shadow-2xl"
            alt=""
          />

          <div className="absolute w-full h-full left-0 top-24 sm:top-32 px-2 flex flex-col  justify-start items-center gap-y-20 ">
            {/* banner title  */}
            <div className="w-[100%] sm:w-[82%] container p-2.5  mx-auto flex justify-center items-center">
              <h1 className="flex flex-col justify-center items-center  font-semibold text-[25px] sm:text-4xl md:text-[45px] xl:text-6xl  drop-shadow-2xl text-white text-center">
                Secure Your Dream Vacation <span>With a Reservation</span>
              </h1>
            </div>

            {/* banner inputs  */}

            <div className="relative w-[95%] sm:w-[70%] container p-2.5  mx-auto flex flex-col sm:flex-row justify-between items-center gap-y-3  bg-white gap-1  rounded-lg">
              {/* ..search  */}
              <div className="w-full bg-slate-50 shadow-sm rounded-md">
                <div className="flex items-center p-2.5 ">
                  <CiLocationOn
                    color="#0ea5e9"
                    className="md:w-6 md:h-6 mr-1"
                  />
                  <input
                    className=" w-2/3 bg-transparent md:text-base font-thin text-sm outline-none"
                    type="text"
                    name="destination"
                    id="destination"
                    value={destination}
                    placeholder="search"
                    onChange={(e) => setDestination(e.target.value)}
                  />
                </div>
              </div>
              {/* date  */}
              <div className="w-full py-2.5 px-2 cursor-pointer bg-slate-50 shadow-sm rounded-md">
                <div
                  onClick={() => setIsDateClick(!isDateClick)}
                  className="flex justify-between items-center"
                  id="optionDropDown"
                >
                  <SlCalender size={20} className="mr-0.5" color="#0ea5e9" />

                  {date ? (
                    <div
                      id="optionDropDown"
                      className="font-karla w-full text-center text-sm sm:text-xs md:text-sm font-light text-gray-500 "
                    >{`${format(date[0].startDate, "d/MMM")} to  ${format(
                      date[0].endDate,
                      "d/MMM"
                    )}`}</div>
                  ) : (
                    <span
                      id="optionDropDown"
                      className="text-gray-500 font-rubik text-sm lg:text-base font-extralight"
                    >
                      date
                    </span>
                  )}
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

                <DateRanges
                  isDateClick={isDateClick}
                  setIsDateClick={setIsDateClick}
                  date={date}
                  setDate={setDate}
                />
              </div>
              {/* people drop down  */}
              <div className=" p-2.5 w-full bg-slate-50 shadow-sm rounded-md">
                <div
                  className="flex cursor-pointer items-center justify-between"
                  id="optionDropDown"
                  onClick={() => setIsClick(!isClick)}
                >
                  <GoPeople color="#0ea5e9" className="md:w-5 md:h-5 mr-1" />

                  <p
                    id="optionDropDown"
                    className="text-gray-500 font-rubik text-sm lg:text-base font-light  "
                  >
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
                {isClick && (
                  <GusetOption
                    options={options}
                    countHandler={countHandler}
                    setIsClick={setIsClick}
                  />
                )}
              </div>
              {/* search btn */}
              <button
                onClick={searchHandler}
                className="p-2 sm:p-3 w-full sm:w-auto bg-sky-500 shadow-md cursor-pointer rounded-lg sm:rounded-full hover:bg-sky-600 duration-150"
              >
                <p className="sm:hidden text-white font-rubik font-extralight">
                  search
                </p>
                <RiSearch2Line className=" hidden sm:block text-white" />
              </button>
            </div>
            {/* .. */}
          </div>
        </div>
      </div>
      <Banner />
      <HotelList />
      <Subscribe />
    </>
  );
};

export default Home;

function GusetOption({ options, countHandler, setIsClick }) {
  const ref = useRef();
  useOutsideClick(ref, () => setIsClick(false), "optionDropDown");
  return (
    <div
      ref={ref}
      className="absolute top-[155px]  md:top-16  w-full md:w-1/2 p-3 sm:py-4 sm:px-3  overflow-auto right-0 rounded-lg z-30 bg-gray-50 "
    >
      <OptionsList
        type="room"
        minLimit={0}
        options={options}
        countHandler={countHandler}
      />
      <OptionsList
        type="adult"
        minLimit={0}
        options={options}
        countHandler={countHandler}
      />
      <OptionsList
        type="children"
        minLimit={0}
        options={options}
        countHandler={countHandler}
      />
    </div>
  );
}

function OptionsList({ type, minLimit, options, countHandler }) {
  return (
    <div className="flex flex-col mt-3">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-500 font-light font-rubik text-sm sm:text-base mr-2 ">
            {type}
          </p>
        </div>
        <div className="w-[30%] flex justify-between items-center ">
          <button
            onClick={() => countHandler(type, "inc")}
            className="cursor-pointer p-1 border border-sky-400 rounded-lg"
          >
            <BiPlus color="#0ea5e9" size={14} />
          </button>

          <span className="text-sm text-gray-500 font-light">
            {options[type]}
          </span>

          <button
            onClick={() => countHandler(type, "dec")}
            disabled={options[type] <= minLimit}
            className="cursor-pointer p-1 border  border-sky-400 rounded-md"
          >
            <BiMinus color="#0ea5e9" size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}

function DateRanges({ isDateClick, setIsDateClick, date, setDate }) {
  const ref = useRef();
  useOutsideClick(ref, () => setIsDateClick(false), "optionDropDown");
  return (
    <div className="flex flex-col items-center justify-center" ref={ref}>
      <div className="flex items-center justify-center">
        {isDateClick && (
          <DateRange
            onChange={(item) => setDate([item.selection])}
            ranges={date}
            minDate={new Date()}
            moveRangeOnFirstSelection={false}
            editableDateInputs={true}
            className="container mx-auto left-0 absolute  sm:h-auto sm:top-14 md:top-16 z-30 shadow-lg rounded-md "
          />
        )}
      </div>
    </div>
  );
}
