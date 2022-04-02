import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "../context/AuthContext";
import { JobProvider } from "../context/JobContext";
import Dashboard from "../views/Dashboard";
import JobForm from "../views/JobForm";
import JobList from "../views/JobList";
import Landing from "../views/Landing";
import Login from "../views/Login";
import Signup from "../views/Signup";
import AuthRoute from "./AuthRoute";
import LoginRoute from "./LoginRoute";

const Routes = () => {
  return (
    <Router>
      <AuthProvider>
        <JobProvider>
          <Switch>
            <Route exact path="/">
              <Landing />
            </Route>
            <LoginRoute exact path="/login">
              <Login />
            </LoginRoute>
            <Route exact path="/signup">
              <Signup />
            </Route>
            <AuthRoute exact path="/dashboard">
              <Dashboard />
            </AuthRoute>
            <AuthRoute exact path="/dashboard/list-job-vacancy">
              <JobList />
            </AuthRoute>
            <AuthRoute path="/dashboard/list-job-vacancy/create">
              <JobForm />
            </AuthRoute>
            <AuthRoute path="/dashboard/list-job-vacancy/edit/:id">
              <JobForm />
            </AuthRoute>
          </Switch>
        </JobProvider>
      </AuthProvider>
    </Router>
  );
};

export default Routes;
