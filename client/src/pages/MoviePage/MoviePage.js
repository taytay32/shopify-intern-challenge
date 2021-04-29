import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  movieDetails,
  nominateMovie,
  searchCallAction,
} from "../../redux/2. actions/searchActions";
import "./moviePage.scss";

export default function MoviePage(props) {
  const movieID = props.match.params.id;
  console.log(movieID);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(movieDetails(movieID));
  }, [dispatch, movieID]);

  const movieSelected = useSelector((state) => state.movieSelected);
  const { loading, movie, error } = movieSelected;
  console.log(movie);

  const nominate = () => {
    dispatch(nominateMovie(movie));
  };

  const goBack = () => {
    props.history.goBack();
  };

  return (
    <section className="moviePage">
      <div className="moviePage__wrap">
        {loading ? (
          <p className="moviePage__loading">Loading...</p>
        ) : error ? (
          <p className="moviePage__error">There has been an error</p>
        ) : (
          <>
            <h1 className="moviePage__title">{movie.Title}</h1>
            <p className="moviePage__year"> {movie.Year}</p>
            <div className="movieContainer">
              <img
                className="movieContainer__img"
                src={movie.Poster}
                alt={movie.Title}
              />

              <div className="movieContainer__info">
                <p className="movieContainer__blurb">
                  <strong>Starring:</strong> {movie.Actors}
                </p>
                <p className="movieContainer__blurb">
                  {" "}
                  <strong>Genre:</strong> {movie.Genre}
                </p>
                <p className="movieContainer__blurb">
                  <strong>IMDB Rating:</strong> {movie.imdbRating}
                </p>
                <p className="movieContainer__blurb">
                  <strong>Plot: </strong>
                  {movie.Plot}
                </p>

                <Link to="/nominations" className="link">
                  <button className="movieContainer__button" onClick={nominate}>
                    NOMINATE
                  </button>
                </Link>
                <button className="movieContainer__button" onClick={goBack}>
                  BACK TO RESULTS
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
