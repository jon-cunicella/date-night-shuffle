import React from "react";
import ReactDOM from "react-dom";
import FormComponent from "./FormComponent";

describe("FormComponent", () => {
  let entryPoint;
  beforeEach(() => {
    entryPoint = document.createElement("div");
    ReactDOM.render(<FormComponent />, entryPoint);
  });

  test("renders a form element", () => {
    expect(entryPoint.querySelector(".wheel-form").tagName).toMatch("FORM");
  });

  test("form contains 2 select elements and a button", () => {
    expect(entryPoint.querySelectorAll("select").length).toEqual(2);
    expect(entryPoint.querySelector("button").tagName).toMatch("BUTTON");
  });

  test("price selector contains 3 options", () => {
    const priceSelect = entryPoint.querySelector("#price-dropdown");
    expect(priceSelect.querySelectorAll("option").length).toEqual(3);
  });
});
