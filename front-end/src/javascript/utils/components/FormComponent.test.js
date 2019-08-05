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
    expect(
      entryPoint.querySelector(".wheel-form") instanceof HTMLElement
    ).toBeTruthy();
  });
  test("FormComponent contains 2 select elements", () => {
    expect(entryPoint.querySelectorAll("select").length).toEqual(2);
  });
  test("Area select contains 1 option", () => {
    expect(entryPoint.querySelectorAll("option").length).toEqual(1);
  });
});
