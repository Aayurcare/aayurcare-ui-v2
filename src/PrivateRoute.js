import React from "react";
import useIsAuthenticated from "react-auth-kit/hooks/useIsAuthenticated";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ element }) => {
  try {
    const isAuthenticated = useIsAuthenticated();

    //TODO check for session validation.
    //Make API to validate

    return isAuthenticated ? element : <Navigate to="/sign-in" />;
  } catch (error) {
    return <Navigate to={"/sign-in"} />;
  }
};

export default PrivateRoute;
