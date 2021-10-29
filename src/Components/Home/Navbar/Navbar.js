import React from "react";
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg nav-glass">
      <div className="container-fluid">
        <a className="navbar-brand" href="#0">
          Nakshatra Astronomy Club
        </a>
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
              <a className="nav-link" href="#0">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#0">
                Events
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#0">
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
