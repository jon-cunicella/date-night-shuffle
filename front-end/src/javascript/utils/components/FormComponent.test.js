import React from "react";
import ReactDOM from "react-dom";
import FormComponent from "./FormComponent";

describe.skip("FormComponent", () => {
  let entryPoint;
  beforeEach(() => {
    entryPoint = document.createElement("div");
    ReactDOM.render(<FormComponent />, entryPoint);
  });

  test("renders a form element", () => {
    expect(entryPoint.querySelector(".wheel-form").tagName).toMatch("FORM");
  });

  test("form contains one(1) select element for Areas", () => {
    expect(entryPoint.querySelector(".area-dropdown").tagName).toMatch(
      "SELECT"
    );
  });
});
