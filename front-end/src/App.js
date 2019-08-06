import React, { useEffect, useState } from "react";
import RandomPlaceComponent from "./javascript/utils/components/RandomPlaceComponent";
import FormComponent from "./javascript/utils/components/FormComponent";
import Layout from "./javascript/utils/components/Layout";
import PlaceCardList from "./javascript/utils/components/PlaceCardList";

const App = () => {
  const [places, setPlaces] = useState([]);
  const [title, setTitle] = useState("Places!!!");

  useEffect(() => {
    fetch("http://localhost:4000/api/places")
      .then(res => res.json())
      .then(places => setPlaces(places));
  }, []);
  return (
    <div className="wrapper">
      <Layout title={title}>
        <PlaceCardList places={places} />
        <FormComponent />
        <RandomPlaceComponent />
      </Layout>
    </div>
  );
};
export default App;
