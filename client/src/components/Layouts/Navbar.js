import React, { useState, useEffect } from 'react'
import '../../styles/Navbar.css'
import { Link } from 'react-router-dom'
import Pimage from '../../screens/Voter/ppphoto.jpg'
import { NavButton } from './NavButtonElement'
import { SiHiveBlockchain } from 'react-icons/si'
import { FaCaretDown } from 'react-icons/fa'
import axios from 'axios'

const Navbar = () => {
  const [options, setOptions] = useState(false)

  useEffect(() => {
    fetchUserData()
  }, [])

  const [userData, setUserData] = useState({})

  const fetchUserData = async () => {
    try {
      axios
        .post('http://localhost:4000/api/user/email', {
          email: sessionStorage.getItem('email'),
        })
        .then(function (response) {
          setUserData(response.data.data)
        })
    } catch (error) {
      console.error(error)
    }
  }

  const logoutHandler = () => {
    sessionStorage.removeItem('phoneNo')
    sessionStorage.removeItem('name')
    sessionStorage.removeItem('userType')
    sessionStorage.removeItem('email')
    sessionStorage.removeItem('pictureURL')
  }

  const optionsHandler = () => {
    if (options) {
      setOptions(false)
    } else {
      setOptions(true)
    }
  }
  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <div className="logo text-white mx-5">
          <div className="nav-logo">
            <h1 className="d-inline mx-1">
              <SiHiveBlockchain />
            </h1>
            <span className="nav-title  mx-1">E-VOTE NEPAL</span>
          </div>
        </div>
        <div className="navbar-brand text-white">
          <div
            className="btn btn-dark text-white d-flex"
            onClick={optionsHandler}
          >
            <img src={userData.pictureURL} className="dp-image" />
            <span className="user-name py-2">
              {userData && userData.name} <FaCaretDown />
            </span>
            {options && (
              <div className="options">
                <div className="option">
                  <Link className="option-link" to="/comingsoon">
                    <span className="d-block">Help</span>
                  </Link>
                </div>
                <div className="option">
                  <Link
                    className="option-link"
                    onClick={() => {
                      logoutHandler()
                    }}
                    to="/"
                  >
                    <span className="d-block">Logout</span>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
