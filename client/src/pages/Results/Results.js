import React from "react";
import { useSelector } from "react-redux";
import Movie from "../../components/Movie/Movie";
import "./Results.scss";

export default function Results() {
  const searchCall = useSelector((state) => state.searchCall);
  const { loading, error, movies } = searchCall;
  console.log("search results :", searchCall.movies);

  console.log(movies);

  return (
    <section className="results">
      <h1 className="results__title">Search Results</h1>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>There has been an error</p>
      ) : (
        <>
          <div className="moviesContainer">
            {movies.map((movie) => {
              return <Movie movie={movie} key={movie.imdbID} />;
            })}
          </div>
        </>
      )}
    </section>
  );
}
