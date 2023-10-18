import React from "react";
import { Outlet } from "react-router-dom";
import Map from "../Map/Map";
import { useHotel } from "../../contexts/HotelProvider/HotelProvider";

const HotelLayout = () => {
  const { hotels } = useHotel();
  return (
    <div className="w-full relative ">
      <div className=" container mx-auto 2xl:max-w-screen-2xl">
        <div className="flex items-centerpx-2 justify-center py-2 gap-3 ">
          <div className=" w-full sm:w-[60%] ">
            <Outlet />
          </div>
          <div className="hidden h-screen bg-blue-200 sm:block w-[40%] ">
            <Map markerLocation={hotels} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelLayout;
