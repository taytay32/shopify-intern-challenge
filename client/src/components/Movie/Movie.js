import React from "react";
import "../../pages/Results/Results.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  nominateMovie,
  movieDetails,
} from "../../redux/2. actions/searchActions";
import { Link } from "react-router-dom";

export default function Movie({ movie }) {
  const moviesNominated = useSelector((state) => state.moviesNominated);
  const { nominatedMovies } = moviesNominated;
  console.log(nominatedMovies);
  console.log(nominatedMovies.length);

  const dispatch = useDispatch();
  const nominate = () => {
    dispatch(nominateMovie(movie));
  };

  const details = () => {
    dispatch(movieDetails(movie.imdbID));
  };

  return (
    <div className="movie">
      <img className="movie__poster" src={movie.Poster} alt={movie.Title} />

      <div className="movie__info">
        <h2 className="movie__title">{movie.Title}</h2>
        <h2 className="movie__year">{movie.Year}</h2>
      </div>
      <Link to={`/movies/${movie.imdbID}`} className="link">
        <button className="movie__button" onClick={details}>
          DETAILS
        </button>
      </Link>
      {nominatedMovies.length < 5 && (
        <Link to="/nominations" className="link">
          <button className="movie__button" onClick={nominate}>
            NOMINATE
          </button>
        </Link>
      )}
    </div>
  );
}
