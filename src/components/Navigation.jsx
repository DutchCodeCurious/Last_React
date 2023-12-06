import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import { useActiveUser } from "../context/activeUser";
import { getUser } from "../Api/users";

export const Navigation = () => {
  const { activeUser, setActiveUser } = useActiveUser();
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (activeUser != null) {
      getUser(activeUser).then((res) => setUser(res));
    }
  }, [activeUser]);

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
            {(user != null && <h6>{user.name}</h6>) || <h6>Log In</h6>}
          </Link>

          <Link className="link" to="/AddEvent">
            <h6>Add Event</h6>
          </Link>
        </div>
      </div>
    </nav>
  );
};
