import axios from "axios";
import React, { createContext, useState } from "react";
import Cookies from "js-cookie";
import { useHistory } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = (props) => {
  const history = useHistory();
  const [auth, setAuth] = useState();
  const [input, setInput] = useState({
    name: "",
    image_url: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    let { name, value } = event.target;

    setInput({ ...input, [name]: value });
  };

  const handleLogin = (event) => {
    event.preventDefault();
    axios
      .post(`https://dev-example.sanbercloud.com/api/login`, input)
      .then((res) => {
        let { token, user } = res.data;
        Cookies.set("token", token);
        Cookies.set("user", JSON.stringify(user));
        history.push("/dashboard");
        setInput({});
      });
  };

  const handleSignup = (event) => {
    event.preventDefault();
    axios
      .post(`https://dev-example.sanbercloud.com/api/register `, input)
      .then((res) => {
        history.push("/login");
        setInput({});
      });
  };

  const handleLogout = (event) => {
    event.preventDefault();
    Cookies.remove("user");
    Cookies.remove("token");
    history.push("/login");
  };

  let handleFunction = {
    handleChange,
    handleLogin,
    handleSignup,
    handleLogout,
  };

  let state = {
    auth,
    setAuth,
    input,
    setInput,
  };

  return (
    <AuthContext.Provider value={{ state, handleFunction }}>
      {props.children}
    </AuthContext.Provider>
  );
};
