import React from "react";

import PlaceCard from "./PlaceCard";

const PlaceCardList = ({ places }) => {
  return (
    <ul>
      {places.map(place => (
        <li>
          <PlaceCard place={place} />
        </li>
      ))}
    </ul>
  );
};

export default PlaceCardList;
