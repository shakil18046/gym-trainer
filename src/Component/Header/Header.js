import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink } from "react-router-dom";
import auth from "../../Firebase_init";
import "./Header.css";
const Header = () => {
  const [user, loading, error] = useAuthState(auth);
  console.log(user);
  const logout = () => {
    signOut(auth);
  };
  return (
    <div>
      <nav className="nav-wrapper">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "navactive" : "navinactive")}
        >
          Home
        </NavLink>
        <NavLink
          to="/Checkout"
          className={({ isActive }) => (isActive ? "navactive" : "navinactive")}
        >
          Checkout
        </NavLink>
        <NavLink
          to="/Blog"
          className={({ isActive }) => (isActive ? "navactive" : "navinactive")}
        >
          Blog
        </NavLink>
        <NavLink
          to="/AboutMe"
          className={({ isActive }) => (isActive ? "navactive" : "navinactive")}
        >
          AboutMe
        </NavLink>
        {user ? (
          <button className="signout-btn" onClick={logout}>
            Signout
          </button>
        ) : (
          <NavLink
            to="/Login"
            className={({ isActive }) =>
              isActive ? "navactive" : "navinactive"
            }
          >
            Login
          </NavLink>
        )}
      </nav>
    </div>
  );
};

export default Header;
