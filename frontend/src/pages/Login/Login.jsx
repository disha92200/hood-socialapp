import React, { useEffect, useState } from "react";
import styles from "./Login.module.css";
import InputComponent from "../../components/InputComponent/InputComponent";
import { useNavigate } from "react-router-dom";
import { login } from "../../graphql/queries";
import { useLazyQuery } from "@apollo/client";
import { useDispatch } from "react-redux";
import { setAuth } from "../../store/authSlice";

const Login = () => {
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const [userLogin, { loading, error, data }] = useLazyQuery(login);
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "hood | Login";
  }, []);
  useEffect(() => {
    if (data) {
      dispatch(setAuth({ user: data.userLogin }));
    }
  }, [data]);

  useEffect(() => {
    if (error) {
      alert(error.message);
    }
  }, [error]);
  const handleSignUp = () => {
    navigate("/signup");
  };
  const handleLogin = async () => {
    if (!emailPattern.test(loginDetails.email)) {
      alert("Wrong email");
      return;
    }
    userLogin({
      variables: loginDetails,
    });
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
        <button onClick={handleLogin}>Login</button>
        <div className={styles.footer} onClick={handleSignUp}>
          Don't have an account? Sign Up
        </div>
      </div>
    </div>
  );
};

export default Login;
