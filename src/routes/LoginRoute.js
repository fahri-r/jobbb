import Cookies from "js-cookie";
import { Redirect, Route } from "react-router-dom";

const LoginRoute = ({ ...props }) => {
  if (Cookies.get("token") === undefined) {
    return <Route {...props} />;
  } else if (Cookies.get("token") !== undefined) {
    return <Redirect to="/dashboard" />;
  }
};

export default LoginRoute;
