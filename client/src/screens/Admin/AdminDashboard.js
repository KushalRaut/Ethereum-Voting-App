import React from 'react'
import Navbar from './Navbar'
import '../Voter/voterDashboard.css'
import { Link } from 'react-router-dom'
import { RiDashboardLine } from 'react-icons/ri'
import { FaUserEdit } from 'react-icons/fa'
import { RiQuestionnaireFill } from 'react-icons/ri'
import { AiFillFileAdd } from 'react-icons/ai'
import { MdManageAccounts, MdReportProblem } from 'react-icons/md'

const AdminDashboard = () => {
  document.title = 'Admin Dashboard'
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
              <Link to="/admin/addCandidate" className="link d-block">
                <AiFillFileAdd />
                <span className="mx-3 py-2">Add Candidate</span>
              </Link>
            </div>
          </div>

          <div className="sidebar-items">
            <div className="sidebar-titles py-3 px-1">
              <Link to="/admin/manageCandidates" className="link d-block">
                <FaUserEdit />
                <span className="mx-3 py-2">Manage Candidate</span>
              </Link>
            </div>
          </div>

          <div className="sidebar-items">
            <div className="sidebar-titles py-3 px-1">
              <Link to="/admin/chatbot" className="link d-block">
                <RiQuestionnaireFill />
                <span className="mx-3 py-2">Manage Chatbot Questions</span>
              </Link>
            </div>
          </div>

          <div className="sidebar-items">
            <div className="sidebar-titles py-3 px-1">
              <Link to="/admin/report" className="link d-block">
                <MdReportProblem />
                <span className="mx-3 py-2">Report Problem</span>
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
                <Link class="card-footer text-white " to="/livedata">
                  <span class="float-left">View Realtime Results ❯</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="row m-3 row-featues">
            <div className="col-12 col-lg-3 col-md-12 col-sm-12 sub-col-first my-3">
              <div class="card card-result w-100 h-100">
                <div class="card-body">
                  <div class="text-center">
                    <h2 className="text-white py-3">ADD CANDIDATES</h2>
                  </div>
                </div>
                <Link class="card-footer text-white " to="/admin/addCandidates">
                  <span class="float-left">Add New Candidate ❯</span>
                </Link>
              </div>
            </div>
            <div className="col-12 col-lg-3 col-md-12 col-sm-12 my-3">
              <div class="card card-chat w-100 h-100">
                <div class="card-body">
                  <div class="text-center">
                    <h2 className="text-white py-3">MANAGE CANDIDATES</h2>
                  </div>
                </div>
                <Link
                  class="card-footer text-white "
                  to="/admin/manageCandidates"
                >
                  <span class="float-left">Manage Existing Candidates ❯</span>
                </Link>
              </div>
            </div>
            <div className="col-12 col-lg-3 col-md-12 col-sm-12 my-3">
              <div class="card card-info w-100 h-100">
                <div class="card-body">
                  <div class="text-center">
                    <h2 className="text-white py-3">ALL VOTERS</h2>
                  </div>
                </div>
                <Link class="card-footer text-white " to="/comingsoon">
                  <span class="float-left">View & Edit Voters ❯</span>
                </Link>
              </div>
            </div>
            <div className="col-12 col-lg-3 col-md-12 col-sm-12 my-3 sub-col-last">
              <div class="card card-live w-100 h-100">
                <div class="card-body">
                  <div class="text-center">
                    <h2 className="text-white py-3">MESSAGE VOTERS</h2>
                  </div>
                </div>
                <Link class="card-footer text-white " to="/comingsoon">
                  <span class="float-left">Send SMS to Voters ❯</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard
