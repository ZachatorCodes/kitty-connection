import React, { useContext } from "react";
import { UserContext } from "../context/user";
import { NavLink, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const { logout, loggedIn } = useContext(UserContext);

  function logoutUser() {
    fetch("/logout", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    }).then(() => {
      logout();
    });
  }

  if (loggedIn) {
    return (
      <div className="logged-in-navbar">
        <NavLink to="/">
          <button className="navbar-button">Home</button>
        </NavLink>
        <NavLink to="/shelters">
          <button className="navbar-button">Shelters</button>
        </NavLink>
        <NavLink to="/profile">
          <button className="navbar-button">Profile</button>
        </NavLink>
        <button className="navbar-button" onClick={logoutUser}>
          Logout
        </button>
      </div>
    );
  } else {
    return (
      <div className="logged-out-navbar">
        <NavLink to="/">
          <button className="navbar-button">Home</button>
        </NavLink>
        <NavLink to="/login">
          <button className="navbar-button">Log In</button>
        </NavLink>
        <NavLink to="/signup">
          <button className="navbar-button">Sign Up</button>
        </NavLink>
      </div>
    );
  }
}

export default Navbar;
