import React from 'react';
import GoogleMap from './GoogleMap.jsx';

const RandomModal = ({ closeRandomModal, showRandomModal, place }) => {
  const showHideClassName = showRandomModal
    ? 'modal display-block'
    : 'modal display-none';

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <button className="modal-button" onClick={closeRandomModal} />
        <div className="modal-content">
          <div className="modal-content__container">
            <div className="modal-image">
              <img
                className="modal-image__area"
                src={place.image}
                alt="Restaurant"
              />
            </div>
            <h1 className="modal-place__title">{place.name}</h1>
            <div className="modal-content__box">
              <small className="modal-place__price">Price: {place.price}</small>
              <small className="modal-place__rating">
                Rating: {place.rating}
              </small>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default RandomModal;
