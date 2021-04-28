import React, { useState } from "react";
import { useSelector } from "react-redux";
import uuid from "react-uuid";
import Nomination from "../../components/Nomination/Nomination";
import "./Nominations.scss";

export default function Results() {
  const [modal, setModal] = useState(true);

  const moviesNominated = useSelector((state) => state.moviesNominated);
  const { nominatedMovies } = moviesNominated;
  console.log(nominatedMovies);

  const removeNotification = () => {
    setModal(false);
  };

  let notification;
  if (modal) {
    notification = (
      <div className="notification">
        <div className="notification__info">
          <p className="notification__blurb">
            Congratulations! You have finished your list of nominations.
          </p>
          <button className="notification__btn" onClick={removeNotification}>
            VIEW LIST
          </button>
        </div>
      </div>
    );
  }

  return (
    <section className="nominations">
      {nominatedMovies.length === 5 ? notification : null}

      {nominatedMovies.length === 0 ? (
        <>
          <h1 className="nominations__title">Nominations</h1>
          <p className="nominations__none">
            You have yet to nominate any movies, how about making a search?
          </p>
        </>
      ) : (
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
      )}
    </section>
  );
}
