import React from "react";

import PlaceCard from "./PlaceCard";

const PlaceCardList = ({ places }) => {
  // Bring in currentArea as a prop and iterate over its collection of places instead
  return (
    <ul className="place-card-list">
      {places.map(place => (
        <li className="place-card" key={place._id}>
          <PlaceCard place={place} />
        </li>
      ))}
    </ul>
  );
};

export default PlaceCardList;
