import React from "react";
import { Route, Redirect } from "react-router-dom";
// will remove later
// import { useUserContext } from "../context/user_context";
import { useAuth0 } from "@auth0/auth0-react";

const PrivateRoute = ({ schildren, ...rest }) => {
  const { user } = useAuth0();
  return (
    <Route
      {...rest}
      render={() => {
        return user ? children : <Redirect to="/"></Redirect>;
      }}
    ></Route>
  );
};
export default PrivateRoute;
