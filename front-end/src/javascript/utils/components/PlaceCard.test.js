import React from "react";
import ReactDOM from "react-dom";
import PlaceCard from "./PlaceCard";

describe.skip("PlaceCard Component", () => {
  let entryPoint;
  beforeEach(() => {
    entryPoint = document.createElement("div");
    ReactDOM.render(<PlaceCard />, entryPoint);
  });

  test("renders a container div with className 'card-wrapper'", () => {
    expect(entryPoint.querySelector(".card-wrapper").tagName).toMatch("DIV");
  });

  test("card wrapper contains a overlay div", () => {
    expect(entryPoint.querySelector(".overlay").tagName).toMatch("DIV");
  });

  test("overlay contains a h3 element", () => {
    expect(entryPoint.querySelector(".place-card__title").tagName).toMatch(
      "H3"
    );
    // expecting the content of h3 to be a string for the restaurant name.
    expect(entryPoint.querySelector(".restaurant-content").textContent).toBe(
      String
    );
  });

  test("overlay contains a div element housing card content", () => {
    expect(entryPoint.querySelector(".card-content").tagName).toMatch("DIV");
  });
});
