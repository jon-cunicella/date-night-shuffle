import React from 'react';
import styles from './ButtonComponent.module.css';

const Button = ({ handleRandomModal }) => {
  return (
    <button className={styles.button} type="button" onClick={handleRandomModal}>
      I'm Feeling Lucky
    </button>
  );
};

export default Button;
