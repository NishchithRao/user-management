import React from "react";
import { Redirect, Route } from "react-router-dom";
import { checkIfLoggedIn } from "../../../helpers/methods";

const LoggedInRoute = ({ children, ...rest }) => {
  console.log(checkIfLoggedIn());
  return (
    <Route
      {...rest}
      exact
      render={({ location }) =>
        checkIfLoggedIn() ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default LoggedInRoute;
