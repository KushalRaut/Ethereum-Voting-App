import React, { useState } from 'react'
import Pimage from '../Voter/ppphoto.jpg'
import '../Voter/voterDashboard.css'
import { Link } from 'react-router-dom'
import Navbar from '../../components/Layouts/Navbar'
import ChatBot from '../chatbot/ChatBot'
import { SiHiveBlockchain } from 'react-icons/si'
import { RiDashboardLine } from 'react-icons/ri'
import { FaUserEdit, FaVoteYea, FaCaretDown } from 'react-icons/fa'
import { ImStatsBars } from 'react-icons/im'
import { IoMdChatboxes } from 'react-icons/io'
import { RiLiveFill } from 'react-icons/ri'
import { MdSupportAgent, MdDeveloperMode } from 'react-icons/md'

const CandidateDashboard = () => {

  return (
    <>
      <Navbar />

      {/* Body */}
      <div className="row dashboard-container">

        {/* Sidebar */}
        <div className="sidebar col-12 col-lg-3 col-md-5 col-sm-6">
          <div className="sidebar-items">
            <div className="sidebar-titles py-3 px-1">
              <Link to="/candidate/dashboard" className="link d-block">
                <RiDashboardLine />
                <span className="mx-3 py-2">Dashboard</span>
              </Link>
            </div>
          </div>
          <div className="sidebar-items">
            <div className="sidebar-titles py-3 px-1">
              <Link to="/candidate/profile" className="link d-block">
                <FaUserEdit />
                <span className="mx-3 py-2">User</span>
              </Link>
            </div>
          </div>
          <div className="sidebar-items">
            <div className="sidebar-titles py-3 px-1">
              <Link to="/candidate/live" className="link d-block">
                <RiLiveFill />
                <span className="mx-3 py-2">Go Live</span>
              </Link>
            </div>
          </div>
          <div className="sidebar-items">
            <div className="sidebar-titles py-3 px-1">
              <Link to="/candidate/results" className="link d-block">
                <ImStatsBars />
                <span className="mx-3 py-2">Analytics</span>
              </Link>
            </div>
          </div>
          <div className="sidebar-items">
            <div className="sidebar-titles py-3 px-1">
              <Link to="/candidate/chat" className="link d-block">
                <IoMdChatboxes />
                <span className="mx-3 py-2">Message</span>
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
            <h1 className="dashboard-title mb-4">CANDIDATE DASHBOARD</h1>
            <div className="vote-div">
              <div class="card card-vote w-100 h-100">
                <div class="card-body">
                  <div class="text-center">
                    <h1 className="text-white py-3">VIEW LIVE RESULTS</h1>
                  </div>
                </div>
                <Link class="card-footer text-white " to="/candidate/results">
                  <span class="float-left">View Realtime Results</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="row m-3 row-featues">
            <div className="col-12 col-lg-3 col-md-12 col-sm-12 sub-col-first my-3">
              <div class="card card-result w-100 h-100">
                <div class="card-body">
                  <div class="text-center">
                    <h2 className="text-white py-3">GO LIVE</h2>
                  </div>
                </div>
                <Link class="card-footer text-white " to="/candidate/live">
                  <span class="float-left">Go live to voters</span>
                </Link>
              </div>
            </div>
            <div className="col-12 col-lg-3 col-md-12 col-sm-12 my-3">
              <div class="card card-chat w-100 h-100">
                <div class="card-body">
                  <div class="text-center">
                    <h2 className="text-white py-3">CHAT</h2>
                  </div>
                </div>
                <Link class="card-footer text-white " to="/candidate/chat">
                  <span class="float-left">Message with voters</span>
                </Link>
              </div>
            </div>
            <div className="col-12 col-lg-3 col-md-12 col-sm-12 my-3">
              <div class="card card-info w-100 h-100">
                <div class="card-body">
                  <div class="text-center">
                    <h2 className="text-white py-3">VIEW INFO</h2>
                  </div>
                </div>
                <Link class="card-footer text-white " to="/candidate/profile">
                  <span class="float-left">View & Edit Info</span>
                </Link>
              </div>
            </div>
            <div className="col-12 col-lg-3 col-md-12 col-sm-12 my-3 sub-col-last">
              <div class="card card-live w-100 h-100">
                <div class="card-body">
                  <div class="text-center">
                    <h2 className="text-white py-3">MANIFESTO</h2>
                  </div>
                </div>
                <Link class="card-footer text-white " to="/candidate/manifesto">
                  <span class="float-left">View manifesto</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ChatBot />
    </>
  )
}

export default CandidateDashboard
