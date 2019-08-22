import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({
  children,
  areas,
  getArea,
  getUserSelectedPrice,
  handleRandomModal
}) => (
  <>
    <Header
      areas={areas}
      getArea={getArea}
      getUserSelectedPrice={getUserSelectedPrice}
      handleRandomModal={handleRandomModal}
    />
    {children}
    <Footer />
  </>
);

export default Layout;
