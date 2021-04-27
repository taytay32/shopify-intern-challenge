import React from "react";
import { useSelector } from "react-redux";
import uuid from "react-uuid";
import Nomination from "../../components/Nomination/Nomination";
import "./Nominations.scss";

export default function Results() {
  const moviesNominated = useSelector((state) => state.moviesNominated);
  const { nominatedMovies } = moviesNominated;
  console.log(nominatedMovies);

  return (
    <section className="nominations">
      {nominatedMovies.length > 0 ? (
        <>
          <h1 className="nominations__title">
            Nominations <span> ({nominatedMovies.length})</span>
          </h1>
          <div className="nominationsContainer">
            {nominatedMovies.map((movie) => {
              return <Nomination movie={movie} key={uuid()} />;
            })}
          </div>
        </>
      ) : (
        <>
          <h1 className="nominations__title">Nominations</h1>
          <p className="nominations__none">
            You have yet to nominate any movies, how about making a search?
          </p>
        </>
      )}
    </section>
  );
}
