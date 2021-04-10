import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthStateProvider } from "../context/Context";
import setAuthToken from "../utility/setAuthToken";

const Navbar = () => {
  const { user, dispatch } = useContext(AuthStateProvider);
  const [toggle, setToggle] = useState("false");
  const openMenu = () => {
    setToggle(!toggle);
  };
  const hamburger = () => {
    openMenu();
  };

  const Logout = (e) => {
    e.preventDefault();
    //Remove token
    localStorage.removeItem("jwtToken");
    //Remove auth headder fro future request
    setAuthToken(false);
    //set current user to {} whixch will authenticate to false
    dispatch({ type: "LOGOUT", user: null });
  };

  const authLinks = (
    <ul className={toggle ? "nav-links " : "nav-links open "}>
      <li>
        <Link className=" links active" to="/login">
          About
        </Link>
      </li>
      <li>
        <Link className="links">Programs</Link>
      </li>
      <li>
        <Link className="links">Admissions</Link>
      </li>
      <li>
        <Link className="links">Financial Aid</Link>
      </li>
      <li>
        <Link className="links">Student Life</Link>
      </li>
      <li>
        <Link className="links">Contact</Link>
      </li>
      <li>
        <Link to="/login" className="button links btn btn-lg" onClick={Logout}>
          Logout
        </Link>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul className={toggle ? "nav-links " : "nav-links open "}>
      <li>
        <Link className=" links active" to="/login">
          About
        </Link>
      </li>
      <li>
        <Link className="links">Programs</Link>
      </li>
      <li>
        <Link className="links">Admissions</Link>
      </li>
      <li>
        <Link className="links">Financial Aid</Link>
      </li>
      <li>
        <Link className="links">Student Life</Link>
      </li>
      <li>
        <Link className="links">Contact</Link>
      </li>
      <li>
        <Link to="/login" className="button links btn btn-lg  ">
          Login
        </Link>
      </li>
      <li>
        <Link to="/register" className="button links btn btn-lg ">
          Apply
        </Link>
      </li>
    </ul>
  );
  return (
    <nav className="nav-bar">
      <nav className="nav-menu ">
        <label className={toggle ? "logo" : "logo open"}>
          Petra University
        </label>
        <div
          className={toggle ? "hamburger " : "hamburger open"}
          onClick={hamburger}
        >
          <div className={toggle ? "line" : "ham line"}></div>
          <div className={toggle ? "line" : "ham line"}></div>
          <div className={toggle ? "line" : "ham line"}></div>
        </div>

        {/* Nav links */}
        {user.auth.isAuthenticated ? authLinks : guestLinks}
      </nav>
      <div className="container nav-content">
        <div className="row">
          <div className="col-md-4 .col-sm-12">
            <div className="  ">
              <h3 className="remark text-capitalize pb-4">
                Raising well rounded individuals
              </h3>
              <p className="qoute pb-4">
                In some parts of the world, students are going to school every
                day. It’s their normal life. But in other parts of the world, we
                are starving for education…it’s like a precious gift. It’s like
                a diamond.
              </p>
            </div>
            <div className=" ">
              <a className="btn btn-large text-uppercase"> Find out more</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
