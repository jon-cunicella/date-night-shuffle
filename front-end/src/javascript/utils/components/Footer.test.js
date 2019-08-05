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
    expect(
      entryPoint.querySelector(".copy") instanceof HTMLElement
    ).toBeTruthy();
  });
});
