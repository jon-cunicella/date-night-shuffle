import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children, areas, getArea, getUserSelectedPrice }) => (
  <>
    <Header
      areas={areas}
      getArea={getArea}
      getUserSelectedPrice={getUserSelectedPrice}
    />
    {children}
    <Footer />
  </>
);

export default Layout;
