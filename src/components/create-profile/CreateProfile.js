import React from "react";
import { Link } from "react-router-dom";

const CreateProfile = () => {
  return (
    <div className="create-profile">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <Link to="/dashboard" className="btn btn-light">
              Go Back
            </Link>
            <h1 className="display-4 text-center text-light">
              Create Your Profile
              <h2 className="text-warning">Route Not Ready</h2>
            </h1>
            <p className="lead text-center text-light">
              Let's get some information to make your profile stand out
            </p>
            <small className="d-block pb-3 text-light">
              * = required field
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateProfile;
