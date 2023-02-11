import React, { useState } from "react";
import SignUpCard from "../../../components/SignUpCard/SignUpCard";
import styles from "./Basic.module.css";
import InputComponent from "../../../components/InputComponent/InputComponent";

const Basic = () => {
  const [basicDetails, setBasicDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  return (
    <SignUpCard title="Tell us about you.">
      <InputComponent
        label="FIRST NAME"
        type="text"
        placeholder="Enter your first name"
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
        onChange={(e) => {
          setBasicDetails((prev) => {
            return { ...prev, email: e.target.value };
          });
        }}
      />
    </SignUpCard>
  );
};

export default Basic;
