import React, { useRef } from "react";
import "./login.css";
import Image from "./123.jpg";

const Login = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    const inputDetails = {
      email: enteredEmail,
      password: enteredPassword,
    };

    console.log(inputDetails);
  };

  // const onSubmit = (e) => {
  //   e.preventDefault();
  //   const email = document.getElementById("email").value;
  //   const password = document.getElementById("password").value;
  //   console.log(email, password);
  // };

  return (
    <div>
      <section className="login-block">
        <div className="container">
          <div className="row">
            <div className="col-md-4 login-sec">
              <h2 className="text-center">Login Now</h2>
              <form className="login-form" onSubmit={onSubmit}>
                <div className="form-group">
                  <label className="text-uppercase">Email Id</label>
                  <input
                    type="text"
                    id="email"
                    className="form-control"
                    placeholder=""
                    ref={emailInputRef}
                  />
                </div>

                <div className="form-group">
                  <label className="text-uppercase">Password</label>
                  <input
                    type="password"
                    id="password"
                    className="form-control"
                    placeholder=""
                    ref={passwordInputRef}
                  />
                </div>

                <div>
                  <button type="submit" className="btn btn-success">
                    Log In
                  </button>
                </div>
              </form>
              <div className="copy-text">Created with React Bootstrap </div>
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
