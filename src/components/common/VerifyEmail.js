import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { AuthStateProvider } from "../../context/Context";

const VerifyEmail = (props) => {
  const { dispatch } = useContext(AuthStateProvider);
  const [error, setError] = useState("");

  useEffect(() => {
    const request = async () => {
      try {
        await axios.put(`https://petrauni.herokuapp.com${props.match.url}`);
        setTimeout(() => {
          props.history.push("/login");
        }, 2000);
      } catch (err) {
        dispatch({ type: "GET_ERRORS", user: err.response.data.message });
        setError(err.response.data.message);
      }
    };
    request();
  }, [props.history, props.match.url, dispatch]);

  return (
    <div className="container">
      <div className="confirmation row text-center h-100 row align-items-center mt-5 w-100">
        <div className="col-sm-12 my-auto">
          <div>
            <Link className="text-light" to="/">
              {" "}
              Go Back
            </Link>
            <h2 className="text-info">
              {" "}
              On success you will be redirected to the login page shortly
            </h2>
            {error ? (
              <p
                style={{ background: "  #FFCCCC", color: "#333" }}
                className="text-center fw-2"
              >
                {error}
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;
