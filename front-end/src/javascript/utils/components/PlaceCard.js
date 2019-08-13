import React, { useState } from "react";

const PlaceCard = ({ place }) => {
  const [selectedPlace, setSelectedPlace] = useState({});

  const handlePopup = () => {
    // Get the modal
    const modal = document.querySelector(".modal");
    // Get the button that opens the modal
    const openButtons = document.querySelectorAll("#open-modal");

    // Get the <span> element that closes the modal
    const span = document.querySelector(".close-button");

    // When the user clicks on the button, open the modal
    openButtons.forEach(button => {
      button.onclick = () => {
        modal.style.display = "block";
      };
    });

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
      modal.style.display = "none";
    };

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    };
  };

  return (
    <>
      <div className="modal">
        <span className="close-button">&times;</span>
        <div className="modal-content">
          <h3 className="modal-card__title">{place.name}</h3>
          <h4 className="modal-card__price"> {place.price}</h4>
          <small className="modal-card__rating"> {place.rating}</small>
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
