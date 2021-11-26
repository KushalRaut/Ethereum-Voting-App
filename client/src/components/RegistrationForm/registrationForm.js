import React from "react";
import "./registrationForm.css";
import Image from "./456.jpg";

function registrationForm() {
  const uploadImage = (files) => {
    console.log(files[0]);
  };

  return (
    <div id="main-div">
      <div class="container">
        <h1> Registration Form</h1>
        <div class="row">
          <div class="col-5">
            <form>
              <label for="username" class="m-1">
                Full Name
              </label>
              <input
                type="text"
                class="form-control m-1"
                id="username"
                placeholder="Enter full name"
              />

              <label for="emailaddress" class="m-1">
                Email address
              </label>
              <input
                type="email"
                class="form-control m-1"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />

              <label for="Location" class="m-1">
                Location
              </label>
              <input
                type="text"
                class="form-control m-1"
                id="locationid"
                placeholder="Enter location"
              />

              <label for="citizenship-number" class="m-1">
                Citizenship Number
              </label>
              <input
                type="text"
                class="form-control m-1"
                id="citizenshipid"
                placeholder="Enter citizenship number"
              />

              <label for="exampleInputPassword1" class="m-1">
                Password
              </label>
              <input
                type="password"
                class="form-control m-1"
                id="exampleInputPassword1"
                placeholder="Password"
              />

              <label for="phone-number" class="m-1">
                Phone Number
              </label>
              <input
                type="text"
                class="form-control m-1"
                id="phonenoid"
                placeholder="Enter your phone number"
              />

              <div class="input-group mb-3">
                <div class="custom-file">
                  <input
                    type="file"
                    onChange={(event) => {
                      uploadImage(event.target.files);
                    }}
                    class="custom-file-input mt-3 m-1"
                    id="inputGroupFile02"
                  />
                </div>
              </div>

              <label for="exampleFormControlSelect1" class="m-1">
                Select usertype
              </label>
              <select class="form-control" id="exampleFormControlSelect1">
                <option>Voter</option>
                <option>Candidate</option>
                <option>Admin</option>
              </select>

              <button type="submit" class="btn btn-primary mt-4 mb-4">
                Submit
              </button>
            </form>
          </div>
          <div class="col-7" id="registration-picture">
            <img src={Image} class="w-75" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default registrationForm;
