import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

import "./registrationForm.css";
import Image from "./456.jpg";
import axios from "axios";
import { css } from "@emotion/react";

import { RingLoader } from "react-spinners";

const RegistrationForm = () => {
  const BASE_API_URL = "http://localhost:4000/api/user/register";
  let navigate = useNavigate();
  const [respData, setRespdata] = useState();
  const [message, setMessage] = useState();
  const [file, setFile] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
  `;
  const color = "#101C03";

  const initialValues = {
    name: "",
    email: "",
    location: "",
    citizenship_no: "",
    password: "",
    phone_No: "",
    user_type: "voter",
  };
  const onSubmit = (values) => {
    setIsLoading(true);
    setIsSubmitted(true);
    const data = new FormData();
    data.append("name", values.name);
    data.append("email", values.email);
    data.append("location", values.location);
    data.append("citizenship_no", values.citizenship_no);
    data.append("password", values.password);
    data.append("phone_No", values.phone_No);
    data.append("photo", file);

    axios
      .post(BASE_API_URL, data, {
        "Content-Type": "multipart/form-data",
        Connection: "keep-alive",
      })
      .then((response) => {
        console.log(response.data);
        if (response.data.status) {
          setRespdata(response.data);
          navigate("/login");
          setIsLoading(false);
          setIsSubmitted(false);
        } else {
          setMessage(response.data.message);
          setIsSubmitted(false);
        }
      });
  };

  const validationSchema = Yup.object({
    name: Yup.string().required(),
    email: Yup.string().required(),
    location: Yup.string().required(),
    citizenship_no: Yup.string().required(),
    password: Yup.string()
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm,
        "Password must contain at least one lowercase letter, one uppercase letter, one number and at least 8 characters!"
      )
      .required("Password is required"),
    phone_No: Yup.string().required(),
  });

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <div id="main-div">
      <div className="container">
        <h1> Registration Form</h1>
        <div className="row">
          <div className="col-5">
            <form onSubmit={formik.handleSubmit}>
              <div className="form-group">
                <label className="m-1">Full Name</label>
                <input
                  type="text"
                  className="form-control m-1"
                  id="name"
                  placeholder="Enter full name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                />
                {formik.touched.name && formik.errors.name ? (
                  <div className="error">{formik.errors.name}</div>
                ) : null}
              </div>

              <label className="m-1">Email address</label>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control m-1"
                  id="email"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="error">{formik.errors.email}</div>
                ) : null}
              </div>

              <label className="m-1">Location</label>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control m-1"
                  id="location"
                  placeholder="Enter location"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.location}
                />
                {formik.touched.location && formik.errors.location ? (
                  <div className="error">{formik.errors.location}</div>
                ) : null}
              </div>

              <label className="m-1">Citizenship Number</label>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control m-1"
                  id="citizenship_no"
                  placeholder="Enter citizenship number"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.citizenship_no}
                />
                {formik.touched.citizenship_no &&
                formik.errors.citizenship_no ? (
                  <div className="error">{formik.errors.citizenship_no}</div>
                ) : null}
              </div>

              <label className="m-1">Password</label>
              <div>
                <input
                  type="password"
                  className="form-control m-1"
                  id="password"
                  placeholder="Password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                />
                {formik.touched.password && formik.errors.password ? (
                  <div className="error">{formik.errors.password}</div>
                ) : null}
              </div>

              <label className="m-1">Phone Number</label>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control m-1"
                  id="phone_No"
                  placeholder="Enter your phone number"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.phone_No}
                />
                {formik.touched.phone_No && formik.errors.phone_No ? (
                  <div className="error">{formik.errors.phone_No}</div>
                ) : null}
              </div>

              <div className="input-group mb-3">
                <div className="custom-file">
                  <input
                    type="file"
                    onChange={(event) => {
                      const file = event.target.files[0];
                      setFile(file);
                    }}
                    className="custom-file-input mt-3 m-1"
                    id="inputGroupFile02"
                  />
                </div>
              </div>

              <div>
                {message ? <div className="error">{message}</div> : null}
                <button type="submit" className="btn btn-primary mt-4 mb-4 ">
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div className="col-7" id="registration-picture">
            <img src={Image} className="w-75" />
            {isSubmitted ? (
              <RingLoader
                color={color}
                loading={isLoading}
                css={override}
                size={100}
              />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
