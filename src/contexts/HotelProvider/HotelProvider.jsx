import axios from "axios";
import React, { createContext, useContext, useState } from "react";
import useFetchData from "../../hooks/useFetchData";
import { useSearchParams } from "react-router-dom";

const HotelContext = createContext();

const instance = axios.create({
  baseURL: "http://localhost:5000",
});

const HotelProvider = ({ children }) => {
  const [currentLoading, setCurrentLoding] = useState("");
  const [currentHotel, setCurrentHotel] = useState({});
  const [error, setError] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const destination = searchParams.get("destination");
  const room = JSON.parse(searchParams.get("options"))?.room;

  const { isLoading, data: hotels } = useFetchData(
    "http://localhost:5000/hotels",
    `q=${destination || ""}&accommodates_gte=${room || 1}`
  );

  async function getSingleHotel(id) {
    setCurrentLoding(true);
    try {
      const { data } = await instance.get(`hotels/${id}`);
      setCurrentHotel(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setCurrentLoding(false);
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
