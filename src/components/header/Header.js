import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import user from '../../images/user.png';
import '../header/header.scss';
import {fetchAsyncMovies,fetchAsyncSeries} from '../../feature/movie/movieSlice'

const Header = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch()
  const getInput = (e) => {
    e.preventDefault();
    if (input === '')
      return alert('Please enter any item');
    dispatch(fetchAsyncMovies(input));
    dispatch(fetchAsyncSeries(input));
  }
  return (
    <div className="header">
    
    <div className="logo"><Link to="/">Movie App </Link></div>
      <div className="movie-search">
        <form onSubmit={getInput}>
          <input type='text' value={input} placeholder="Search the Movie or Series" onChange={(e) => {setInput(e.target.value)}} />
          <button type="submit"> <i className="fa fa-search"></i></button>
        </form>
      
      </div>

      <div className="user-image">
        <img src={user} alt="user" />
      </div>
    </div>
  );
};

export default Header;
