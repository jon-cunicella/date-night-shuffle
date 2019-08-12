import React from 'react';

const PlaceCard = ({ place }) => {
  const handlePopup = e => {
    this.setState({
      showPopup: !this.state.showPopup
    });
  };
  return (
    <>
      <a href="test" onClick="{handlePopup}">
        <div className="priceRating--inverted">
          <h4 className="place-card__price--inverted"> {place.price}</h4>
          <small className="place-card__rating--inverted">
            {' '}
            {place.rating}
          </small>
        </div>
        <h3 className="place-card__title">{place.name}</h3>
        <div className="priceRating">
          <h4 className="place-card__price"> {place.price}</h4>
          <small className="place-card__rating"> {place.rating}</small>
        </div>
      </a>
    </>
  );
};

export default PlaceCard;
