import React from "react";
import "./login.css";
import Image from "./123.jpg";

const Login = () => {
  const onSubmit = (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email, password);
  };

  return (
    <div>
      <section class="login-block">
        <div class="container">
          <div class="row">
            <div class="col-md-4 login-sec">
              <h2 class="text-center">Login Now</h2>
              <form class="login-form" onSubmit={onSubmit}>
                <div class="form-group">
                  <label for="exampleInputEmail1" class="text-uppercase">
                    Email Id
                  </label>
                  <input
                    type="text"
                    id="email"
                    class="form-control"
                    placeholder=""
                  />
                </div>

                <div class="form-group">
                  <label for="exampleInputPassword1" class="text-uppercase">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    class="form-control"
                    placeholder=""
                  />
                </div>

                <div>
                  <button type="submit" class="btn btn-success">
                    Log In
                  </button>
                </div>
              </form>
              <div class="copy-text">Created with React Bootstrap </div>
            </div>

            <div class="col-md-8 banner-sec">
              <img id="img" class="d-block img-fluid" src={Image} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
