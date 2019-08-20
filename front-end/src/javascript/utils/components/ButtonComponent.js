import React from 'react';
import styles from './ButtonComponent.module.css';

const Button = ({ handleRandomModal }) => {
  async function buttonClick() {
    await handleRandomModal();
  }

  return (
    <button className={styles.button} type='button' onClick={buttonClick}>
      I'm Feeling Lucky
    </button>
  );
};

export default Button;
