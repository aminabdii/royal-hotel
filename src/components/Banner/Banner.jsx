import React from "react";

const Banner = () => {
  return (
    <div className="w-full  p-2 mb-16">
      <div className="w-full ">
        <div className="container mx-auto shadow-xl rounded-3xl flex flex-col gap-y-16 bg-white p-8">
          <div className="flex flex-col gap-y-8 lg:flex-row items-center justify-between">
            <h1 className="flex flex-col font-rubik font-normal text-gray-700 text-2xl sm:text-4xl ">
              Our top-rated and <span>highly visited hotel</span>
            </h1>
            <div className="flex flex-col font-rubik font-light text-base text-center  sm:text-lg text-gray-700">
              <p>Discover our handpicked of the years finest hotels, </p>
              <p>curated based on feedback from our delighted visitors</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
