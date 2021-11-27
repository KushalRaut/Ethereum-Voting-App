import React, { useRef } from "react";
import "./RegistrationForm.css";
import Image from "./456.jpg";

const RegistrationForm = () => {
  const enteredFullName = useRef();
  const enteredEmailAddress = useRef();
  const enteredLocation = useRef();
  const enteredPassword = useRef();
  const enteredPhoneNumber = useRef();
  const enteredCitizenshipNumber = useRef();
  let imageFile = {};

  const uploadImage = (files) => {
    imageFile = files[0];
  };
  const submitHandler = (e) => {
    e.preventDefault();

    const fullName = enteredFullName.current.value;
    const email = enteredEmailAddress.current.value;
    const location = enteredLocation.current.value;
    const citizenshipNo = enteredCitizenshipNumber.current.value;
    const phoneNo = enteredPhoneNumber.current.value;

    const enteredRegistrationInfo = {
      fullName,
      email,
      location,
      citizenshipNo,
      image: imageFile,
      phoneNo,
    };

    console.log(enteredRegistrationInfo);
  };

  return (
    <div id="main-div">
      <div className="container">
        <h1> Registration Form</h1>
        <div className="row">
          <div className="col-5">
            <form onSubmit={submitHandler}>
              <label className="m-1">Full Name</label>
              <input
                type="text"
                className="form-control m-1"
                id="username"
                placeholder="Enter full name"
                ref={enteredFullName}
              />

              <label className="m-1">Email address</label>
              <input
                type="email"
                className="form-control m-1"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                ref={enteredEmailAddress}
              />

              <label className="m-1">Location</label>
              <input
                type="text"
                className="form-control m-1"
                id="locationid"
                placeholder="Enter location"
                ref={enteredLocation}
              />

              <label className="m-1">Citizenship Number</label>
              <input
                type="text"
                className="form-control m-1"
                id="citizenshipid"
                placeholder="Enter citizenship number"
                ref={enteredCitizenshipNumber}
              />

              <label className="m-1">Password</label>
              <input
                type="password"
                className="form-control m-1"
                id="exampleInputPassword1"
                placeholder="Password"
                ref={enteredPassword}
              />

              <label className="m-1">Phone Number</label>
              <input
                type="text"
                className="form-control m-1"
                id="phonenoid"
                placeholder="Enter your phone number"
                ref={enteredPhoneNumber}
              />

              <div className="input-group mb-3">
                <div className="custom-file">
                  <input
                    type="file"
                    onChange={(event) => {
                      uploadImage(event.target.files);
                    }}
                    className="custom-file-input mt-3 m-1"
                    id="inputGroupFile02"
                  />
                </div>
              </div>

              <button type="submit" className="btn btn-primary mt-4 mb-4">
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
