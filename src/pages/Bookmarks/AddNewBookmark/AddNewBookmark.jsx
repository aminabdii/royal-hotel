import React, { useEffect, useState } from "react";
import Map from "../../../components/Map/Map";
import useGetLocation from "../../../hooks/useGetLocation";
import { useBookmarks } from "../../../contexts/BookmarkProvider/BookmarkProvider";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Loading from "../../../components/loading/Loading";

const BASE_URL = "https://api.bigdatacloud.net/data/reverse-geocode-client";

const AddNewBookmark = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState("");
  const [error, setError] = useState("");
  const { createBookmark } = useBookmarks();
  const [cityName, setCityName] = useState("");
  const [country, setCountry] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [lat, lng] = useGetLocation();

  useEffect(() => {
    async function getInfo() {
      setIsLoading(true);
      try {
        const { data } = await axios.get(
          `${BASE_URL}?latitude=${lat}&longitude=${lng}`
        );

        setCityName(data.city);
        setCountry(data.countryName);
        setCountryCode(data.countryCode);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    getInfo();
  }, [lat, lng]);

  async function submitHandler(e) {
    e.preventDefault();
    if (!cityName || !country) return null;

    const newBookmark = {
      latitude: lat,
      longitude: lng,
      cityName,
      country,
      countryCode,
      host_location: cityName + "" + country,
    };
    await createBookmark(newBookmark);
    navigate("/bookmarks");
  }

  if (isLoading) return <Loading />;
  return (
    <div className="w-full h-screen overflow-y-scroll sm:overflow-y-hidden p-2 border border-gray-200 rounded-md shadow-md ">
      <div className="flex flex-col  border-gray-300">
        <form
          onSubmit={submitHandler}
          className="flex flex-col relative gap-y-3 "
        >
          <div className="flex flex-col gap-2">
            <h1 className="font-normal text-sm font-karla sm:font-semibold sm:text-xl  border-b border-gray-400 py-2 mb-5 xl:mb-20">
              Add your favorite place
            </h1>
            <label
              className="font-thin font-karla sm:font-normal sm:text-lg xl:text-2xl"
              htmlFor="cityName"
            >
              city :
            </label>
            <input
              type="text"
              placeholder="city name"
              value={cityName}
              onChange={(e) => setCityName(e.target.value)}
              className="bg-none p-2 font-thin font-karla text-sm border border-gray-300 rounded-md sm:py-3"
            />
          </div>
          <div className="flex flex-col mb-3 gap-2">
            <label
              className="font-thin font-karla sm:font-normal sm:text-lg xl:text-2xl"
              htmlFor="country"
            >
              country :
            </label>
            <input
              type="text"
              placeholder="country name"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="bg-none  p-2 font-thin font-karla text-sm border border-gray-300 rounded-md sm:py-3"
            />
          </div>
          <div className="sm:hidden">
            <Map />
          </div>

          <div className="p-2 flex gap-y-6 flex-col md:mt-12  ">
            <button
              type="submit"
              className="text-white text-base cursor-pointer bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-1 focus:outline-none font-medium rounded-lg  lg:px-5 lg:py-2.5 shadow-lg px-3 py-2 text-center"
            >
              add
            </button>
            <button
              onClick={() => navigate("/bookmarks")}
              type="button"
              className="text-sky-600 text-base cursor-pointer border border-sky-500 lg:px-5 lg:py-2.5 rounded-md shadow-lg px-3 py-2 text-center"
            >
              back
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNewBookmark;
