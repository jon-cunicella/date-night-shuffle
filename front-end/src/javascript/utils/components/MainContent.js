import React from "react";
import PlaceComponent from "./PlaceComponent";
export default function MainContent() {
  return (
    <main className="content">
      <section className="content__item">
        <h1 className="content__title">Big Ball Here</h1>
        <div className="ball-outer">
          <div className="ball-container">
            <div className="ball-inner">
              <p className="ball-content">Stuff</p>
            </div>
          </div>
        </div>
      </section>
      <section className="selected-item">
        <ul className="selected-item__list">
          <PlaceComponent />
        </ul>
      </section>
    </main>
  );
}
