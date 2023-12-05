import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";

export const Navigation = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="links">
          <Link className="link" to="/">
            <h6>Events</h6>
          </Link>

          <Link className="link" to="/event/1">
            <h6>Event</h6>
          </Link>

          <Link className="link" to="/user">
            <h6>User</h6>
          </Link>

          <Link className="link" to="/AddEvent">
            <h6>Add Event</h6>
          </Link>
        </div>
      </div>
    </nav>
  );
};
