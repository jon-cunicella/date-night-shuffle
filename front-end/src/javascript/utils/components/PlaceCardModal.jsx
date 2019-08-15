import React from 'react';
import GoogleMap from './GoogleMap.jsx';

const PlaceCardModal = ({ closePlaceCardModal, showPlaceCardModal, place }) => {
  const showHideClassName = showPlaceCardModal
    ? 'modal display-block'
    : 'modal display-none';

  return (
    <div className={showHideClassName}>
      <section className='modal-main'>
        <h1 className='modal-place__title'>Title: {place.name}</h1>
        <h4 className='modal-place__price'> Price: {place.price}</h4>
        <small className='modal-place__rating'> Rating: {place.rating}</small>
        <div className='google-map'>
          <GoogleMap
            name={place.name}
            lat={place.latitude}
            long={place.longitude}
          />
        </div>
        <button onClick={closePlaceCardModal}>&times;</button>
      </section>
    </div>
  );
};
export default PlaceCardModal;
