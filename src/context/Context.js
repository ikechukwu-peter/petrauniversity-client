import React, { useReducer, createContext, useLayoutEffect } from "react";
import authReducer from "../reducers/authReducer";
import errorReducer from "../reducers/errorReducer";
import combineReducers from "react-combine-reducers";
import jwt_decode from "jwt-decode";
import setAuthToken from "../utility/setAuthToken";
export const AuthStateProvider = createContext();

const initialUser = {
  user: {},
  isAuthenticated: false,
  email: "",
  userId: "",
};
const initialError = {
  error: "",
};

const [profileReducer, initialProfile] = combineReducers({
  auth: [authReducer, initialUser],
  error: [errorReducer, initialError],
});

export const AuthProvider = ({ children }) => {
  const [user, dispatch] = useReducer(profileReducer, initialProfile);
  useLayoutEffect(() => {
    //check for token
    if (localStorage.jwtToken) {
      //set auth token header auth
      setAuthToken(localStorage.jwtToken);

      //decode jwt
      const decoded = jwt_decode(localStorage.jwtToken);

      //set use and isAuthenticated
      dispatch({ type: "LOGIN_SUCCESS", user: decoded });

      //Check for expired token
      const currentTime = Date.now() / 1000;
      if (decoded.exp < currentTime) {
        //logOut
        dispatch({ type: "LOGOUT", user: null });
        //Redirect to login
        window.location.href = "/login";
      }
    }
  }, []);

  return (
    <AuthStateProvider.Provider value={{ user, dispatch }}>
      {children}
    </AuthStateProvider.Provider>
  );
};
