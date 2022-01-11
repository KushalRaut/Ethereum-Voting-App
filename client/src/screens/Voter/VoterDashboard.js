import React from "react";
import logo from "./logo.png";
import Pimage from "./ppphoto.jpg";
import "./voterDashboard.css";
import ClockComponent from "./Voter-Components/ClockComponent";
import ReactCalendar from "./Voter-Components/ReactCalendar";
import { Link } from "react-router-dom";
import PieChart from "./Voter-Components/PieChart";
import BarGraph from "./Voter-Components/BarGraph";
import ChatBot from "../chatbot/ChatBot";

const VoterDashboard = () => {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-dark bg-dark d-flex">
        <div>
          <img
            src={logo}
            className="img-fluid"
            id="logo-image"
            alt="responsive-image"
          ></img>
        </div>
        <span className="navbar-brand m-2 h1">Welcome User</span>
      </nav>

      {/* Body */}
      <div className="d-flex" id="bodyContainer">
        <div className="h-100 d-flex" id="subbody">
          <div className="real-data h-75 w-100 d-flex">
            <div className="d-flex graphs w-75 m-4">
              <PieChart className="w-50" />
              <BarGraph className="m-4" />
              {/* <div className="bar h-100 w-50"></div> */}
            </div>
            <div className="utilities w-25 d-flex">
              <div className="h-25 m-3 mx-auto">
                <ClockComponent />
              </div>
              <div className="calendar m-2">
                <ReactCalendar />
              </div>
            </div>
          </div>
          <div className="elements d-flex">
            <div className="items item-1 col-2 m-4">
              <h3 className="text-center m-1">Total Candidates</h3>
              <hr className="m-0 mx-auto"></hr>
              <p className="m-3">Total Number of Election Candidates: 10</p>
            </div>
            <div className="items item-2  col-2 m-4">
              <h3 className="text-center m-1">total voters</h3>
              <hr className="m-0 mx-auto"></hr>
              <p className="m-3">Total Number of Voters: 10</p>
              <p className="m-3">Total Number of Votes Casted: 5</p>
            </div>
            <div className="items item-3  col-3 m-4">
              <h3 className="text-center m-1">Vote for candidates</h3>
              <hr className="m-0 mx-auto"></hr>
              <div className="d-flex" id="vote-container">
                <p className="m-2">
                  If you haven't voted yet in this election then click the
                  button below to caste your vote:
                </p>
                <Link class="btn btn-light w-50 mx-auto" to="/vote">
                  VOTE NOW
                </Link>
              </div>
            </div>
            <div className="items item-4 m-4">
              <h3 className="text-center m-1">Edit Your Info</h3>
              <hr className="m-0 mx-auto"></hr>
              <div className="d-flex" id="vote-container">
                <p className="m-2">
                  Edit the info you stored during registration by clicking the
                  button below :
                </p>
                <Link className="btn btn-light w-50 mx-auto" to="/edit">
                  Edit Info
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="item-5 m-3 d-flex">
          <img
            src={Pimage}
            className="m-5 h-25"
            id="profile-image"
            alt="alt-img"
          />
          <div className="id-info w-75 mx-auto h-50">
            <p className="des m-2">Name: Prashant Nepal</p>
            <p className="des m-2">Age: 28</p>
            <p className="des m-2">District: Morang</p>
            <p className="des m-2">Citizenship No.: 0864748384</p>
            <p className="des m-2">Ward no.- 12</p>
            <p className="des m-2">Municipality: Belbari</p>
            <p className="des m-2">Tole: Mandan Street</p>
            <p className="des m-2">Current Address: Kathmandu</p>
            <p className="des m-2">Ward no.- 30</p>
          </div>
          <Link className="btn btn-danger m-3" to="/">
            LOG OUT
          </Link>
        </div>
        <ChatBot />
      </div>

      {/* Footer */}
      <footer class="bg-dark text-white pt-3 pb-4">
        <div className="w-75 align-center">
          <hr></hr>
          <p>
            Copyright ©2021 All rights reserved by:
            <strong class="text-warning">E-VOTE GROUP NEPAL</strong>
          </p>
        </div>
      </footer>
    </>
  );
};

export default VoterDashboard;
