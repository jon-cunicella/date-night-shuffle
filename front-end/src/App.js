import React, { useEffect, useState } from "react";
import Layout from "./javascript/utils/components/Layout";
import PlaceCardList from "./javascript/utils/components/PlaceCardList";
import ReactDOM from "react-dom";
import Modal from "react-modal";
Modal.setAppElement("#root");

const App = () => {
  const [areas, setAreas] = useState([]);
  const [area, setArea] = useState({ places: [] });
  const [userSelectedPrice, setUserSelectedPrice] = useState();
  const [randomPlace, setRandomPlace] = useState({});
  const [modalIsOpen, setModalOpen] = useState(Boolean);

  const openModal = () => {
    setModalOpen(true);
  };
  const afterOpenModal = () => {
    // references are now sync'd and can be accessed.
    // this.subtitle.style.color = "#f00";
  };

  const closeModal = () => {
    setModalOpen(false);
  };

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

      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        // style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={subtitle => (subtitle = subtitle)}>Restaurant Name</h2>
        <button onClick={closeModal}>close</button>
        <div>Content</div>
        <form />
      </Modal>
    </div>
  );
};
export default App;
