import React from "react";
import ReactDOM from "react-dom";
import Nav from "./Nav";

describe("navigation menu", () => {
  let entryPoint;
  beforeEach(() => {
    entryPoint = document.createElement("div");
    ReactDOM.render(<Nav />, entryPoint);
  });

  test("renders a nav element", () => {
    expect(
      entryPoint.querySelector(".navigation") instanceof HTMLElement
    ).toBeTruthy();
  });
  test("Nav contains a ul element", () => {
    expect(
      entryPoint.querySelector(".navigation-list") instanceof HTMLElement
    ).toBeTruthy();
  });
  test("Nav ul contains 4 list items", () => {
    expect(
      entryPoint.querySelectorAll(".navigation-list__item").length
    ).toEqual(4);
  });
});
