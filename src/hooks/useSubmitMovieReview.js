import { useSnackbar } from "notistack";
import { useCallback } from "react";
import useRequest from "./useRequest";

const useSubmitMovieReview = (review) => {
  const { enqueueSnackbar } = useSnackbar();

  const { post } = useRequest();

  const postMovieReview = useCallback(async () => {
    try {
      const { data } = await post("/submitReview", { review });
      enqueueSnackbar(data.message, {
        variant: "success",
      });
      return { ok: true };
    } catch (error) {
      enqueueSnackbar(`API failed with error: ${error}`, {
        variant: "error",
      });
    }
  }, [enqueueSnackbar, post, review]);

  return postMovieReview;
};

export default useSubmitMovieReview;
