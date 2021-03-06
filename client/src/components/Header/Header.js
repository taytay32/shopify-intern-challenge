import React, { useEffect, useState } from "react";
import "./Header.scss";
import magGlass from "../../assets/icons/search-24px.svg";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  searchCallAction,
  searchQuery,
} from "../../redux/2. actions/searchActions";

const Header = (props) => {
  const [search, setSearch] = useState("");

  const dispatch = useDispatch();

  const searchForMovie = () => {
    dispatch(searchCallAction(search));
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      dispatch(searchCallAction(search));
    }
  };

  useEffect(() => {
    dispatch(searchQuery(search));
  }, [search, dispatch]);

  const moviesNominated = useSelector((state) => state.moviesNominated);
  const { nominatedMovies } = moviesNominated;

  return (
    <header className="header">
      <section className="header__container">
        <Link to="/" className="header__titleLink">
          <h1 className="header__title">The Shoppies</h1>
        </Link>
        <div className="searchWrap">
          <input
            type="text"
            className="searchWrap__input"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={handleKeyDown}
          />

          <Link to="/results">
            <button className="searchWrap__button" onClick={searchForMovie}>
              <img src={magGlass} alt="Search" />
            </button>
          </Link>
        </div>

        <nav className="linksWrap">
          <NavLink
            exact
            to="/"
            className="linksWrap__link linksWrap__linkHome"
            activeClassName="linksWrap__link--active"
          >
            Home
          </NavLink>
          <NavLink
            to="/results"
            className="linksWrap__link"
            activeClassName="linksWrap__link--active"
          >
            Results
          </NavLink>
          {nominatedMovies.length > 0 ? (
            <NavLink
              to="/nominations"
              className="linksWrap__link"
              activeClassName="linksWrap__link--active"
            >
              Nominations{" "}
              <span className="numberBadge">{nominatedMovies.length}</span>
            </NavLink>
          ) : (
            <NavLink
              to="/nominations"
              className="linksWrap__link"
              activeClassName="linksWrap__link--active"
            >
              Nominations
            </NavLink>
          )}
        </nav>
      </section>
    </header>
  );
};

export default Header;
