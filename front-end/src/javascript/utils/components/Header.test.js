import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";

describe("header", () => {
  let entryPoint;
  beforeEach(() => {
    entryPoint = document.createElement("div");
    ReactDOM.render(<Header />, entryPoint);
  });

  test("renders a header element", () => {
    expect(
      entryPoint.querySelector(".main-header") instanceof HTMLElement
    ).toBeTruthy();
  });
  test("Header contains a h1 element with text content", () => {
    expect(
      entryPoint.querySelector(".main-header__title") instanceof HTMLElement
    ).toBeTruthy();

    expect(entryPoint.querySelector(".main-header__title").textContent).toMatch(
      "Date Night Roulette"
    );
  });
});
