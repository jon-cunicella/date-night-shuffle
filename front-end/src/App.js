import React from "react";
import MainContent from "./javascript/utils/components/MainContent";
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
      <MainContent />
      <Footer />
    </div>
  );
};

export default App;
