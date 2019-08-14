import React, { useEffect, useState } from "react";
import Layout from "./javascript/utils/components/Layout";
import PlaceCardList from "./javascript/utils/components/PlaceCardList";
import Modal from "./javascript/utils/components/Modal";

const App = () => {
  const [areas, setAreas] = useState([]);
  const [area, setArea] = useState({ places: [] });
  const [userSelectedPrice, setUserSelectedPrice] = useState();
  const [randomPlace, setRandomPlace] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [userAreaId, setUserAreaId] = useState("");

  useEffect(() => {
    fetch("http://localhost:4000/api/areas")
      .then(res => res.json())
      .then(areas => setAreas(areas));
  }, []);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleRandomModal = () => {
    fetch(`http://localhost:4000/api/areas/${userAreaId}/places/random`)
      .then(res => res.json())
      .then(randomPlace => setRandomPlace(randomPlace));
    openModal();
  };

  const getArea = userAreaId => {
    fetch(`http://localhost:4000/api/areas/${userAreaId}`)
      .then(res => res.json())
      .then(area => setArea(area));
    setUserAreaId(userAreaId);
  };

  const getModalState = showModal => {
    setShowModal(showModal);
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
          showModal={showModal}
          closeModal={closeModal}
          getModalState={getModalState}
        />
        <button
          className="random-place-button"
          type="button"
          onClick={handleRandomModal}
        >
          I'm Feeling Lucky
        </button>
      </Layout>
      <Modal
        showModal={showModal}
        closeModal={closeModal}
        place={randomPlace}
      />
    </div>
  );
};
export default App;
