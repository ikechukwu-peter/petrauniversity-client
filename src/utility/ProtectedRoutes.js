import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthStateProvider } from "../context/Context";

//This component is used to protect routes from users not logged in
const ProtectedRoutes = ({ component: Component, ...rest }) => {
  const { user } = useContext(AuthStateProvider);

  return (
    <Route
      {...rest}
      render={(props) =>
        user.auth.isAuthenticated === true ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default ProtectedRoutes;
