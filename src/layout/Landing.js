import React from "react";
//import { Link} from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import campus from "../images/petra_one.jpg";
import library from "../images/petra_five.jpg";

import people from "../images/people.jpg";

const Landing = () => {
  return (
    <div className="landing">
      <Navbar />

      {/*  */}
      <div className="campus-container">
        <div className="col-md-4 mt-5  campus-intro">
          <h3 className="campus-section">Campuses</h3>

          <p>
            We have very large campuses, that you will love just like our other
            students who had enjoyed the excellent living standard
          </p>
          <div>
            <ul className="campus-links">
              <li>
                {" "}
                <a href="/register">Apply Online</a>{" "}
              </li>
              <li>
                <a href="_target_blank">Calender</a>
              </li>
              <li>
                <a href="_target_blank">Programs</a>
              </li>
              <li>
                <a href="_target_blank">Contacts Us</a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <img
            className=" img-responsive  mt-5  "
            src={campus}
            alt="Campus building"
          />
        </div>
      </div>
      {/*  */}
      <div className="grid">
        <div className="img-holder ">
          {" "}
          <img alt="smiling students" src={people} />
        </div>
        <div className="text">
          <h2 className=" outro outro-1 pt-5 pb-4 mr-3">
            Welcome to Petra University
          </h2>
          <h5 className=" outro outro-2 text-uppercase pt-2 ">
            Message from the chancellor
          </h5>

          <p className="outro fw-3 pt-2 ">
            Petra University is not your usual kind of university and I can't
            resist telling people about that fact!
          </p>
          <p className="outro  fw-3 pt-2 pb-4">
            PU was established 100 years ago to help create a better society. At
            the time, President John Moore predicted we would be the most
            sophisticated university
          </p>
          <a
            href="_target_blank"
            className=" outro btn btn-lg  text-uppercase p-2 mb-2 text-align-center"
          >
            Discover More
          </a>
        </div>
      </div>

      <div className=" grid-second">
        <div className="text-position">
          <h2 className=" outro  outro-3 pt-5 pb-4 mr-3">
            Build Your Career at Petra University
          </h2>

          <p className="outro outro-4  fw-3 pt-2 pb-4">
            PU was established 100 years ago to help create a better society. At
            the time, President John Moore predicted we would be the most
            sophisticated university
          </p>
          <a
            href="_target_blank"
            className=" outro btn btn-lg  text-uppercase p-2 mb-2 text-align-center"
          >
            Find Opportunity
          </a>
        </div>
        <div className=" img-pop ">
          {" "}
          <img alt="school library" src={library} />
        </div>
      </div>
      {/* footer */}
      <Footer />
    </div>
  );
};

export default Landing;
