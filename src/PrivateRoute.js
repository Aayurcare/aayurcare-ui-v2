import React from "react";
import useIsAuthenticated from "react-auth-kit/hooks/useIsAuthenticated";
import { Navigate } from "react-router-dom";
import { SESSION_REFRESH_URL } from "./api/urls";
import { fetchSessionData } from "./api/authAPI";

const PrivateRoute = ({ element }) => {
  try {
    const isAuthenticated = useIsAuthenticated();

    //TODO check for session validation.
    // const response = await fetchSessionData();
    // if (response) {
    // }
    //Make API to validate

    return isAuthenticated ? element : <Navigate to="/sign-in" />;
  } catch (error) {
    return <Navigate to={"/sign-in"} />;
  }
};

export default PrivateRoute;
