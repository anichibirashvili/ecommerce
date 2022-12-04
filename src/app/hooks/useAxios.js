import  { useEffect, useState } from "react";
import { instance } from "../instance";

export const useAxios = (url) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const getData = async (url) => {
    try {
      setIsLoading(true);
      const { data } = await instance.get(url);
      setData(data);
} catch (error) {
  setError(error.message);
} finally {
  setIsLoading(false);
}


  }

  useEffect(() => {
    getData(url);
  }, [url]);
  
  return {
    data,
    isLoading,
    error,
    getData
  };
};

export default useAxios;