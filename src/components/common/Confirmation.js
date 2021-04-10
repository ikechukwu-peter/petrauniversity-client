import React, { useState, useEffect, useLayoutEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthStateProvider } from "../../context/Context";

const Confirmation = (props) => {
  const { user } = useContext(AuthStateProvider);

  const [error, setError] = useState("");

  //Checking if user ia already authenticated
  useLayoutEffect(() => {
    if (user.auth.isAuthenticated) {
      props.history.push("/dashbaord");
    }
    // eslint - disable - next - line;
  }, []);

  //Component will receivde props
  useEffect(() => {
    if (user.auth.isAuthenticated) {
      props.history.push("/dashboard");
    }
    if (error) {
      setError(user.error.error);
    }
    // eslint-disable-next-line
  }, [user.auth.isAuthenticated, error]);
  return (
    <div className="confirmation bg-primary text-center h-100 row align-items-center mt-5 w-100">
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
        <Link
          className="btn btn-lg text-light bg-secondary"
          to={`/resendverification/${user.auth.email}/${user.auth.userId} `}
        >
          Resend Activation token
        </Link>
      </div>
    </div>
  );
};

export default Confirmation;
