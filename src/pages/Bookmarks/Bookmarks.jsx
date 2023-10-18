import React from "react";
import { useBookmarks } from "../../contexts/BookmarkProvider/BookmarkProvider";
import ReactCountryFlag from "react-country-flag";
import { BsTrash3 } from "react-icons/bs";

import { IoReturnUpBackOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/loading/Loading";

const Bookmarks = () => {
  const navigate = useNavigate();

  const { isLoading, bookmarks, deleteBookmark } = useBookmarks();

  async function removeHandler(id) {
    await deleteBookmark(id);
  }

  if (isLoading) return <Loading />;

  return (
    <div className="w-full overflow-y-auto h-screen border rounded-md p-2 ">
      <div className="flex flex-col p-2 ">
        <div className="flex items-center justify-between py-3  border-b border-gray-400 w-full ">
          <span className="flex items-center justify-center gap-2">
            <p className="font-rubik text-base font-light xl:text-lg">
              Your List
            </p>
            <span className="flex items-center justify-center  w-5 h-5 font-rubik text-white text-sm rounded-full bg-sky-600">
              {bookmarks.length}
            </span>
          </span>
          <button onClick={() => navigate("/hotels")}>
            <IoReturnUpBackOutline size={24} />
          </button>
        </div>

        {bookmarks?.map((bookmark) => {
          return (
            <div
              key={bookmark.id}
              className="flex items-center mt-3 justify-between overflow-y-auto border-b border-gray-300"
            >
              <div className="flex gap-3 py-3 items-center  justify-between">
                <ReactCountryFlag svg countryCode={bookmark.countryCode} />
                <p className="font-rubik font-extralight text-sm md:text-base xl:text-lg">
                  {bookmark.cityName}
                </p>
                <p className="hidden sm:block font-karla text-sm md:text-base xl:text-lg">
                  {bookmark.country}
                </p>
              </div>
              <button
                onClick={() => removeHandler(bookmark.id)}
                className="cursor-pointer"
              >
                <BsTrash3 size={20} className="text-red-600" />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Bookmarks;
