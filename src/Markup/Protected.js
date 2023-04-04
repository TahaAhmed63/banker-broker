import { Route, Redirect } from "react-router-dom";
import React from "react";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = localStorage.getItem("usertoken"); // replace this with your authentication logic
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
