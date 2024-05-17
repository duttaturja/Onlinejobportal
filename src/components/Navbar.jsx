import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav>
      <Link to="/" className="title">
        <img src="../src/assets/logo.png" />
      </Link>
      <ul>
        <li>
          <NavLink to="/search">Search a Job</NavLink>
        </li>
        <li>
          <NavLink to="/post">Post a Job</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/blogs">Blogs</NavLink>
        </li>
        <li>
          <NavLink to="/signin">Sign-In</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
