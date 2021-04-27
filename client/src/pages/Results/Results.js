import React from "react";
import { useSelector } from "react-redux";
import uuid from "react-uuid";
import Movie from "../../components/Movie/Movie";
import "./Results.scss";

export default function Results() {
  const searchCall = useSelector((state) => state.searchCall);
  const { loading, error, movies } = searchCall;
  console.log("search results :", searchCall.movies);
  console.log(movies);

  const searchMovie = useSelector((state) => state.searchMovie);

  const moviesNominated = useSelector((state) => state.moviesNominated);
  console.log(moviesNominated);

  return (
    <section className="results">
      <h1 className="results__title">Search Results</h1>
      {searchMovie === "" ? (
        <p className="results__searchEmpty">Don't forget to enter a search!</p>
      ) : loading ? (
        <p className="results__loading">Loading...</p>
      ) : error ? (
        <p className="results__error">There has been an error</p>
      ) : (
        <>
          <div className="moviesContainer">
            {movies.map((movie) => {
              return <Movie movie={movie} key={uuid()} />;
            })}
          </div>
        </>
      )}
    </section>
  );
}
