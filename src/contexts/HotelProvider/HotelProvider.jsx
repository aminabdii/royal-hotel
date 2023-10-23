import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
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
  const [loading, setLoading] = useState(true);

  const [searchParams, setSearchParams] = useSearchParams();
  const destination = searchParams.get("destination");
  const room = JSON.parse(searchParams.get("options"))?.room;

  const { isLoading, data: hotels } = useFetchData(
    "https://amnabdi.pythonanywhere.com/hotels/",
    `q=${destination || ""}&accommodates_gte=${room || 1}`
  );

  async function getSingleHotel(id) {
    setCurrentLoding(true);
    try {
      const { data } = await axios.get(
        `https://amnabdi.pythonanywhere.com/hotel/${id}`
      );
      setCurrentHotel(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setCurrentLoding(false);
    }
  }

  useEffect(() => {
    async function fetchdata() {
      try {
        const { data } = await axios.get(
          "https://amnabdi.pythonanywhere.com/hotels/"
        );
        console.log(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    fetchdata();
  }, []);

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
