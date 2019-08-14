import React from 'react';

const PlaceCardModal = ({ closePlaceCardModal, showPlaceCardModal, place }) => {
  const showHideClassName = showPlaceCardModal
    ? 'modal display-block'
    : 'modal display-none';

  return (
    <div className={showHideClassName}>
      <section className='modal-main'>
        <h1 className='modal-place__title'>Title</h1>
        <h4 className='modal-place__price'> Price</h4>
        <small className='modal-place__rating'> Rating</small>
        <button onClick={closePlaceCardModal}>&times;</button>
      </section>
    </div>
  );
};
export default PlaceCardModal;
