import React, { useState } from 'react';
import PlaceCard from './PlaceCard';

const PlaceCardList = ({
  places,
  userSelectedPrice,
  updateSingleModalPlace,
  renderModal
}) => {
  async function handleOnClick(place) {
    await updateSingleModalPlace(place);
    await renderModal();
  }

  if (userSelectedPrice === undefined) {
    // list of unfiltered places
    return (
      <ul className='place-card-list'>
        {places.map(place => (
          <li className='place-card' onClick={() => handleOnClick(place)}>
            <PlaceCard place={place} />
          </li>
        ))}
      </ul>
    );
  } // filtered list of places
  else
    return (
      <ul className='place-card-list'>
        {places
          .filter(place => place.price === userSelectedPrice)
          .map(place => (
            <li className='place-card' key={place._id}>
              <PlaceCard place={place} />
            </li>
          ))}
      </ul>
    );
};

export default PlaceCardList;
