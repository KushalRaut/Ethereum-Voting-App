import React, { useState } from 'react'
import '../../styles/Navbar.css'
import { Link } from 'react-router-dom'
import Pimage from '../../screens/Voter/ppphoto.jpg'
import { NavButton } from './NavButtonElement'
import { SiHiveBlockchain } from 'react-icons/si'
import { FaCaretDown } from 'react-icons/fa'

const Navbar = ({ account }) => {
  const [options, setOptions] = useState(false)

  const optionsHandler = () => {
    if (options) {
      setOptions(false)
    } else {
      setOptions(true)
    }
  }
  console.log(account)

  const loadAccount = () => {
    window.location.reload()
  }

  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <div className="logo text-white mx-5">
          <h1 className="d-inline mx-1">
            <SiHiveBlockchain />
          </h1>
          <span className="nav-title  mx-1">E-VOTE NEPAL</span>
        </div>
        <div className="navbar-brand text-white">
          {account ? (
            <div
              className="btn btn-dark text-white d-flex"
              onClick={optionsHandler}
            >
              <img src={Pimage} className="dp-image" />
              <span className="user-name py-2">
                Kushal Raut <FaCaretDown />
              </span>
              {options && (
                <div className="options">
                  <div className="option">
                    <Link className="option-link" to="/voter/profile">
                      <span className="d-block">Profile</span>
                    </Link>
                  </div>
                  <div className="option">
                    <Link className="option-link" to="/voter/votes">
                      <span className="d-block">Votes</span>
                    </Link>
                  </div>
                  <div className="option">
                    <Link className="option-link" to="/voter/help">
                      <span className="d-block">Help</span>
                    </Link>
                  </div>
                  <div className="option">
                    <Link className="option-link" to="/">
                      <span className="d-block">Logout</span>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <NavButton onClick={loadAccount}>Load</NavButton>
          )}
        </div>
      </nav>
    </>
  )
}

export default Navbar
