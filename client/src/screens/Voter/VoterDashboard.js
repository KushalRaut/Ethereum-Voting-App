import React, { useState } from 'react'
import Pimage from './ppphoto.jpg'
import './voterDashboard.css'
import { Link } from 'react-router-dom'
import Navbar from '../../components/Layouts/Navbar'
import ChatBot from '../chatbot/ChatBot'
import { SiHiveBlockchain } from 'react-icons/si'
import { RiDashboardLine } from 'react-icons/ri'
import { FaUserEdit, FaVoteYea, FaCaretDown } from 'react-icons/fa'
import { ImStatsBars } from 'react-icons/im'
import { IoMdChatboxes } from 'react-icons/io'
import { MdSupportAgent, MdDeveloperMode } from 'react-icons/md'

const VoterDashboard = () => {
  return (
    <>
      <Navbar />

      {/* Body */}
      <div className="row dashboard-container">
        {/* Sidebar */}
        <div className="sidebar col-12 col-lg-3 col-md-5 col-sm-6">
          <div className="sidebar-items">
            <div className="sidebar-titles py-3 px-1">
              <Link to="/voter/dashboard" className="link d-block">
                <RiDashboardLine />
                <span className="mx-3 py-2">Dashboard</span>
              </Link>
            </div>
          </div>
          <div className="sidebar-items">
            <div className="sidebar-titles py-3 px-1">
              <Link to="/voter/profile" className="link d-block">
                <FaUserEdit />
                <span className="mx-3 py-2">User</span>
              </Link>
            </div>
          </div>
          <div className="sidebar-items">
            <div className="sidebar-titles py-3 px-1">
              <Link to="/voter/vote" className="link d-block">
                <FaVoteYea />
                <span className="mx-3 py-2">Vote</span>
              </Link>
            </div>
          </div>
          <div className="sidebar-items">
            <div className="sidebar-titles py-3 px-1">
              <Link to="/livedata" className="link d-block">
                <ImStatsBars />
                <span className="mx-3 py-2">Analytics</span>
              </Link>
            </div>
          </div>
          <div className="sidebar-items">
            <div className="sidebar-titles py-3 px-1">
              <Link to="/voter/chat" className="link d-block">
                <IoMdChatboxes />
                <span className="mx-3 py-2">Message</span>
              </Link>
            </div>
          </div>
          <div className="sidebar-items">
            <div className="sidebar-titles py-3 px-1">
              <Link to="/voter/support" className="link d-block">
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
            <h1 className="dashboard-title mb-4">VOTER DASHBOARD</h1>
            <div className="vote-div">
              <div className="card card-vote w-100 h-100">
                <div className="card-body">
                  <div className="text-center">
                    <h1 className="text-white py-3">VOTE NOW</h1>
                  </div>
                </div>
                <Link className="card-footer text-white " to="/voter/vote">
                  <span className="float-left">Goto vote UI ❯</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="row m-3 row-featues">
            <div className="col-12 col-lg-3 col-md-12 col-sm-12 sub-col-first my-3">
              <div className="card card-result w-100 h-100">
                <div className="card-body">
                  <div className="text-center">
                    <h2 className="text-white py-3">RESULTS</h2>
                  </div>
                </div>
                <Link className="card-footer text-white " to="/livedata">
                  <span className="float-left">View Realtime Results ❯</span>
                </Link>
              </div>
            </div>
            <div className="col-12 col-lg-3 col-md-12 col-sm-12 my-3">
              <div className="card card-chat w-100 h-100">
                <div className="card-body">
                  <div className="text-center">
                    <h2 className="text-white py-3">CHAT</h2>
                  </div>
                </div>
                <Link className="card-footer text-white " to="/voter/chat">
                  <span className="float-left">Message with candidates ❯</span>
                </Link>
              </div>
            </div>
            <div className="col-12 col-lg-3 col-md-12 col-sm-12 my-3">
              <div className="card card-info w-100 h-100">
                <div className="card-body">
                  <div className="text-center">
                    <h2 className="text-white py-3">VIEW INFO</h2>
                  </div>
                </div>
                <Link className="card-footer text-white " to="/voter/profile">
                  <span className="float-left">View & Edit Info ❯</span>
                </Link>
              </div>
            </div>
            <div className="col-12 col-lg-3 col-md-12 col-sm-12 my-3 sub-col-last">
              <div className="card card-live w-100 h-100">
                <div className="card-body">
                  <div className="text-center">
                    <h2 className="text-white py-3">LIVE FEED</h2>
                  </div>
                </div>
                <Link className="card-footer text-white " to="/voter/live">
                  <span className="float-left">View live speech ❯</span>
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

export default VoterDashboard
