import React from "react";
import { NavLink, Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="display-4 text-light">
              <NavLink to="/" style={{ textDecoration: "none" }}>
                Dashboard
              </NavLink>
            </h1>
            <div>
              <p className="lead  text-light">Welcome User </p>
              <p className=" text-light">
                You have not yet setup a profile, please add some info
              </p>
              <Link to="/create-profile" className="btn btn-lg btn-info">
                Create Profile
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
