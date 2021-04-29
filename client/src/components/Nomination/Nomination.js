import React from "react";
import "../../pages/Results/Results.scss";
import { useDispatch, useSelector } from "react-redux";
import "../../pages/Nominations/Nominations.scss";
import { removeNominatedMovie } from "../../redux/2. actions/searchActions";

export default function Movie({ movie }) {
  console.log(movie);

  const dispatch = useDispatch();
  const removeNomination = () => {
    dispatch(removeNominatedMovie(movie));
  };

  const moviesNominated = useSelector((state) => state.moviesNominated);
  console.log(moviesNominated);
  const { nominatedMovies } = moviesNominated;
  console.log(nominatedMovies);

  return (
    <div className="nomination">
      <img
        className="nomination__poster"
        src={movie.Poster}
        alt={movie.Title}
      />

      <div className="nomination__info">
        <h2 className="nomination__title">{movie.Title}</h2>
        <h2 className="nomination__year">{movie.Year}</h2>
      </div>

      <button className="nomination__button" onClick={removeNomination}>
        REMOVE
      </button>
    </div>
  );
}
