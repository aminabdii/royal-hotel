import React from "react";
import { Outlet } from "react-router-dom";

const HotelLayout = () => {
  return (
    <div>
      <Outlet />
      <div>map</div>
    </div>
  );
};

export default HotelLayout;
