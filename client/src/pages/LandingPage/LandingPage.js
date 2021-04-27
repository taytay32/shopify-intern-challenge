import React from "react";
import "./LandingPage.scss";

export default function LandingPage() {
  return (
    <section className="LandingPage">
      <div className="LandingPageWrap">
        {/* <h3 className="LandingPageWrap__Title">
          Create your nomination list for <br />
        </h3>
        <h3 className="shoppies">The Shoppies!</h3> */}
        <ul className="directions">
          <li className="directions__item">1. Search your favourite movies</li>
          <li className="directions__item">2. Add them to the list</li>
          <li className="directions__item">3. Edit list if need be</li>
        </ul>
      </div>
    </section>
  );
}
