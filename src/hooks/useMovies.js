import { useCallback } from "react";
import useRequest from "./useRequest";

const useMovies = () => {
  const { get, response } = useRequest();

  const loadMovies = useCallback(async () => {
    const data = await get("/movies");
    if (response.ok) {
      return { data }
    }
  }, [get, response]);

  return loadMovies;
};

export default useMovies;
