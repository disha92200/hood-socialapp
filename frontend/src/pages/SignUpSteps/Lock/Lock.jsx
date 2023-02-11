import React, { useState } from "react";
import SignUpCard from "../../../components/SignUpCard/SignUpCard";
import InputComponent from "../../../components/InputComponent/InputComponent";

const Lock = () => {
  const [secureDetails, setSecureDetails] = useState({
    password: "",
    resetPassword: "",
    phone: "",
  });
  return (
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
    </SignUpCard>
  );
};

export default Lock;
