import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer  text-white  text-center fs-5 ">
      <ul className="footer-sub-links ">
        <li>
          <Link className="foot-links">About</Link>
        </li>
        <li>
          <Link className="foot-links">Programs</Link>
        </li>
        <li>
          <Link className="foot-links">Admissions</Link>
        </li>
        <li>
          <Link className="foot-links">Financial Aid</Link>
        </li>
        <li>
          <Link className="foot-links">Student Life</Link>
        </li>
        <li>
          <Link className="foot-links">Contact</Link>
        </li>
      </ul>
      <p className="footer--footer-date">
        {" "}
        Copyright &copy; {new Date().getFullYear()} Petra University{" "}
      </p>
    </footer>
  );
}

export default Footer;
