import React from "react";
const Header = ({ title }) => {
  return (
    <header className="main-header">
      <h1 className="main-header__title">{title}</h1>
      {/* Add the sick logo */}
    </header>
  );
};
export default Header;
