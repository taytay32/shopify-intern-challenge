import React, { useEffect, useState } from "react";
import "./Header.scss";
import magGlass from "../../assets/icons/search-24px.svg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  searchAction,
  searchCallAction,
} from "../../redux/2. actions/searchActions";

export default function Header(props) {
  const [search, setSearch] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchAction(search));
  }, [search, dispatch]);

  const searchMovie = useSelector((state) => state.searchMovie);

  console.log("search query: ", searchMovie);

  const searchForMovie = () => {
    dispatch(searchCallAction(searchMovie));
  };

  const searchCall = useSelector((state) => state.searchCall);

  console.log("search results :", searchCall.movies);

  const moviesNominated = useSelector((state) => state.moviesNominated);
  const { nominatedMovies } = moviesNominated;

  return (
    <header className="header">
      <section className="header__container">
        <Link to="/">
          <h1 className="header__title">The Shoppies</h1>
        </Link>
        <div className="searchWrap">
          <input
            type="text"
            className="searchWrap__input"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Link to="/results">
            <button className="searchWrap__button" onClick={searchForMovie}>
              <img src={magGlass} alt="Search" />
            </button>
          </Link>
        </div>
        <div className="linksWrap">
          <Link to="/" className="linksWrap__link linksWrap__link--active">
            Home
          </Link>
          <Link to="/results" className="linksWrap__link">
            Results
          </Link>
          {nominatedMovies.length > 0 ? (
            <Link to="/nominations" className="linksWrap__link">
              Nominations{" "}
              <span className="numberBadge">{nominatedMovies.length}</span>
            </Link>
          ) : (
            <Link to="/nominations" className="linksWrap__link">
              Nominations
            </Link>
          )}
        </div>
      </section>
    </header>
  );
}
