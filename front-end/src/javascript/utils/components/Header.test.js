import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";

describe("Header", () => {
  let entryPoint;
  beforeEach(() => {
    entryPoint = document.createElement("div");
    ReactDOM.render(<Header />, entryPoint);
  });

  test("renders a Header element", () => {
    expect(entryPoint.querySelector(".main-header").tagName).toMatch("HEADER");
  });
});
