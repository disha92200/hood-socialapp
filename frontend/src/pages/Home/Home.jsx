import React, { useEffect } from "react";
import styles from "./Home.module.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const handleSignUp = () => {
    navigate("/signup");
  };
  const handlelogin = () => {
    navigate("/login");
  };
  useEffect(() => {
    document.title = "hood";
  }, []);
  return (
    <div className={styles.homeContainer}>
      <div className={styles.content}>
        <img className={styles.friendImg} src="/images/friends.svg" alt="" />
        <div className={styles.rightContent}>
          <p className={styles.heading}>Friendkit.</p>
          <p className={styles.subHeading}>Social media UI kit</p>
          <div className={styles.buttonWrapper}>
            <button onClick={handleSignUp}>GET STARTED</button>
          </div>
          <p className={styles.footer}>
            Already a user?{" "}
            <span className={styles.login} onClick={handlelogin}>
              Login here.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
