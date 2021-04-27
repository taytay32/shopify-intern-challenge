import React, { useState } from "react";
import magGlass from "../assets/icons/search-24px.svg";
import axios from "axios";
import "./Header/Header.scss";
import { API_URL, API_KEY } from "../Utils";
import uuid from "react-uuid";

export default function Test() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);

  const searchForMovie = () => {
    axios
      .get(`${API_URL}${search}${API_KEY}`)
      .then((res) => {
        setData(res.data.Search);
      })
      .catch((error) => {
        console.log("Request failed");
      });
  };

  console.log(data);
  return (
    <div>
      <h1>Hey</h1>
      <div className="searchWrap">
        <input
          type="text"
          className="searchWrap__input"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="searchWrap__button" onClick={searchForMovie}>
          <img src={magGlass} alt="" />
        </button>
      </div>
      <div>
        {data.map((dat) => {
          return (
            <div key={uuid()}>
              <li>
                <img src={dat.Poster} alt={dat.Title} />
              </li>
              <li>{dat.Title}</li>
              <li>{dat.Year}</li>
              <button>NOMINATE</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
