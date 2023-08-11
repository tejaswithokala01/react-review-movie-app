import { useSnackbar } from "notistack";
import { useCallback } from "react";
import useRequest from "./useRequest";

const useMovies = () => {
  const { get } = useRequest();
  const { enqueueSnackbar } = useSnackbar();

  const loadMovies = useCallback(async () => {
    try {
      const { data } = await get("/movies");
      return data;
    } catch (error) {
      enqueueSnackbar(`API failed with error: ${error}`, {
        variant: "error",
      });
    }
  }, [enqueueSnackbar, get]);

  return loadMovies;
};

export default useMovies;
