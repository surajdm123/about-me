import React from "react";
import "bootstrap/dist/css/bootstrap.css";

function Navbar2() {
  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/">
        Suraj Devatha
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#support">
              Education
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              Experience
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              Projects
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar2;
