import React from "react";

const PlaceCard = ({ place }) => {
  return (
    <article className="place-card-info">
      <h3 className="place-card__title">{place.name}</h3>
      <h4 className="place-card__price">Price: {place.price}</h4>
      <small className="place-card__rating">Rating: {place.rating}</small>
    </article>
  );
};

export default PlaceCard;
