import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children, areas, getArea }) => (
  <>
    <Header areas={areas} getArea={getArea} />
    {children}
    <Footer />
  </>
);

export default Layout;
