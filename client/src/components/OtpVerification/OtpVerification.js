import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./OtpVerification.css";
import axios from "axios";

function OtpVerification({ phoneNumber }) {
  const BASE_API_URL = "http://localhost:4000/api/user/verifylogin";
  const [message, setMessage] = useState();
  const navigate = useNavigate();
  const initialValues = {
    phoneNumber: "9861519373",
    code: "",
  };

  const onSubmit = (values) => {
    axios
      .post(BASE_API_URL, values, {
        "Content-Type": "application/json",
      })
      .then((response) => {
        if (response.data.status) {
          navigate("/voter/dashboard");
        } else {
          setMessage(response.data.message);
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
    <div className="d-flex justify-content-center align-items-center container">
      <div className="card py-5 px-3">
        <h5 className="m-0">Mobile phone verification</h5>
        <span className="mobile-text">
          Enter the code we just send on your mobile phone 
        </span>
        <form onSubmit={formik.handleSubmit}>
          <div className="d-flex flex-row mt-5">
            <input
              id="code"
              type="text"
              className="form-control"
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
