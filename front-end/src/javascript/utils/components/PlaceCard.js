import React from "react";

const PlaceCard = ({ place }) => {
  <article>
    <h3 className="PlaceCard__title">{place.title}</h3>
    <h4 className="PlaceCard__price">{place.price}</h4>
    <small className="PlaceCard__rating">{place.rating}</small>
  </article>;
};

export default PlaceCard;
