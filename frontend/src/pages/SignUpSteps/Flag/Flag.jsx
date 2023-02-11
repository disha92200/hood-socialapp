import React from "react";
import SignUpCard from "../../../components/SignUpCard/SignUpCard";
import styles from "./Flag.module.css";

const Flag = () => {
  return (
    <SignUpCard title="You're all set. Ready?">
      <div className={styles.imgWrapper}>
        <img className={styles.mailboxImg} src="/images/mailbox.svg" alt="" />
      </div>
      <div className={styles.subHeading}>
        Congratz, you successfully created your account.
      </div>
      <p className={styles.footer}>
        We just sent you a confirmation email. PLease confirm your account
        within 24 hours.
      </p>
      <div className={styles.buttonWrapper}>
        <button className={styles.letMeInButton}>Let Me In</button>
      </div>
    </SignUpCard>
  );
};

export default Flag;
