import axios from "axios";
import { useEffect, useState } from "react";

const useFetchData = (url, query = "") => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    async function getData() {
      setIsLoading(false);
      try {
        const { data } = await axios.get(`${url}?${query}`);
        setData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    getData();
  }, [url, query]);

  return { isLoading, data };
};

export default useFetchData;
