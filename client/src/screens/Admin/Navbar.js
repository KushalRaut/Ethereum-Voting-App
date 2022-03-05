import React, { useState, useEffect } from 'react'
import '../../styles/Navbar.css'
import { Link } from 'react-router-dom'
import img from './admin-img.png'
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
          <h1 className="d-inline mx-1">
            <SiHiveBlockchain />
          </h1>
          <span className="nav-title  mx-1">E-VOTE NEPAL</span>
        </div>
        <div className="navbar-brand text-white">
          <div
            className="btn btn-dark text-white d-flex"
            onClick={optionsHandler}
          >
            <img src={userData.pictureURL} className="dp-image" />
            <span className="user-name py-2">
              { userData && userData.name } <FaCaretDown />
            </span>
            {options && (
              <div className="options-admin">
                <div className="option">
                  <Link className="option-link" to="/voter/profile">
                    <span className="d-block">Profile</span>
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
        </div>
      </nav>
    </>
  )
}

export default Navbar
