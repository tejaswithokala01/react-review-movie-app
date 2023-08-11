import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import MovieApp from "./MovieApp";
import {
  useCompany,
  useMovies,
  useSubmitMovieReview,
} from "./hooks";

// Mock the custom hooks
jest.mock("./hooks");

describe("MovieApp", () => {
  beforeEach(() => {
    // Reset the mock implementation of hooks before each test
    jest.resetAllMocks();
  });

  test.skip("renders MovieTable and ReviewModal components", async () => {
    // Mock the responses of custom hooks
    useCompany.mockResolvedValueOnce([]);
    useMovies.mockResolvedValueOnce([]);
    useSubmitMovieReview.mockReturnValueOnce(jest.fn());

    render(<MovieApp />);

    // Check if MovieTable component is rendered
    await waitFor(() => {
      expect(screen.getByTestId("movie-table")).toBeInTheDocument();
    });

    // Check if ReviewModal component is rendered
    await waitFor(() => {
      expect(screen.getByTestId("review-modal")).toBeInTheDocument();
    });
  });

  test.skip("loads movies and companies on initialization", async () => {
    // Mock the responses of custom hooks
    const mockLoadMovies = jest.fn().mockResolvedValue([]);
    const mockLoadCompanies = jest.fn().mockResolvedValue([]);
    useMovies.mockReturnValueOnce(mockLoadMovies);
    useCompany.mockReturnValueOnce(mockLoadCompanies);
    useSubmitMovieReview.mockReturnValueOnce(jest.fn());

    render(<MovieApp />);

    // Check if loadMovies and loadCompanies are called
    await waitFor(() => {
      expect(mockLoadMovies).toHaveBeenCalledTimes(1);
      expect(mockLoadCompanies).toHaveBeenCalledTimes(1);
    });
  });
});
