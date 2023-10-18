import React from "react";
import { Outlet } from "react-router-dom";

import { useBookmarks } from "../../contexts/BookmarkProvider/BookmarkProvider";
import Map from "../Map/Map";

const BookmarkLayout = () => {
  const { bookmarks } = useBookmarks();

  return (
    <div className="w-full relative ">
      <div className=" container mx-auto xl:max-w-screen-xl">
        <div className="flex items-center py-2 gap-5 ">
          <div className="w-[100%] sm:w-[55%] ">
            <Outlet />
          </div>
          <div className="hidden h-screen bg-blue-200 sm:block w-[45%] ">
            <Map markerLocation={bookmarks} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookmarkLayout;
