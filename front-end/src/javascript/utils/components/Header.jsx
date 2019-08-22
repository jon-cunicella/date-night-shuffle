import React from "react";
import FormComponent from "./FormComponent";

const Header = ({
  areas,
  getArea,
  getUserSelectedPrice,
  handleRandomModal
}) => {
  return (
    <header className="main-header">
      <FormComponent
        areas={areas}
        getArea={getArea}
        getUserSelectedPrice={getUserSelectedPrice}
        handleRandomModal={handleRandomModal}
      />
    </header>
  );
};
export default Header;
