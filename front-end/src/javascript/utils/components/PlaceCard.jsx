import React from 'react';

const PlaceCard = ({ place }) => {
  return (
    <>
      <div className='priceRating'>
        <h4 className='place-card__price'> {place.price}</h4>
        <small className='place-card__rating'> {place.rating}</small>
      </div>
      <h3 className='place-card__title'>{place.name}</h3>
      <div className='priceRating--inverted'>
        <h4 className='place-card__price--inverted'> {place.price}</h4>
        <small className='place-card__rating--inverted'>{place.rating}</small>
      </div>
    </>
  );
};

export default PlaceCard;
