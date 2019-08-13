import React from "react";

import PlaceCard from "./PlaceCard";

const PlaceCardList = ({ places, userSelectedPrice }) => {
  if (userSelectedPrice === undefined) {
    return (
      <ul className="place-card-list">
        {places.map(place => (
          <li className="place-card">
            <PlaceCard place={place} />
          </li>
        ))}
      </ul>
    );
  } else
    return (
      <ul className="place-card-list">
        {places
          .filter(place => place.price === userSelectedPrice)
          .map(place => (
            <li className="place-card" key={place._id}>
              <PlaceCard place={place} />
            </li>
          ))}
      </ul>
    );
};

export default PlaceCardList;
