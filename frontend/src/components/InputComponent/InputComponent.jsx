import React from "react";
import styles from "./InputComponent.module.css";

const InputComponent = ({ label, ...props }) => {
  return (
    <div className={styles.inputWrapper}>
      <p>{label}</p>
      <input {...props} className={styles.input} />
    </div>
  );
};

export default InputComponent;
