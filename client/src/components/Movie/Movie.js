import React from "react";
import "../../pages/Results/Results.scss";
import { useDispatch, useSelector } from "react-redux";
import { nominateMovie } from "../../redux/2. actions/searchActions";
import { Link } from "react-router-dom";

export default function Movie({ movie }) {
  console.log(movie);
  const dispatch = useDispatch();
  const nominate = () => {
    dispatch(nominateMovie(movie));
  };

  const moviesNominated = useSelector((state) => state.moviesNominated);
  console.log(moviesNominated);

  return (
    <div className="movie">
      <img className="movie__poster" src={movie.Poster} alt={movie.Title} />

      <div className="movie__info">
        <h2 className="movie__title">{movie.Title}</h2>
        <h2 className="movie__year">{movie.Year}</h2>
      </div>
      <Link to="/nominations">
        <button className="movie__button" onClick={nominate}>
          NOMINATE
        </button>
      </Link>
    </div>
  );
}
