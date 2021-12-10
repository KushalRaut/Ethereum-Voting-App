import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios";
import * as Yup from "yup";
import "./login.css";
import Image from "./123.jpg";

const Login = () => {
  const BASE_API_URL = "http://localhost:4000/api/user/login";
  const navigate = useNavigate();
  const [message, setMessage] = useState();

  const initialValues = {
    email: "",
    password: "",
  };

  const onSubmit = (values) => {
    axios
      .post(BASE_API_URL, values, {
        "Content-Type": "application/json",
      })
      .then((response) => {
        if (response.data.status) {
          sessionStorage.setItem("phoneNo", response.data.data.phone_No);
          navigate("/verify");
        } else {
          setMessage(response.data.message);
        }
      });
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .required("This field is required"),
    password: Yup.string().required("This field is required"),
  });

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <div>
      <section className="login-block">
        <div className="container">
          <div className="row">
            <div className="col-md-4 login-sec">
              <h2 className="text-center">Login Now</h2>
              <form className="login-form" onSubmit={formik.handleSubmit}>
                <div className="form-group">
                  <label className="text-uppercase">Email</label>
                  <input
                    type="text"
                    id="email"
                    className="form-control"
                    placeholder="Enter your email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <div className="error">{formik.errors.email}</div>
                  ) : null}
                </div>

                <div className="form-group">
                  <label className="text-uppercase">Password</label>
                  <input
                    type="password"
                    id="password"
                    className="form-control"
                    placeholder="Enter your password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                  />
                  {formik.touched.password && formik.errors.password ? (
                    <div className="error">{formik.errors.password}</div>
                  ) : null}
                </div>

                <div>
                  <button type="submit" className="btn btn-success">
                    Log In
                  </button>
                  {message ? <div className="error">{message}</div> : null}
                </div>
              </form>
            </div>

            <div className="col-md-8 banner-sec">
              <img
                id="img"
                className="d-block img-fluid"
                src={Image}
                alt="no-img"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
