import React from "react";

const Subscribe = () => {
  return (
    <div className="w-full  p-2 mb-16">
      <div className="w-full ">
        <div className="container mx-auto shadow-xl rounded-3xl flex flex-col gap-y-16 bg-white  p-8">
          <div className="flex flex-col gap-5 items-center justify-between">
            <span className="flex flex-col gap-1 items-center justify-center">
              <p className="font-rubik text-base sm:text-lg md:text-xl text-gray-800 ">
                Save time, save money!
              </p>
              <p className="font-rubik text-xs  sm:text-base md:text-xl text-gray-500">
                Sign up and we'll send the best deals to you
              </p>
            </span>
            <div className="flex items-center justify-between gap-2">
              <input
                className="px-2 py-2 sm:w-60  md:w-96 md:py-4 rounded-md font-rubik text-sm lg:text-base outline-none  bg-gray-100  "
                placeholder="Your email address"
                type="text"
              />
              <button
                type="button"
                class="text-white font-rubik font-normal bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br  shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80  rounded-lg text-sm px-4 py-2 md:py-[17px] md:px-6 text-center mr-2 "
              >
                subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
