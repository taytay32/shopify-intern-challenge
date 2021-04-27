import React, { useState } from "react";
import "./Header.scss";
import magGlass from "../../assets/icons/search-24px.svg";

export default function Header() {
  const [search, setSearch] = useState("");

  return (
    <header className="header">
      <section className="header__container">
        <h1 className="header__title">The Shoppies</h1>
        <div className="searchWrap">
          <input
            type="text"
            className="searchWrap__input"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="searchWrap__button">
            <img src={magGlass} alt="" />
          </button>
        </div>
        <div className="linksWrap">
          <a
            className="linksWrap__link linksWrap__link--active"
            href="#results"
          >
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
