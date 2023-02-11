import React, { useState } from "react";
import styles from "./Login.module.css";
import InputComponent from "../../components/InputComponent/InputComponent";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleSignUp = () => {
    navigate("/signup");
  };
  return (
    <div className={styles.container}>
      <img className={styles.loginImg} src="/images/login.svg" alt="" />
      <div className={styles.loginContent}>
        <h2>Welcome Back</h2>
        <p className={styles.subHeading}>Enter your credentials to sign in.</p>
        <InputComponent
          label="Email id"
          type="email"
          placeholder="Enter your email address"
          value={loginDetails.email}
          onChange={(e) => {
            setLoginDetails((prev) => {
              return { ...prev, email: e.target.value };
            });
          }}
        ></InputComponent>
        <InputComponent
          label="Password"
          type="password"
          placeholder="Enter your password"
          value={loginDetails.password}
          onChange={(e) => {
            setLoginDetails((prev) => {
              return { ...prev, password: e.target.value };
            });
          }}
        ></InputComponent>
        <div className={styles.rememberForgotWrapper}>
          <div className={styles.sliderInput}>
            <label className={styles.switch}>
              <input type="checkbox" />
              <span className={`${styles.slider} ${styles.round}`}></span>
            </label>
            <span className={styles.sliderLabel}>Remember Me?</span>
          </div>
          <p>Forgot Password?</p>
        </div>
        <button>Login</button>
        <div className={styles.footer} onClick={handleSignUp}>
          Don't have an account? Sign Up
        </div>
      </div>
    </div>
  );
};

export default Login;
