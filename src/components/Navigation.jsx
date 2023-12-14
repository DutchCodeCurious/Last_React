import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import { useActiveUser } from "../context/activeUser";

export const Navigation = () => {
  const { activeUser } = useActiveUser();

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
          <Link className="link" to="/user">
            {(activeUser != null && <h6>{activeUser.name}</h6>) || (
              <h6>Log In</h6>
            )}
          </Link>
          {(activeUser != null && (
            <Link className="link" to="/AddEvent">
              <h6>Add Event</h6>
            </Link>
          )) ||
            null}
        </div>
      </div>
    </nav>
  );
};
