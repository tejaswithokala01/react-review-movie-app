import React, { useCallback, useEffect, useState } from "react";
import MovieTable from "./components/MovieTable";
import ReviewModal from "./components/ReviewModal";
import { useCompany, useMovies, useSubmitMovieReview } from "./hooks";
import { Backdrop, CircularProgress } from "@mui/material";

const MovieApp = () => {
  const [movies, setMovies] = useState([]);
  const [selectedRow, setSelectedRow] = useState([]);

  const [openModal, setOpenModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const loadCompanies = useCompany();
  const loadMovies = useMovies();
  const postMovieReview = useSubmitMovieReview();

  const loadInitial = useCallback(async () => {
    setIsLoading(true);
    const movies = await loadMovies();
    const withCmpnyId = await loadCompanies(movies);
    setMovies(withCmpnyId);
    setIsLoading(false);
  }, [loadCompanies, loadMovies]);

  useEffect(() => {
    if (movies?.length <= 0) {
      loadInitial();
    }
  }, [loadInitial, movies?.length]);

  return (
    <React.Fragment>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <MovieTable
        movies={movies}
        selectedRow={selectedRow}
        setSelectedRow={setSelectedRow}
        setOpenModal={setOpenModal}
      />
      <ReviewModal
        openModal={openModal}
        setOpenModal={setOpenModal}
        postMovieReview={postMovieReview}
        selectedItem={movies?.filter((item) => item?.id === selectedRow[0])}
      />
    </React.Fragment>
  );
};

export default MovieApp;
