import { Link } from "gatsby"
import React, { useState } from "react"
import { FaCartArrowDown } from "react-icons/fa"
import logo from "../../images/logo.svg"

export default function Navbar() {
  const [toggleNav, setToggleNav] = useState(false)

  return (
    <nav className="navbar navbar-expand-sm bg-light navbar-light">
      <Link to="/" className="navbar-brand">
        <img src={logo} alt="logo" />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        onClick={() => setToggleNav(!toggleNav)}
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div
        className={
          toggleNav
            ? "collapse navbar-collapse show"
            : "collapse navbar-collapse"
        }
      >
        <ul className="navbar-nav mx-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link text-capitalize">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link text-capitalize">
              About
            </Link>
          </li>
          <li className="nav-item ml-sm-5">
            <FaCartArrowDown className="cart-icon snipcart-checkout" />
          </li>
        </ul>
      </div>
    </nav>
  )
}
