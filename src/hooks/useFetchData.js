import axios from "axios";
import React, { useEffect, useState } from "react";

const BASE_URL = "https://amnabdi.pythonanywhere.com/api";

const instance = axios.create({
  baseURL: BASE_URL,
});

const useFetchData = (axiosParams) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  async function fetchData() {
    try {
      const { data } = await instance.request(axiosParams);
      setData(data);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, [axiosParams.url]);

  return [isLoading, data, error];
};

export default useFetchData;
