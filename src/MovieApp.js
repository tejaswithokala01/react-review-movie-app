import React, { useCallback, useEffect, useState } from "react";
import { dummyMovies } from "./constants";
import MovieTable from "./components/MovieTable";
import ReviewModal from "./components/ReviewModal";
import {
  useCompany,
  useMovies,
  useRequest,
  useSubmitMovieReview,
} from "./hooks";
import { useSnackbar } from "notistack";
import { Backdrop, CircularProgress } from "@mui/material";

const MovieApp = () => {
  const [movies, setMovies] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  const loadCompanies = useCompany();
  const loadMovies = useMovies();
  const postMovieReview = useSubmitMovieReview();

  const { loading, error } = useRequest();

  const { enqueueSnackbar } = useSnackbar();

  const loadInitial = useCallback(async () => {
    const movies = await loadMovies();
    setMovies(movies);
    const moviesWithCompanyName = await loadCompanies(movies);
    setMovies(moviesWithCompanyName);
  }, [loadCompanies, loadMovies]);

  useEffect(() => {
    loadInitial();
  }, [loadInitial]);

  if (error) {
    enqueueSnackbar(`API failed with error: ${error}`, {
      variant: "error",
    });
  }

  return (
    <React.Fragment>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <MovieTable movies={dummyMovies} setOpenModal={setOpenModal} />
      <ReviewModal
        openModal={openModal}
        setOpenModal={setOpenModal}
        postMovieReview={postMovieReview}
      />
    </React.Fragment>
  );
};

export default MovieApp;
