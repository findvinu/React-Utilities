import axios from "axios";
import React, { useState, useEffect } from "react";
// import useFetch from 'react-fetch-hook';

export default function useFetch(method, url, body) {
  const [isLoading, setIsLoading] = useState(false);
  const [apiData, setApiData] = useState([]);
  const [apiError, setApiError] = useState("");

  useEffect(() => {
    setIsLoading(true);

    const fetchData = async () => {
      try {
        const response = await axios({
          method,
          url,
          body,
        });

        const data = await response?.data;

        setApiData(data);
        setIsLoading(false);
      } catch (error) {
        setApiError(error);
        setIsLoading(false);
      }
    };

    fetchData()
    
  }, [isLoading, apiData, apiError]);
  return { isLoading, apiData, apiError };
}
