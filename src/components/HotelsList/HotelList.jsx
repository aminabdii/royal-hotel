import React from "react";
import { AiFillStar } from "react-icons/ai";
import { useHotel } from "../../contexts/HotelProvider/HotelProvider";
import { useNavigate } from "react-router-dom";
import "./HotelList.css";

const HotelList = () => {
  let delay = 0.3;
  const navigate = useNavigate();
  const { hotels } = useHotel();
  return (
    <div className="w-full h-full p-2 mb-16">
      <div className="container mx-auto bg-white shadow-xl rounded-3xl px-9 py-8 ">
        <div className="flex flex-col justify-center p-5 items-center">
          <p className="font-rubik font-thin text-xs lg:text-sm ">
            HOTEL & SPA RESIDENCY
          </p>
          <p className="font-rubik font-normal text-2xl lg:text-3xl ">
            Rooms & Suites
          </p>
        </div>
        {/* ..  */}
        <div className="grid grid-cols-1 sm:grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {hotels.map((hotel) => {
            delay += 0.03;
            return (
              <div
                style={{ animationDelay: delay + "s" }}
                className="fade-in-horiz shadow-sm flex flex-col gap-7 cursor-pointer rounded-lg p-0.5 
          "
                key={hotel.id}
              >
                <div className="card__placeholder">
                  <img
                    className="  w-full h-48 rounded-md"
                    src={hotel.picture_url?.url}
                    alt=""
                  />
                </div>
                <div className="flex flex-col gap-1 px-5">
                  <span className="flex items-center justify-between">
                    <p className="font-rubik   font-normal text-xs xl:text-sm xl:font-normal  text-gray-500">
                      {hotel.smart_location}
                    </p>
                    <p className="font-rubik font-thin text-xs text-gray-400">
                      ({hotel.number_of_reviews} reviews)
                    </p>
                  </span>
                  <span className="flex items-center justify-between">
                    <p className="font-rubik flex-1 font-normal text-sm xl:text-base text-gray-700 ">
                      {hotel.name}
                    </p>
                    <span className="flex items-center justify-center">
                      <AiFillStar color="#fde047" />
                      <p className="text-gray-500"> {hotel.rate}</p>
                    </span>
                  </span>

                  <p className="font-rubik font-normal text-sm text-gray-700">
                    starting from {hotel.price} $
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() =>
                    navigate(
                      `/hotels/${hotel.id}?lat=${hotel.latitude}&lng=${hotel.longitude}`
                    )
                  }
                  className="text-white text-base cursor-pointer bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-1 focus:outline-none font-medium rounded-lg  lg:px-5 lg:py-2.5 shadow-lg px-3 py-2 text-center"
                >
                  visit now
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HotelList;
