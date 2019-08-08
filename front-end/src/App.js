import React, { useEffect, useState } from "react";
import Layout from "./javascript/utils/components/Layout";
import PlaceCardList from "./javascript/utils/components/PlaceCardList";

const App = () => {
  const [places, setPlaces] = useState([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    fetch("http://localhost:4000/api/places")
      //Change the fetch to get a single area and add it to this.state
      .then(res => res.json())
      .then(places => setPlaces(places));
    // Dynamic titles based on the fetch or 'page'
    setTitle("Date Night Roulette");
  }, []);
  return (
    <div className="wrapper">
      <Layout title={title}>
        <PlaceCardList places={places} />
      </Layout>
    </div>
  );
};
export default App;
