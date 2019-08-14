import React from 'react';

const RandomModal = ({ closeRandomModal, showRandomModal, place }) => {
  const showHideClassName = showRandomModal
    ? 'modal display-block'
    : 'modal display-none';

  return (
    <div className={showHideClassName}>
      <section className='modal-main'>
        <h1 className='modal-place__title'>{place.name}</h1>
        <h4 className='modal-place__price'> {place.price}</h4>
        <small className='modal-place__rating'> {place.rating}</small>
        <button onClick={closeRandomModal}>&times;</button>
      </section>
    </div>
  );
};
export default RandomModal;
