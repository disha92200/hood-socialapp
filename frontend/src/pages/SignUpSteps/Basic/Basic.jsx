import React, { useState } from "react";
import SignUpCard from "../../../components/SignUpCard/SignUpCard";
import styles from "./Basic.module.css";
import InputComponent from "../../../components/InputComponent/InputComponent";

const Basic = ({ userDetails, setUserDetails, onBack, onNext }) => {
  const [basicDetails, setBasicDetails] = useState({
    firstName: userDetails?.firstName || "",
    lastName: userDetails?.lastName || "",
    email: userDetails?.email || "",
  });

  const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const handleNext = () => {
    if (
      !basicDetails.firstName ||
      !basicDetails.lastName ||
      !basicDetails.email
    ) {
      alert("All fields required");
      return;
    }
    if (!emailPattern.test(basicDetails.email)) {
      alert("Wrong email");
      return;
    }
    setUserDetails((prev) => {
      return {
        ...prev,
        firstName: basicDetails.firstName,
        lastName: basicDetails.lastName,
        email: basicDetails.email,
      };
    });
    onNext();
  };
  return (
    <div>
      <SignUpCard title="Tell us about you.">
        <InputComponent
          label="FIRST NAME"
          type="text"
          placeholder="Enter your first name"
          value={basicDetails.firstName}
          onChange={(e) => {
            setBasicDetails((prev) => {
              return { ...prev, firstName: e.target.value };
            });
          }}
        />
        <InputComponent
          label="LAST NAME"
          type="text"
          placeholder="Enter your last name"
          value={basicDetails.lastName}
          onChange={(e) => {
            setBasicDetails((prev) => {
              return { ...prev, lastName: e.target.value };
            });
          }}
        />
        <InputComponent
          label="EMAIL"
          type="email"
          placeholder="Enter your email address"
          value={basicDetails.email}
          onChange={(e) => {
            setBasicDetails((prev) => {
              return { ...prev, email: e.target.value };
            });
          }}
        />
      </SignUpCard>
      <div className={styles.buttonWrapper}>
        <button className={styles.backButton} onClick={onBack}>
          Back
        </button>
        <button className={styles.nextButton} onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Basic;
