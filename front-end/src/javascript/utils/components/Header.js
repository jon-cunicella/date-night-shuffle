import React from 'react';
import FormComponent from './FormComponent';
const Header = ({ areas, getArea, getUserSelectedPrice }) => {
  return (
    <header className="main-header">
      <FormComponent
        areas={areas}
        getArea={getArea}
        getUserSelectedPrice={getUserSelectedPrice}
      />
    </header>
  );
};
export default Header;
