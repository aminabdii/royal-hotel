import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useHotel } from "../../contexts/HotelProvider/HotelProvider";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineHome } from "react-icons/ai";
import { BsPeopleFill } from "react-icons/bs";
import { LiaBedSolid } from "react-icons/lia";
import { LiaToiletSolid } from "react-icons/lia";
import { TbCircleFilled } from "react-icons/tb";
import { GiPriceTag } from "react-icons/gi";
import Map from "../../components/Map/Map";
import Loading from "../../components/loading/Loading";

const SingleHootel = () => {
  const navigate = useNavigate();
  const { currentLoading, currentHotel, getSingleHotel } = useHotel();
  const { id } = useParams();
  useEffect(() => {
    getSingleHotel(id);
  }, [id]);

  if (currentLoading) return <Loading />;

  return (
    <div className="w-full h-screen overflow-y-scroll  bg-white rounded-md shadow-md">
      <div className="w-full flex flex-col items-center">
        <img
          className="w-full h-64  xl:h-80 rounded-t-md"
          src={currentHotel.picture_url?.url}
          alt={currentHotel.smart_location}
        />
        {/* hotel name and city  */}
        <div className="flex flex-col gap-y-2 items-center justify-center border-b border-gray-400 w-full py-4">
          <p className="text-gray-800 md:text-lg">{currentHotel.name}</p>
          {/* locaction and rate  */}
          <span className="flex w-[100%] md:w-[75%] items-center p-2 gap-5 justify-between ">
            <p className="text-sm  md:text-base font-light text-gray-800">
              {currentHotel.smart_location}
            </p>
            <span className="flex items-center gap-1 justify-between">
              <p className="text-sm font-extralight text-gray-500">
                (
                {` ${currentHotel.number_of_reviews}  ${
                  currentHotel.number_of_reviews > 1 ? "reviews" : "review"
                } `}
                )
              </p>
              <AiFillStar color="#fde047" />
              <p className="text-[14px] text-gray-500"> {currentHotel.rate}</p>
            </span>
          </span>
        </div>
        {/* host name  */}
        <div className="flex flex-col items-center font-rubik gap-2 justify-center border-b border-gray-400 w-full  px-2 py-4">
          <p className="w-full text-base font-medium ">
            {currentHotel.property_type}
          </p>
          {/* locaction and rate  */}
          <p className="w-full text-sm font-light">{`rent hotel in ${currentHotel.smart_location} by ${currentHotel.host_name} `}</p>
        </div>
        {/* Room specifications  */}
        <div className="flex flex-col items-center font-rubik gap-2 justify-center  w-full  px-2 py-4">
          <p className="w-full text-lg font-normal">Room specifications</p>
          <div className="flex w-full items-center justify-start gap-4">
            <span>
              <AiOutlineHome size={25} />
            </span>
            <span className="flex flex-col items-center justify-start ">
              <p className="w-full font-normal">about hotel</p>
              <div className="flex items-center gap-1 font-extralight text-gray-600">
                <p>{currentHotel.room_type}</p>
                <TbCircleFilled size={7} />
                <p>{` ${currentHotel.accommodates} ${
                  currentHotel.accommodates > 1 ? "accommodates" : "accommodate"
                }`}</p>
              </div>
            </span>
          </div>
        </div>
        {/* people  */}
        <div className="flex flex-col items-center gap-2 justify-center b w-full  px-2 py-2">
          <div className="flex w-full items-center justify-start gap-4">
            <span>
              <BsPeopleFill size={25} />
            </span>
            <span className="flex flex-col items-center justify-start ">
              <p className="w-full">capacity</p>
              <div className="flex items-center gap-1 font-extralight text-gray-600">
                <p>{`capacity ${currentHotel.guests_included} ${
                  currentHotel.guests_included > 1 ? "people" : "person"
                }`}</p>
              </div>
            </span>
          </div>
        </div>
        {/* sleeping services */}
        <div className="flex flex-col items-center gap-2 justify-center w-full  px-2 py-2">
          <div className="flex w-full items-center justify-start gap-4 b">
            <span>
              <LiaBedSolid size={25} />
            </span>
            <span className="flex flex-col items-center justify-start ">
              <p className="w-full">sleeping services</p>
              <div className="flex items-center gap-1 font-extralight text-gray-600">
                <p>{`${currentHotel.bedrooms} ${
                  currentHotel.bedrooms > 1 ? "bedrooms" : "bedroom"
                } `}</p>
                <TbCircleFilled size={7} />
                <p>{`${currentHotel.beds} ${
                  currentHotel.beds > 1 ? "beds" : "bed"
                } `}</p>
              </div>
            </span>
          </div>
        </div>
        {/* Toilets */}
        <div className="flex flex-col items-center gap-2 border-b border-gray-400 justify-center w-full  px-2 py-2">
          <div className="flex w-full items-center justify-start gap-4">
            <span>
              <LiaToiletSolid size={25} />
            </span>
            <span className="flex flex-col items-center justify-start ">
              <p className="w-full">Toilets</p>
              <div className="flex items-center gap-1 font-extralight text-gray-600">
                <p>
                  {`${currentHotel.bathrooms} ${
                    currentHotel.bathrooms > 1 ? "bathrooms" : "bathroom"
                  }`}
                </p>
              </div>
            </span>
          </div>
        </div>
        {/* description */}
        <div className="flex  flex-col gap-2 px-2 py-4 border-b border-gray-400">
          <p className="w-full font-medium text-lg">description</p>
          <p className="font-light ">
            {currentHotel.space || currentHotel.summary}
          </p>
        </div>
        {/* options  */}
        <div className="w-full p-2 border-b border-gray-400  py-5">
          <p className="w-full mb-3 font-medium text-lg">options</p>
          <div className="grid grid-cols-2 gap-1 font-light text-gray-600">
            {currentHotel.amenities?.map((item) => (
              <div className="grid grid-cols-1">
                <div key={item.id}> {item}</div>
              </div>
            ))}
          </div>
        </div>
        {/* location  */}
        <div className="w-full flex flex-col p-2 sm:hidden">
          <p className="font-rubik font-medium text-base ">Location</p>
          <Map />
        </div>
        {/* .. request button  */}
        <div className="w-full h-full flex items-center justify-around gap-4 p-4 border-t border-gray-300">
          <span className="flex items-center gap-2">
            <GiPriceTag size={20} color="#0ea5e9" />
            <span className=" flex items-center gap-x-2">
              <p className="text-gray-800 font-rubik md:text-lg font-normal">
                {currentHotel.price}$
              </p>
              <p className="font-rubik text-gray-400 text-sm">/pernight</p>
            </span>
          </span>

          <button
            type="button"
            className="text-white  text-base cursor-pointer bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-1 focus:outline-none font-medium rounded-lg  lg:px-5 lg:py-2.5 shadow-lg px-3 py-2 text-center"
          >
            request to guest
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleHootel;
