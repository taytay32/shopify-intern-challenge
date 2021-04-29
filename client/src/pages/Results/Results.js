import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import uuid from "react-uuid";
import Movie from "../../components/Movie/Movie";
import "./Results.scss";

export default function Results() {
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [notNominated, setNotNominated] = useState([]);
  //PULLING FROM STATE
  const searchCall = useSelector((state) => state.searchCall);
  let { loading, error, movies } = searchCall;
  const moviesNominated = useSelector((state) => state.moviesNominated);

  const { nominatedMovies } = moviesNominated;

  const searchQuery = useSelector((state) => state.searchQ);

  // LOAD SEARCH FROM API
  useEffect(() => {
    if (movies) {
      setFilteredMovies(
        movies.filter((movie) => {
          return movie.Title.toLowerCase().includes(searchQuery.toLowerCase());
        })
      );
    }
  }, [searchQuery, movies]);

  //FILTERING NOMINATIONS FROM SEARCH RESULTS
  useEffect(() => {
    if (filteredMovies && filteredMovies.length > 0) {
      let newNotNominated = [];

      for (const movie of filteredMovies) {
        const nominatedMovie = nominatedMovies.find((nomMovie) => {
          return nomMovie.imdbID === movie.imdbID;
        });
        if (!nominatedMovie) {
          newNotNominated.push(movie);
          setNotNominated(newNotNominated);
        } else {
          setNotNominated([]);
        }
      }
    }
  }, [filteredMovies, nominatedMovies]);

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
            {notNominated &&
              notNominated.map((movie) => {
                return <Movie movie={movie} key={uuid()} />;
              })}
          </div>
        </>
      )}
    </section>
  );
}
