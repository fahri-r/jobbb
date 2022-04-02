import Cookies from "js-cookie";
import { Redirect, Route } from "react-router-dom";

const AuthRoute = ({ ...props }) => {
  if (Cookies.get("token") === undefined) {
    return <Redirect to="/login" />;
  } else if (Cookies.get("token") !== undefined) {
    return <Route {...props} />;
  }
};

export default AuthRoute;
