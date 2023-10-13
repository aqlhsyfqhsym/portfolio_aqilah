import React from "react";
import styles from "./button.module.scss";

const Button = ({ label, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      <span>{label} </span>
    </button>
  );
};

export default Button;
