import React from "react";
import styles from "./SignUpCard.module.css";

const SignUpCard = ({ title, children }) => {
  return (
    <div className={styles.cardWrapper}>
      <p className={styles.title}>{title}</p>
      <div className={styles.cardContainer}>{children}</div>
    </div>
  );
};

export default SignUpCard;
