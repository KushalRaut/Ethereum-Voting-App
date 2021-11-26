import React from "react";
import  "./OtpVerification.css";

function OtpVerification() {
  return (
    <div className="d-flex justify-content-center align-items-center container">
      <div className="card py-5 px-3">
        <h5 className="m-0">Mobile phone verification</h5>
        <span className="mobile-text">
          Enter the code we just send on your mobile phone 
          {/* <b class="text-danger">+91 86684833</b> */}
        </span>
        <div className="d-flex flex-row mt-5">
          <input type="text" class="form-control" autofocus="" />
          <button type="button" class="btn btn-success">Verify</button>
        </div>
        <div className="text-center mt-5">
          <span className="d-block mobile-text">Don't receive the code?</span>
          <button type="button" class="btn btn-primary">Resend</button>
        </div>
      </div>
    </div>
  );
}

export default OtpVerification;
