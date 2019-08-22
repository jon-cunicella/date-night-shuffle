import React from "react";
import FormComponent from "./FormComponent";
const Header = ({ areas, getArea }) => {
  return (
    <header className="main-header">
      <FormComponent areas={areas} getArea={getArea} />
    </header>
  );
};
export default Header;
