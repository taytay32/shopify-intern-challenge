import React from "react";
import { useSelector } from "react-redux";
import uuid from "react-uuid";
import Movie from "../../components/Movie/Movie";
import "./Results.scss";

export default function Results() {
  //PULLING FROM STATE
  const searchCall = useSelector((state) => state.searchCall);
  let { loading, error, movies } = searchCall;
  const moviesNominated = useSelector((state) => state.moviesNominated);

  //FILTERING NOMINATIONS FROM SEARCH RESULTS
  let notNominated = [];
  if (movies) {
    for (const movie of movies) {
      const nominatedMovie = moviesNominated.nominatedMovies.find(
        (nomMovie) => {
          return nomMovie.Title === movie.Title;
        }
      );
      if (!nominatedMovie) {
        notNominated.push(movie);
      }
    }
  }
  movies = [...notNominated];

  return (
    <section className="results">
      <h1 className="results__title">Search Results</h1>

      {!movies || movies.length === 0 ? (
        <p className="results__searchEmpty">
          Afraid there are no movies by that title!
        </p>
      ) : loading ? (
        <p className="results__loading">Loading...</p>
      ) : error ? (
        <p className="results__error">There has been an error</p>
      ) : (
        <>
          <div className="moviesContainer">
            {movies &&
              movies.map((movie) => {
                return <Movie movie={movie} key={uuid()} />;
              })}
          </div>
        </>
      )}
    </section>
  );
}
