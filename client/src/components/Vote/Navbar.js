import React from "react";

const Navbar = ({ account }) => {
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark shadow mb-5">
        <p className="navbar-brand my-auto m-3">
          Electronic Voting First Draft
        </p>
        <ul className="nav-item text-white m-3">Current Account: {account}</ul>
      </nav>
    </div>
  );
};

export default Navbar;
