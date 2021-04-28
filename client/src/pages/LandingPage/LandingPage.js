import React from "react";
import "./LandingPage.scss";

export default function LandingPage() {
  return (
    <section className="LandingPage">
      <div className="LandingPageWrap">
        <h3 className="LandingPageWrap__title">Directions:</h3>

        <ul className="directions">
          <li className="directions__item">
            1. Search for your favourite movies!
          </li>
          <li className="directions__item">
            2. Create a personalized list of nominations of up to five movies.
          </li>
          <li className="directions__item">
            3. Remove movies from the list if need be.
          </li>
          <li className="directions__item">
            4. When you're done, you'll be notified!
          </li>
        </ul>
      </div>
    </section>
  );
}
