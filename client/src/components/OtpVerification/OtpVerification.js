import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./OtpVerification.css";
import axios from "axios";
import { css } from "@emotion/react";

import { RingLoader } from "react-spinners";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

function OtpVerification() {
  const BASE_API_URL = "http://localhost:4000/api/user/verifylogin";
  const [message, setMessage] = useState();
  const navigate = useNavigate();
  const initialValues = {
    phoneNumber: sessionStorage.getItem("phoneNo"),
    code: "",
  };
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
  `;
  const color = "#101C03";

  const onSubmit = (values) => {
    setIsLoading(true);
    setIsSubmitted(true);
    axios
      .post(BASE_API_URL, values, {
        "Content-Type": "application/json",
      })
      .then((response) => {
        if (response.data.status) {
          let userType = sessionStorage.getItem("userType");
          if (userType === "voter") {
            navigate("/facial-verification");
            setIsLoading(false);
            setIsSubmitted(false);
          }
          if (userType === "candidate") {
            navigate("/candidate/dashboard");
            setIsLoading(false);
            setIsSubmitted(false);
          }
          if (userType === "admin") {
            navigate("/admin/dashboard");
            setIsLoading(false);
            setIsSubmitted(false);
          }
        } else {
          setMessage(response.data.message);
          setIsSubmitted(false);
        }
      });
  };

  const validationSchema = Yup.object({
    phoneNumber: Yup.string().required(),
    code: Yup.string().required(),
  });

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <div className="otp-box-container">
      <div className="card py-4 px-2 border border-success">
        <h5 className="fs-3 mb-2 text-center">Mobile phone verification</h5>
        <span className="mobile-text text-center mt-1 fs-6">
          Enter the code we just send on your mobile phone 
        </span>
        {isSubmitted ? (
          <RingLoader
            color={color}
            loading={isLoading}
            css={override}
            size={100}
          />
        ) : null}
        <form onSubmit={formik.handleSubmit}>
          <div className="d-flex flex-row mt-5">
            <input
              id="code"
              type="text"
              className="form-control text-center"
              onChange={formik.handleChange}
              value={formik.values.code}
            />
            {formik.errors.code ? (
              <div className="error">{formik.errors.code}</div>
            ) : null}
          </div>
          <div className="text-center mt-5">
            <button type="submit" className="btn btn-success">
              Verify
            </button>
            {message ? <div className="error">{message}</div> : null}
          </div>
        </form>
      </div>
    </div>
  );
}

export default OtpVerification;
