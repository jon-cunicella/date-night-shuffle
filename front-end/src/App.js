import React, { useEffect, useState } from "react";
import Layout from "./javascript/utils/components/Layout";
import PlaceCardList from "./javascript/utils/components/PlaceCardList";

const App = () => {
  const [areas, setAreas] = useState([]);
  const [area, setArea] = useState({ places: [] });
  const [userSelectedPrice, setUserSelectedPrice] = useState();
  const [randomPlace, setRandomPlace] = useState({});

  useEffect(() => {
    fetch("http://localhost:4000/api/areas")
      .then(res => res.json())
      .then(areas => setAreas(areas));
  }, []);

  const updateRandomPlace = userAreaId => {
    fetch(`http://localhost:4000/api/areas/${userAreaId}/random`)
      .then(res => res.json())
      .then(randomPlace => setRandomPlace(randomPlace));
    console.log({ randomPlace });
  };

  const getArea = userAreaId => {
    fetch(`http://localhost:4000/api/areas/${userAreaId}`)
      .then(res => res.json())
      .then(area => setArea(area));
  };

  const getUserSelectedPrice = userSelectedPrice => {
    setUserSelectedPrice(userSelectedPrice);
  };

  return (
    <div className="wrapper">
      <Layout
        areas={areas}
        getArea={getArea}
        getUserSelectedPrice={getUserSelectedPrice}
      >
        <PlaceCardList
          places={area.places}
          userSelectedPrice={userSelectedPrice}
        />
      </Layout>
    </div>
  );
};
export default App;
