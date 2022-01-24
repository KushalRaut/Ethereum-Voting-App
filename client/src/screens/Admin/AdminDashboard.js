import React from "react";
import Navbar from "./Navbar";
import "../Voter/voterDashboard.css";
import { Link } from "react-router-dom";
import { RiDashboardLine } from "react-icons/ri";
import { FaUserEdit, FaVoteYea, FaCaretDown } from "react-icons/fa";
import { ImStatsBars } from "react-icons/im";
import { IoMdChatboxes } from "react-icons/io";
import { RiLiveFill } from "react-icons/ri";
import admin from "./admin-img.png";
import {
  MdSupportAgent,
  MdDeveloperMode,
  MdOutlineQuestionAnswer,
} from "react-icons/md";

const AdminDashboard = () => {
  document.title = "Admin Dashboard";
  return (
    <div>
      <Navbar />
      <div className="row dashboard-container">
        {/* Sidebar */}
        <div className="sidebar col-12 col-lg-3 col-md-5 col-sm-6">
          <div className="sidebar-items">
            <div className="sidebar-titles py-3 px-1">
              <Link to="/admin/dashboard" className="link d-block">
                <RiDashboardLine />
                <span className="mx-3 py-2">Dashboard</span>
              </Link>
            </div>
          </div>
          <div className="sidebar-items">
            <div className="sidebar-titles py-3 px-1">
              <Link to="/candidate/profile" className="link d-block">
                <FaUserEdit />
                <span className="mx-3 py-2">Manage Candidate</span>
              </Link>
            </div>
          </div>

          <div className="sidebar-items">
            <div className="sidebar-titles py-3 px-1">
              <Link to="/candidate/results" className="link d-block">
                <MdOutlineQuestionAnswer />
                <span className="mx-3 py-2">Manage Chatbot Questions</span>
              </Link>
            </div>
          </div>
          <div className="sidebar-items">
            <div className="sidebar-titles py-3 px-1">
              <Link to="/admin/chat" className="link d-block">
                <IoMdChatboxes />
                <span className="mx-3 py-2">Message with Voters</span>
              </Link>
            </div>
          </div>
          <div className="sidebar-items">
            <div className="sidebar-titles py-3 px-1">
              <Link to="/support" className="link d-block">
                <MdSupportAgent />
                <span className="mx-3 py-2">Support</span>
              </Link>
            </div>
          </div>
          <div className="sidebar-items">
            <div className="sidebar-titles py-3 px-1">
              <Link to="/developers" className="link d-block">
                <MdDeveloperMode />
                <span className="mx-3 py-2">Developers</span>
              </Link>
            </div>
          </div>
        </div>

        {/* DashBoard */}
        <div className="dashboard col-12 col-lg-9 col-md-7 col-sm-6">
          <div className="row m-3">
            <h1 className="dashboard-title mb-4">ADMIN DASHBOARD</h1>
            <div className="vote-div">
              <div class="card card-vote w-100 h-100">
                <div class="card-body">
                  <div class="text-center">
                    <h1 className="text-white py-3">SHOW LIVE RESULTS</h1>
                  </div>
                </div>
                <Link class="card-footer text-white " to="/candidate/results">
                  <span class="float-left">View Realtime Results</span>
                </Link>
              </div>
            </div>
          </div>
          <div>
            <img src={admin}></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
