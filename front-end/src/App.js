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
  const [singlePlaceId, setSinglePlaceId] = useState('');
  const [singleModalPlace, setSingleModalPlace] = useState({});
  const [showCardModal, setShowCardModal] = useState(false);

  useEffect(() => {
    fetch('http://localhost:4000/api/areas')
      .then(res => res.json())
      .then(areas => setAreas(areas));
  }, []);

  const updateSinglePlaceId = id => {
    setSinglePlaceId(id);
    // console.log(singlePlaceId);
  };

  const updateSingleModalPlace = place => {
    fetch(`http://localhost:4000/api/places/${place._id}`)
      .then(res => res.json())
      .then(singleModalPlace => setSingleModalPlace(singleModalPlace));
    console.log(singleModalPlace);
    console.log(place._id);
  };

  const openRandomModal = () => {
    setShowRandomModal(true);
  };

  const closeRandomModal = () => {
    setShowRandomModal(false);
  };
  const renderModal = () => {
    setShowCardModal(true);
    // console.log(showPlaceCardModal);
    getPlaceCardModalState(showCardModal);
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
          setSinglePlaceId={updateSinglePlaceId}
          updateSingleModalPlace={updateSingleModalPlace}
          renderModal={renderModal}
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
        place={singleModalPlace}
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
