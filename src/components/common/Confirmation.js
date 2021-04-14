import axios from "axios";
import React, { useState, useEffect, useLayoutEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthStateProvider } from "../../context/Context";

const Confirmation = (props) => {
  const { user, dispatch } = useContext(AuthStateProvider);

  const [error, setError] = useState("");

  //Checking if user ia already authenticated
  useLayoutEffect(() => {
    if (localStorage.user_details) {
      //Getting user from localStorage
      const userDetails = JSON.parse(localStorage.getItem("user_details"));
      //set use and isAuthenticated
      dispatch({ type: "VERIFY", user: userDetails });
    }
    if (user.auth.isAuthenticated) {
      props.history.push("/dashbaord");
    }
    // eslint - disable - next - line;
  }, [user.auth.isAuthenticated, props.history, dispatch]);

  //Component will receive props
  useEffect(() => {
    if (user.auth.isAuthenticated) {
      props.history.push("/dashboard");
    }
    if (error) {
      setError(user.error.error);
    }
    // eslint-disable-next-line
  }, [user.auth.isAuthenticated, error]);

  const ResendToken = async () => {
    try {
      await axios.patch(
        `https://petrauni.herokuapp.com/api/resendverification/${user.auth.email}/${user.auth.userId}`
      );
    } catch (err) {
      dispatch({ type: "GET_ERRORS", user: err.response.data.message });
      setError(err.response.data.message);
    }
  };

  return (
    <div className="container">
      <div className="confirmation row bg-primary text-center h-100 row align-items-center mt-5 w-100">
        <div className="col-sm-12 my-auto">
          <div>
            <Link className="text-light" to="/">
              {" "}
              Go Back
            </Link>
            <h2 className="text-light">
              Check your email inbox for email verification link{" "}
            </h2>
          </div>
          <div>
            {error ? (
              <p
                style={{ background: "  #FFCCCC", color: "#333" }}
                className="text-center fw-2"
              >
                {error}
              </p>
            ) : null}
            <Link
              onClick={ResendToken}
              className="btn btn-lg text-light bg-secondary mb-2"
              to="/confirm-email"
            >
              Resend Activation token
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
