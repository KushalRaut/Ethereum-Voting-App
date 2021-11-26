import React, { useRef } from "react";
import "./OtpVerification.css";

function OtpVerification() {
  const enteredOTPText = useRef();

  const submitHandler = () => {
    const otpCode = enteredOTPText.current.value;
    console.log(otpCode);
  };

  return (
    <div className="d-flex justify-content-center align-items-center container">
      <div className="card py-5 px-3">
        <h5 className="m-0">Mobile phone verification</h5>
        <span className="mobile-text">
          Enter the code we just send on your mobile phone 
          {/* <b class="text-danger">+91 86684833</b> */}
        </span>
        <div className="d-flex flex-row mt-5">
          <input
            type="text"
            className="form-control"
            autoFocus=""
            ref={enteredOTPText}
          />
        </div>
        <div className="text-center mt-5">
          <button
            type="button"
            id="sub"
            className="btn btn-success"
            onClick={submitHandler}
          >
            Verify
          </button>
        </div>
      </div>
    </div>
  );
}

export default OtpVerification;
