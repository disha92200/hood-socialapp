import React, { useState } from "react";
import SignUpCard from "../../../components/SignUpCard/SignUpCard";
import InputComponent from "../../../components/InputComponent/InputComponent";
import styles from "./Lock.module.css";

const Lock = ({ userDetails, setUserDetails, onBack, onNext }) => {
  const [secureDetails, setSecureDetails] = useState({
    password: userDetails?.password || "",
    resetPassword: userDetails?.password || "",
    phone: userDetails?.phone || "",
  });
  const handleNext = () => {
    if (
      !secureDetails.password ||
      !secureDetails.resetPassword ||
      !secureDetails.phone
    ) {
      alert("All fields required");
      return;
    }
    if (secureDetails.password !== secureDetails.resetPassword) {
      alert("Reset Password do not match password");
      return;
    }
    setUserDetails((prev) => {
      return {
        ...prev,
        password: secureDetails.password,
        phone: secureDetails.phone,
      };
    });
    onNext();
  };
  return (
    <div>
      <SignUpCard title="Secure your account.">
        <InputComponent
          label="PASSWORD"
          type="password"
          placeholder="Choose a password"
          onChange={(e) => {
            setSecureDetails((prev) => {
              return { ...prev, password: e.target.value };
            });
          }}
        />
        <InputComponent
          label="RESET PASSWORD"
          type="password"
          placeholder="Repeat your password"
          onChange={(e) => {
            setSecureDetails((prev) => {
              return { ...prev, resetPassword: e.target.value };
            });
          }}
        />
        <InputComponent
          label="PHONE NUMBER"
          type="number"
          placeholder="Enter your phone number"
          onChange={(e) => {
            setSecureDetails((prev) => {
              return { ...prev, phone: e.target.value };
            });
          }}
        />
        <div className={styles.buttonWrapper}>
          <button className={styles.backButton} onClick={onBack}>
            Back
          </button>
          <button className={styles.nextButton} onClick={handleNext}>
            Next
          </button>
        </div>
      </SignUpCard>
    </div>
  );
};

export default Lock;
