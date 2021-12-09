import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormikContext, useFormik } from "formik";
import * as Yup from "yup";

import "./registrationForm.css";
import Image from "./456.jpg";
import axios from "axios";

const RegistrationForm = () => {
  const BASE_API_URL = "http://localhost:4000/api/user/register";
  let navigate = useNavigate();
  const [respData, setRespdata] = useState();
  const [message, setMessage] = useState();
  const [file, setFile] = useState();

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
      })
      .then((response) => {
        if (response.data.status) {
          setRespdata(response.data);
          navigate("/login");
        } else {
          setMessage(response.data.message);
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

  const submitHandler = async (e) => {
    if (respData.status) {
      navigate("/login");
    } else {
      setMessage(respData.message);
    }
  };

  return (
    <div id="main-div">
      <div className="container">
        <h1> Registration Form</h1>
        <div className="row">
          <div className="col-5">
            <form onSubmit={submitHandler}>
              <div>
                <label className="m-1">Full Name</label>
                <input
                  type="text"
                  className="form-control m-1"
                  id="username"
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
              <div>
                <input
                  type="email"
                  className="form-control m-1"
                  id="exampleInputEmail1"
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
              <div>
                <input
                  type="text"
                  className="form-control m-1"
                  id="locationid"
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
              <div>
                <input
                  type="text"
                  className="form-control m-1"
                  id="citizenshipid"
                  placeholder="Enter citizenship number"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.citizenship_no}
                />
                {}
              </div>

              <label className="m-1">Password</label>
              <input
                type="password"
                className="form-control m-1"
                id="exampleInputPassword1"
                placeholder="Password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />

              <label className="m-1">Phone Number</label>
              <input
                type="text"
                className="form-control m-1"
                id="phonenoid"
                placeholder="Enter your phone number"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phone_No}
              />

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

              <button type="submit" className="btn btn-primary mt-4 mb-4 ">
                Submit
              </button>
            </form>
          </div>
          <div className="col-7" id="registration-picture">
            <img src={Image} className="w-75" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
