import { useCallback } from "react";
import useRequest from "./useRequest";

const useSubmitMovieReview = (review) => {
  const { post, response } = useRequest();

  const postMovieReview = useCallback(async () => {
    post("/submitReview", { review });
    if (response.ok) {
      return { ok: true }
    }
  }, [post, response, review]);

  return postMovieReview;
};

export default useSubmitMovieReview;
