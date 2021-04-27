import React, { useState } from "react";
import "./Header.scss";
import magGlass from "../../assets/icons/search-24px.svg";
import { Link } from "react-router-dom";
import axios from "axios";
import { API_URL, API_KEY } from "../../Utils";

export default function Header(props) {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);

  const searchForMovie = () => {
    axios
      .get(`${API_URL}${search}${API_KEY}`)
      .then((res) => {
        setData(res.data.Search);
        setSearch("");
      })
      .catch((error) => {
        console.log("Request failed");
      });
  };

  console.log(data);
  console.log(search);

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
