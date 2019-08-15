import React from 'react';

const RandomModal = ({ closeRandomModal, showRandomModal, place }) => {
  const showHideClassName = showRandomModal
    ? 'modal display-block'
    : 'modal display-none';

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <button className="modal-button" onClick={closeRandomModal}>
          &times;
        </button>
        <div className="modal-content">
          <div className="modal-content__container">
            <h1 className="modal-place__title">{place.name}</h1>
            <h4 className="modal-place__price"> Price: {place.price}</h4>
            <image className="modal-place__image" />
            <small className="modal-place__rating">
              Rating: {place.rating}
            </small>
          </div>
        </div>
      </section>
    </div>
  );
};
export default RandomModal;
