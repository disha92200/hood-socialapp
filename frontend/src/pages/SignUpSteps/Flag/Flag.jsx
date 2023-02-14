import React from "react";
import SignUpCard from "../../../components/SignUpCard/SignUpCard";
import styles from "./Flag.module.css";
import { useMutation } from "@apollo/client";
import { createUser } from "../../../graphql/mutations";
import { setAuth } from "../../../store/authSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const Flag = ({ userDetails }) => {
  const [addUser, { error }] = useMutation(createUser);
  const dispatch = useDispatch();
  useEffect(() => {
    if (error) {
      if (window.confirm(error.message + " click on Ok to go to login page")) {
        window.open("http://localhost:3000/login", "_self");
      }
      return;
    }
  }, [error]);
  const handleSubmit = async () => {
    if (error) {
      return;
    }
    if (userDetails) {
      const { data } = await addUser({
        variables: userDetails,
      });
      console.log(data);
      const user = data.addUser;
      dispatch(setAuth({ user }));
      try {
      } catch (err) {
        console.log(err);
      }
    }
  };
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
        <button className={styles.letMeInButton} onClick={handleSubmit}>
          Let Me In
        </button>
      </div>
    </SignUpCard>
  );
};

export default Flag;
