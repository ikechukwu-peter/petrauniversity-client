import React, { useState, useEffect, useLayoutEffect, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { AuthStateProvider } from "../../context/Context";
import "../../css/Login.css";

const Register = (props) => {
  const { user, dispatch } = useContext(AuthStateProvider);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  //Making sure a user already logged in is not able to access the login page
  //componentdidupdate
  useLayoutEffect(() => {
    if (user.auth.isAuthenticated) {
      props.history.push("/dashboard");
    }
    // eslint-disable-next-line
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = {
      email,
      password,
      passwordConfirm,
    };
    try {
      const send_user_data = await axios.post("/api/signup", newUser);
      const response = send_user_data.data;

      dispatch({ type: "VERIFY", user: response });
      setMessage(response.message);
      dispatch({ type: "CLEAR_ERRORS" });
      props.history.push("/confirm-email");
    } catch (err) {
      // Handle Error Here
      dispatch({ type: "GET_ERRORS", user: err.response.data.message });
      setError(err.response.data.message);
      console.log(err.response.data.message);
    }
  };
  return (
    <div className=" login bg-primary login ">
      <form class="form" onSubmit={handleSubmit}>
        <div className="home-logo text-center">
          <Link to="/">
            <i className="fa fa-home home-icon"></i>
          </Link>
        </div>
        <h2>Sign Up to Learn More</h2>
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
            class="form-control input-field"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="input-container">
          <i className="fa fa-key icon"></i>
          <input
            type="password"
            id="inputPassword2"
            class="form-control input-field"
            placeholder="Repeat Password"
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
            required
          />
        </div>
        <button class="btn btn-lg  btn-block login-btn" type="submit">
          Sign Up
        </button>
        <p className="redirect">
          {" "}
          Already have an account?{" "}
          <Link to="/login" className="register login-link">
            Sign In
          </Link>
        </p>
        <p className="redirect">
          By signing up you agree to our <a href="#">Terms</a> &{" "}
          <a href="#">Privacy </a>
        </p>
        <p class="mt-5 mb-3 text-center text-muted">&copy; 2017-2021</p>
      </form>
    </div>
  );
};

export default Register;
