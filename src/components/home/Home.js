import React, { useEffect } from "react";
import MovieListing from "../movieListing/MovieListing";
import { useDispatch } from "react-redux";
import {
  fetchAsyncMovies,
  fetchAsyncSeries,
} from "../../feature/movie/movieSlice";

const Home = () => {
  const dispatch = useDispatch();

  const movie = 'Netflix';
  const series = 'Harry';
  useEffect(() => {
    dispatch(fetchAsyncMovies(movie));
    dispatch(fetchAsyncSeries(series));
  }, [dispatch]);
  return (
    <div>
      <div className="banner-img"></div>
      <MovieListing />
    </div>
  );
};

export default Home;
