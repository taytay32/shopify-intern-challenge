import React, { useEffect, useState } from "react";
import "./Header.scss";
import magGlass from "../../assets/icons/search-24px.svg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  activateHome,
  activateNominations,
  activateResults,
  searchAction,
  searchCallAction,
} from "../../redux/2. actions/searchActions";

export default function Header(props) {
  const [search, setSearch] = useState("");

  const homeLink = useSelector((state) => state.activateHome);
  console.log("home link: ", homeLink);

  const resultsLink = useSelector((state) => state.activateResults);
  console.log("results link: ", resultsLink);

  const nominationsLink = useSelector((state) => state.activateNominations);
  console.log("nom link: ", nominationsLink);

  const dispatch = useDispatch();

  const activateHomeLink = () => {
    dispatch(activateHome());
  };

  const activateResultsLink = () => {
    dispatch(activateResults());
  };

  const activateNominationsLink = () => {
    dispatch(activateNominations());
  };

  //SEARCH FUNCTIONALITY
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
        <Link to="/" onClick={activateHomeLink}>
          <h1 className="header__title">The Shoppies</h1>
        </Link>
        <div className="searchWrap">
          <input
            type="text"
            className="searchWrap__input"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Link to="/results" onClick={activateResultsLink}>
            <button className="searchWrap__button" onClick={searchForMovie}>
              <img src={magGlass} alt="Search" />
            </button>
          </Link>
        </div>
        <div className="linksWrap">
          <Link to="/" className={homeLink} onClick={activateHomeLink}>
            Home
          </Link>
          <Link
            to="/results"
            className={resultsLink}
            onClick={activateResultsLink}
          >
            Results
          </Link>
          {nominatedMovies.length > 0 ? (
            <Link
              to="/nominations"
              className={nominationsLink}
              onClick={activateNominationsLink}
            >
              Nominations{" "}
              <span className="numberBadge">{nominatedMovies.length}</span>
            </Link>
          ) : (
            <Link
              to="/nominations"
              className={nominationsLink}
              onClick={activateNominationsLink}
            >
              Nominations
            </Link>
          )}
        </div>
      </section>
    </header>
  );
}
