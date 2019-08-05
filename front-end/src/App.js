import React from "react";
import RandomPlaceComponent from "./javascript/utils/components/RandomPlaceComponent";
import FormComponent from "./javascript/utils/components/FormComponent";
import Footer from "./javascript/utils/components/Footer";
import Header from "./javascript/utils/components/Header";
import Nav from "./javascript/utils/components/Nav";

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <Nav />
      <FormComponent />
      <RandomPlaceComponent />
      <Footer />
    </div>
  );
};

export default App;
