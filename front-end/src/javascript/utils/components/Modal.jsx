import React from "react";

const Modal = ({ closeModal, showModal, place }) => {
  const showHideClassName = showModal
    ? "modal display-block"
    : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <h1 className="modal-place__title">{place.name}</h1>
        <h4 className="modal-place__price"> {place.price}</h4>
        <small className="modal-place__rating"> {place.rating}</small>
        <button onClick={closeModal}>&times;</button>
      </section>
    </div>
  );
};
export default Modal;
