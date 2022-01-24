import React, { useState } from "react";
import "../../styles/Navbar.css";
import { Link } from "react-router-dom";
import img from "./admin-img.png";
import { SiHiveBlockchain } from "react-icons/si";
import { FaCaretDown } from "react-icons/fa";

const Navbar = () => {
  const [options, setOptions] = useState(false);

  const optionsHandler = () => {
    if (options) {
      setOptions(false);
    } else {
      setOptions(true);
    }
  };

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
            <img src={img} className="dp-image" />
            <span className="user-name py-2">
              Admin <FaCaretDown />
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
  );
};

export default Navbar;
