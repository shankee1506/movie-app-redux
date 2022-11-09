import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "../../components/movieCard/MovieCard";
import '../movieListing/movieListing.scss'

const MovieListing = () => {
  const movies = useSelector((state) => state.movies.movies);
  const series = useSelector((state) => state.movies.series);




  let renderMovies =
    movies.Response === "True" ? (
      movies.Search.map((movie, index) => <MovieCard key={index} data={movie} />)
    ) : (
      <div className="movies-error">
        <h1>{movies.Error} </h1>
      </div>
    );
  
    let renderSeries =
    series.Response === "True" ? (
      series.Search.map((serie, index) => <MovieCard key={index} data={serie} />)
    ) : (
      <div className="movies-error">
        <h1>{series.Error} </h1>
      </div>
    );
  
  
  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>MOVIES</h2>
        <div className="movie-container">
        {renderMovies}
        </div>
      </div>

      <div className="series-list">
        <h2>SERIES</h2>
        <div className="series-container">
        {renderSeries}
        </div>
      </div>
    </div>
  )

};

export default MovieListing;
