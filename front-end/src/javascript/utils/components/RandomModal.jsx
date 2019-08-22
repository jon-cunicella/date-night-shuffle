import React from 'react';
import GoogleMapRandomCard from './GoogleMapRandomCard';

const RandomModal = ({ closeRandomModal, showRandomModal, randomPlace }) => {
  const showHideClassName = showRandomModal
    ? 'modal display-block'
    : 'modal display-none';

  return (
    <div className={showHideClassName}>
      <section className='modal-main'>
        <button className='modal-button' onClick={closeRandomModal} />
        <div className='modal-content'>
          <div className='modal-content__container'>
            <div className='modal-image'>
              <img
                className='modal-image__area'
                src={randomPlace.image}
                alt='Restaurant'
              />
            </div>
            <h1 className='modal-place__title'>{randomPlace.name}</h1>
            <div className='modal-content__box'>
              <small className='modal-place__price'>
                Price: {randomPlace.price}
              </small>
              <small className='modal-place__rating'>
                Rating: {randomPlace.rating}
              </small>
            </div>
          </div>
        </div>
        <div className='google-map'>
          <GoogleMapRandomCard
            randomName={randomPlace.name}
            latitude={randomPlace.latitude}
            longitude={randomPlace.longitude}
          />
        </div>
      </section>
    </div>
  );
};
export default RandomModal;
