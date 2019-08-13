import React, { useState } from "react";

const PlaceCard = ({ place }) => {
  const [selectedPlace, setSelectedPlace] = useState({});

  const handlePopup = () => {};

  return (
    <>
      <div className="modal">
        <span className="close-button">&times;</span>
        <div className="modal-content">
          <h3 className="modal-card__title">Name: {selectedPlace.name}</h3>
          <h4 className="modal-card__price">Price: {selectedPlace.price}</h4>
          <small className="modal-card__rating">
            Rating: {selectedPlace.rating}
          </small>
        </div>
      </div>

      <button id="open-modal" onClick={handlePopup}>
        <div className="priceRating">
          <h4 className="place-card__price"> {place.price}</h4>
          <small className="place-card__rating"> {place.rating}</small>
        </div>
        <h3 className="place-card__title">{place.name}</h3>
        <div className="priceRating--inverted">
          <h4 className="place-card__price--inverted"> {place.price}</h4>
          <small className="place-card__rating--inverted">{place.rating}</small>
        </div>
      </button>
    </>
  );
};

export default PlaceCard;
