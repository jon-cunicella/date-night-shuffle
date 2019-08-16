import React, { useState } from 'react';

const PlaceCard = ({ place }) => {
  const styles = { backgroundImage: `url(${place.areaImage})` };
  return (
    <>
      <div style={styles} className="card-wrapper">
        <div className="overlay">
          <h3 className="place-card__title">{place.name}</h3>
          <div className="card-content">
            <h4 className="place-card__price"> {place.price}</h4>
            <small className="place-card__rating"> {place.rating}</small>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlaceCard;
