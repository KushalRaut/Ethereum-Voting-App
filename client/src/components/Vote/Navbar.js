import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  background-color: transparent;
  border: none;
`

const Navbar = ({ account }) => {
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark shadow">
        <p className="navbar-brand my-auto m-3">
          Electronic Voting First Draft
        </p>
        <Button
          onClick={() => {
            window.location.reload()
          }}
        >
          <ul className="nav-item text-white m-3">
            Current Account: {account}
          </ul>
        </Button>
      </nav>
    </div>
  )
}

export default Navbar
