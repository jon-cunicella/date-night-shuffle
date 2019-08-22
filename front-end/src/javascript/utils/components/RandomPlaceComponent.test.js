import React from "react";
import ReactDOM from "react-dom";
import RandomPlaceComponent from "./RandomPlaceComponent";

describe("RandomPlaceComponent", () => {
  let entryPoint;
  beforeEach(() => {
    entryPoint = document.createElement("div");
    ReactDOM.render(<RandomPlaceComponent />, entryPoint);
  });

  test("renders a main element", () => {
    expect(entryPoint.querySelector(".content").tagName).toMatch("MAIN");
  });

  test("main contains a section element", () => {
    expect(entryPoint.querySelector(".content__item").tagName).toMatch(
      "SECTION"
    );
  });

  test("section contains a h3 element", () => {
    expect(entryPoint.querySelector(".restaurant-content").tagName).toMatch(
      "H3"
    );
    // expecting the content of h3 to be a string for the restaurant name.
    expect(entryPoint.querySelector(".restaurant-content").textContent).toBe(
      ""
    );
  });

  test("section contains a ul element", () => {
    expect(entryPoint.querySelector(".placeInfo").tagName).toMatch("UL");
  });

  test("ul contains a list item for price", () => {
    expect(entryPoint.querySelector(".placeInfo__price").tagName).toMatch("LI");
    expect(entryPoint.querySelector(".placeInfo__price").textContent).toBe(
      "Price: "
    );
  });

  test("ul contains a list item for category", () => {
    expect(entryPoint.querySelector(".placeInfo__category").tagName).toMatch(
      "LI"
    );
    expect(entryPoint.querySelector(".placeInfo__category").textContent).toBe(
      "Category: "
    );
  });

  test("ul contains a list item for rating", () => {
    expect(entryPoint.querySelector(".placeInfo__rating").tagName).toMatch(
      "LI"
    );
    expect(entryPoint.querySelector(".placeInfo__rating").textContent).toBe(
      "Rating: someNumber"
    );
  });
});
