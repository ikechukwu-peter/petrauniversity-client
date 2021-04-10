import React, { useState, useEffect, useLayoutEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthStateProvider } from "../../context/Context";
import setAuthToken from "../../utility/setAuthToken";
import jwt_decode from "jwt-decode";
import "../../css/Login.css";
import axios from "axios";

const Login = (props) => {
  const { user, dispatch } = useContext(AuthStateProvider);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  //Making sure a user already logged in is not able to access the login page
  //componentdidupdate
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

  const handleLogin = async (e) => {
    e.preventDefault();
    let newUser = { email, password };

    try {
      const send_user = await axios.post("/api/login", newUser);
      const response = send_user.data;

      const { token } = response;

      //set to local storage
      localStorage.setItem("jwtToken", token);
      //set auth header
      setAuthToken(token);
      //Decode user from token
      const decoded = jwt_decode(token);

      dispatch({ type: "LOGIN_SUCCESS", user: decoded });

      //Clear errors
      dispatch({ type: "CLEAR_ERRORS" });
      //Redirect to the dashboard page
      props.history.push("/dashboard");
    } catch (err) {
      //Check if there is an email property, if there is then the user has not verified their email
      if (err.response.data.hasOwnProperty("email")) {
        dispatch({
          type: "VERIFY",
          user: {
            email: err.response.data.email,
            userId: err.response.data.user_id,
          },
        });
        //Send the user to the confirm page
        return props.history.push("/confirm-email");
      }
      dispatch({ type: "GET_ERRORS", user: err.response.data.message });
      setError(user.error.error);
    }
  };
  return (
    <div className=" login bg-primary login ">
      <form className="form" onSubmit={handleLogin}>
        <div className="home-logo text-center">
          <Link to="/">
            <i className="fa fa-home home-icon"></i>
          </Link>
        </div>
        <h2>Welcome Back!</h2>
        {error ? (
          <p
            style={{ background: "  #FFCCCC", color: "#333" }}
            className="text-center fw-2"
          >
            {error}
          </p>
        ) : null}
        <div className="input-container">
          <i className="fa fa-envelope icon"></i>
          <input
            type="email"
            id="inputEmail"
            class="form-control input-field"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoFocus
          />
        </div>

        <div className="input-container">
          <i className="fa fa-key icon"></i>
          <input
            type="password"
            id="inputPassword"
            className="form-control input-field"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me" /> Remember me
          </label>
        </div>
        <button
          className="btn btn-lg  btn-block login-btn"
          type="submit"
          // disabled={loading}
        >
          Sign in
        </button>
        <p className="redirect">
          {" "}
          Don't have an account?{" "}
          <Link to="/register" className="register login-link">
            Sign Up
          </Link>
        </p>
        <p className="redirect">
          <Link to="/register" className="register login-link">
            Forgot Password
          </Link>
        </p>
        <p className="mt-5 mb-3 text-center text-muted">&copy; 2017-2021</p>
      </form>
    </div>
  );
};

export default Login;
