import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchAsyncMovieOrShowDetail,removeMovieOrShow
 } from "../../feature/movie/movieSlice";
import '../movieDetail/movieDetail.scss';


const MovieDetail = () => {
  const { imbdID } = useParams();
  const dispatch = useDispatch();
  const detail = useSelector((state) => state.movies.movieOrShowDetail);

  console.log(detail);

  useEffect(() => {
    dispatch(fetchAsyncMovieOrShowDetail(imbdID));

    return () => {
      dispatch(removeMovieOrShow())
    }
  }, [dispatch, imbdID]);
  return (
    <div className="movie-section">
      {Object.keys(detail).length === 0  ? (<div><h2>...Loading</h2></div>):(
        <>
      <div className="section-left">
        <div className="movie-title">{detail.Title}</div>
        <div className="movie-rating">
          <span>
            ImDB Rating <i className="fa fa-star"></i> :{detail.imdbRating}
          </span>
          <span>
            ImDB Votes <i className="fa fa-thumbs-up"></i> :{detail.imdbVotes}
          </span>
          <span>
            Runtime <i className="fa fa-film"></i> :{detail.Runtime}
          </span>
          <span>
            Year <i className="fa fa-calender"></i> :{detail.Year}
          </span>
        </div>
        <div className="movie-plot">{detail.Plot}</div>
        <div className="movie-info">
          <div>
            <span>Director</span>
            <span>{detail.Director}</span>
          </div>
          <div>
          <span>Stars</span>
          <span>{detail.Actors}</span>
          </div>
          <div>
          <span>Generes</span>
          <span>{detail.Genre}</span>
          </div>
          <div>
          <span>Languages</span>
          <span>{detail.Language}</span>
          </div>
          
          <div>
          <span>Languages</span>
          <span>{detail.Language}</span>
          </div>
        </div>
      </div>

      <div className="section-right">
        <img src={detail.Poster} alt={ detail.Title} />
        </div>
        
        </>
      )}
    </div>
  );
};

export default MovieDetail;
