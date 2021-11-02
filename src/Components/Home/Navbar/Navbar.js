import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';
import { HashLink } from 'react-router-hash-link';
import logo from './NAC_logo.png';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg nav-glass">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <img  width="30" height="40" src={logo} alt="logo"/>
        </Link>
        <Link to="/" className="navbar-brand remove-name">
          <h4>Nakshatra Astronomy Club</h4>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarColor03"
          aria-controls="navbarColor03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon">
            <i className="fa fa-bars"></i>
          </span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarColor03"
        >
          <ul className="navbar-nav ">
            <li className="nav-item">
              <Link to="/aboutus" className="nav-link">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <HashLink to="/events/#events" className="nav-link" href="#0">
                Events
              </HashLink>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://discord.gg/uXeWxd5bc9">
                Join Community
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
