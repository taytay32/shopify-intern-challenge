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
          <a
            className="linksWrap__link linksWrap__link--active"
            href="#results"
          >
            Home
          </a>
          <a className="linksWrap__link" href="#results">
            Results
          </a>
          <a className="linksWrap__link" href="#nominations">
            Nominations
          </a>
        </div>
      </section>
    </header>
  );
}
