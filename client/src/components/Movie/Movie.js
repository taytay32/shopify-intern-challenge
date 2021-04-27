import React from "react";
import "../../pages/Results/Results.scss";

export default function Movie({ movie }) {
  const nominate = () => {};

  return (
    <div className="movie">
      <img className="movie__poster" src={movie.Poster} alt={movie.Title} />

      <div className="movie__info">
        <h2 className="movie__title">{movie.Title}</h2>
        <h2 className="movie__year">{movie.Year}</h2>
      </div>
      <button className="movie__button" onClick={nominate}>
        Nominate
      </button>
    </div>
  );
}
