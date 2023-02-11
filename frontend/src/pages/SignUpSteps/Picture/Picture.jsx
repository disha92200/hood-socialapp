import React, { useState } from "react";
import SignUpCard from "../../../components/SignUpCard/SignUpCard";
import styles from "./Picture.module.css";

const Picture = () => {
  const [image, setImage] = useState("./images/avatar.webp");
  const [errMsg, setErrMsg] = useState("");
  const handleImageChange = (e) => {
    const size = e.target.files[0].size / 1000;
    if (size > 3000) {
      setErrMsg("File size too large");
      return;
    }
    setErrMsg("");
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = (e) => {
      console.log(e.target.result);
      setImage(e.target.result);
      console.log(e.target.result.size);
    };
  };
  return (
    <SignUpCard title="Upload a profile picture.">
      <div className={styles.displayPictureWrapper}>
        <label htmlFor="image" className={styles.inputButton}>
          +
        </label>
        <input
          type="file"
          id="image"
          className={styles.inputImg}
          onChange={handleImageChange}
        />
        <img src={image} alt="" />
      </div>
      {errMsg ? <div className={styles.errorMessage}>{errMsg}</div> : ""}
      <p className={styles.footer}>
        Only images with a size lower than 3MB are allowed.
      </p>
    </SignUpCard>
  );
};

export default Picture;
