import React from "react";
import ReactDOM from "react-dom";
import Footer from "./Footer";

describe("footer", () => {
  let entryPoint;
  beforeEach(() => {
    entryPoint = document.createElement("div");
    ReactDOM.render(<Footer />, entryPoint);
  });

  test("renders a footer element", () => {
    expect(
      entryPoint.querySelector(".footer") instanceof HTMLElement
    ).toBeTruthy();
  });
  test("footer contains a small tag with copyright", () => {
    expect(entryPoint.querySelector(".copy").tagName).toMatch("SMALL");

    expect(entryPoint.querySelector(".copy").textContent).toBe(
      `© 2019 - Date Night Roulette`
    );
  });
});
