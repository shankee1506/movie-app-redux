import React, { useEffect } from 'react'
import MovieListing from '../movieListing/MovieListing';
import { useDispatch } from 'react-redux';
import { fetchAsyncMovies,fetchAsyncSeries } from '../../feature/movie/movieSlice';

const Home = () => {

  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(fetchAsyncMovies())
    dispatch(fetchAsyncSeries())
  },[dispatch])
  return (
    <div>
      <div className="banner-img"></div>
      <MovieListing />
      </div>
  )
}

export default Home