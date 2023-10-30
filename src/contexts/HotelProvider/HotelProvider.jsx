import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import useFetchData from "../../hooks/useFetchData";
import { useSearchParams } from "react-router-dom";

const HotelContext = createContext();

const HotelProvider = ({ children }) => {
  const [currentLoading, setCurrentLoading] = useState(true);
  const [currentHotel, setCurrentHotel] = useState({});

  const [url, setUrl] = useState("/hotels");

  const [isLoading, hotels, ,] = useFetchData(url);

  async function getSingleHotel(id) {
    try {
      const { data } = await axios.get(
        `https://amnabdi.pythonanywhere.com/api/hotels/${id}`
      );
      setCurrentHotel(data);
    } catch (error) {
      return error;
    } finally {
      setCurrentLoading(false);
    }
  }

  return (
    <HotelContext.Provider
      value={{
        isLoading,
        hotels,
        currentLoading,
        currentHotel,
        getSingleHotel,
      }}
    >
      {children}
    </HotelContext.Provider>
  );
};

export default HotelProvider;

export const useHotel = () => useContext(HotelContext);
