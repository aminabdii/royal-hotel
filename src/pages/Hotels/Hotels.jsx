import React, { useEffect } from "react";
import { useHotel } from "../../contexts/HotelProvider/HotelProvider";
import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { PiCircleFill } from "react-icons/pi";
import { BsFillCheckCircleFill } from "react-icons/bs";

const Hotels = () => {
  const { isLoading, hotels, currentHotel } = useHotel();

  if (isLoading) return <p>Loading...</p>;
  return (
    <div className="w-full h-full flex flex-col gap-y-4 p-2 overflow-y-scroll rounded-md shadow-md bg-white ">
      {hotels.map((hotel) => {
        return (
          <Link
            key={hotel.id}
            to={`/hotels/${hotel.id}?lat=${hotel.latitude}&lng=${hotel.longitude}`}
            className={
              "fade-in-horiz flex items-center justify-between gap-3 shadow-md rounded-md "
            }
          >
            <img
              className="w-24 h-24 md:w-32 md:h-32 xl:w-36 xl:h-36 rounded-md"
              src={hotel.picture_url?.url}
              alt={hotel.id}
            />
            <div className=" p-2 w-full flex flex-col gap-y-1">
              <span className="flex items-center justify-between">
                <p className="text-xs  md:text-base xl:text-lg text-gray-800">
                  {hotel.name}
                </p>
                <span className="flex items-center gap-2 justify-center">
                  <BsFillCheckCircleFill
                    size={20}
                    color="#0ea5e9"
                    className={
                      hotel.id === currentHotel.id ? "block" : "hidden"
                    }
                  />
                  <AiFillStar color="#fde047" />
                  <p className="text-[14px] text-gray-500"> {hotel.rate}</p>
                </span>
              </span>
              <p className="text-xs md:text-sm xl:text-base font-light text-gray-800">
                {hotel.smart_location}
              </p>
              <div className="flex items-center ">
                <p className="text-xs md:text-sm xl:text-base  text-gray-500">
                  {hotel.property_type}
                </p>
                <span>
                  <PiCircleFill className="mx-2" size={5} />
                </span>
                <p className="text-xs md:text-sm xl:text-base text-gray-500">
                  {hotel.room_type}
                </p>
              </div>
              <p className="text-sm md:font-normal xl:text-base font-rubik font-extralight text-gray-800">
                starting from
                <span className="font-light ml-1 text-white bg-gradient-to-r from-cyan-500 to-blue-500 p-0.5 rounded-sm">
                  {hotel.price}$
                </span>
              </p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Hotels;
