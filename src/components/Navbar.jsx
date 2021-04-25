import React from "react"
import icona from "../images/icona.png"
// ROUTER
import { Link, NavLink } from "react-router-dom"
// REACT ICONS
import { FcKey, FcHome, FcAddDatabase } from "react-icons/fc"

const Navbar = () => {
  return (
    <>
      <nav className="navbar-wrapper">
        <div className="navbar-icona">
          <Link to="/">
            <img className="icona" src={icona} alt="icona" />
          </Link>
        </div>
        <ul className="navbar-ul">
          <li>
            <NavLink
              to="/"
              activeClassName="navbar-li-active"
              className="navbar-li"
            >
              <div className="navbar-li-icon">
                <FcHome size={20} />
              </div>
              <div>home</div>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/database"
              activeClassName="navbar-li-active"
              className="navbar-li"
            >
              <div className="navbar-li-icon">
                <FcAddDatabase size={20} />
              </div>
              <div>supplier</div>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/auth"
              activeClassName="navbar-li-active"
              className="navbar-li"
            >
              <div className="navbar-li-icon">
                <FcKey size={20} />
              </div>
              <div>auth</div>
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
