import React, { useState, useEffect } from "react";
import styles from "./SignUp.module.css";
import Basic from "../SignUpSteps/Basic/Basic";
import Picture from "../SignUpSteps/Picture/Picture";
import Lock from "../SignUpSteps/Lock/Lock";
import Flag from "../SignUpSteps/Flag/Flag";

const SignUp = () => {
  const [step, setStep] = useState(0);
  const [slidePerc, setSlidePerc] = useState(0);
  const [userDetails, setUserDetails] = useState({});
  const StepComponent = (step) => {
    if (step === 0)
      return (
        <Basic
          userDetails={userDetails}
          setUserDetails={setUserDetails}
          onBack={onBack}
          onNext={onNext}
        ></Basic>
      );
    else if (step === 1)
      return (
        <Picture
          userDetails={userDetails}
          setUserDetails={setUserDetails}
          onBack={onBack}
          onNext={onNext}
        ></Picture>
      );
    else if (step === 2)
      return (
        <Lock
          userDetails={userDetails}
          setUserDetails={setUserDetails}
          onBack={onBack}
          onNext={onNext}
        ></Lock>
      );
    else if (step === 3) return <Flag userDetails={userDetails}></Flag>;
    else return <></>;
  };
  useEffect(() => {
    document.title = "hood | SignUp";
  }, []);
  useEffect(() => {
    setSlidePerc((prev) => {
      return (100 / 3) * step;
    });
  }, [step]);
  const onNext = () => {
    if (step < 3) {
      setStep((prev) => {
        return prev + 1;
      });
    }
  };
  const onBack = () => {
    if (step >= 1) {
      setStep((prev) => {
        return prev - 1;
      });
    }
  };
  const headerSliderStyle = {
    background: `linear-gradient(to right,#5596E6 0%,#5596E6 ${slidePerc}%,#eaeaea ${slidePerc}%,#eaeaea 100%)`,
  };
  return (
    <div className={styles.container}>
      <div className={styles.headerWrapper}>
        <div className={styles.header} style={headerSliderStyle}>
          <button>
            {step >= 0 ? (
              <img src="/images/basic.png" alt="" />
            ) : (
              <img src="/images/basic-grey.png" alt="" />
            )}
          </button>
          <button>
            {step >= 1 ? (
              <img src="/images/picture.png" alt="" />
            ) : (
              <img src="/images/picture-grey.png" alt="" />
            )}
          </button>
          <button>
            {step >= 2 ? (
              <img src="/images/lock.png" alt="" />
            ) : (
              <img src="/images/lock-grey.png" alt="" />
            )}
          </button>
          <button>
            {step >= 3 ? (
              <img src="/images/flag.png" alt="" />
            ) : (
              <img src="/images/flag-grey.png" alt="" />
            )}
          </button>
        </div>
      </div>
      <div className={styles.componentWrapper}>{StepComponent(step)}</div>
      {/* {step < 3 ? (
        <div className={styles.buttonWrapper}>
          <button className={styles.backButton} onClick={onBack}>
            Back
          </button>
          <button className={styles.nextButton} onClick={onNext}>
            Next
          </button>
        </div>
      ) : (
        ""
      )} */}
    </div>
  );
};

export default SignUp;
