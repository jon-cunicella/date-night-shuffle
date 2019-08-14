import React, { useEffect, useState } from 'react';
import Layout from './javascript/utils/components/Layout';
import PlaceCardList from './javascript/utils/components/PlaceCardList';
import RandomModal from './javascript/utils/components/RandomModal';
import PlaceCardModal from './javascript/utils/components/PlaceCardModal';

const App = () => {
  const [areas, setAreas] = useState([]);
  const [area, setArea] = useState({ places: [] });
  const [userSelectedPrice, setUserSelectedPrice] = useState();
  const [randomPlace, setRandomPlace] = useState({});
  const [showRandomModal, setShowRandomModal] = useState(false);
  const [showPlaceCardModal, setShowPlaceCardModal] = useState(false);
  const [userAreaId, setUserAreaId] = useState('');

  useEffect(() => {
    fetch('http://localhost:4000/api/areas')
      .then(res => res.json())
      .then(areas => setAreas(areas));
  }, []);

  const openRandomModal = () => {
    setShowRandomModal(true);
  };

  const closeRandomModal = () => {
    setShowRandomModal(false);
  };

  const closePlaceCardModal = () => {
    setShowPlaceCardModal(false);
  };

  const handleRandomModal = () => {
    fetch(`http://localhost:4000/api/areas/${userAreaId}/places/random`)
      .then(res => res.json())
      .then(randomPlace => setRandomPlace(randomPlace));
    openRandomModal();
  };

  const getArea = userAreaId => {
    fetch(`http://localhost:4000/api/areas/${userAreaId}`)
      .then(res => res.json())
      .then(area => setArea(area));
    setUserAreaId(userAreaId);
  };

  const getPlaceCardModalState = showPlaceCardModal => {
    setShowPlaceCardModal(showPlaceCardModal);
  };

  const getUserSelectedPrice = userSelectedPrice => {
    setUserSelectedPrice(userSelectedPrice);
  };

  return (
    <div className='wrapper'>
      <Layout
        areas={areas}
        getArea={getArea}
        getUserSelectedPrice={getUserSelectedPrice}
      >
        <PlaceCardList
          places={area.places}
          userSelectedPrice={userSelectedPrice}
          showPlaceCardModal={showPlaceCardModal}
          closePlaceCardModal={closePlaceCardModal}
          getPlaceCardModalState={getPlaceCardModalState}
        />
        <button
          className='random-place-button'
          type='button'
          onClick={handleRandomModal}
        >
          I'm Feeling Lucky
        </button>
      </Layout>
      <PlaceCardModal
        showPlaceCardModal={showPlaceCardModal}
        closePlaceCardModal={closePlaceCardModal}
        place={area.place}
      />
      <RandomModal
        showRandomModal={showRandomModal}
        closeRandomModal={closeRandomModal}
        place={randomPlace}
      />
    </div>
  );
};
export default App;
