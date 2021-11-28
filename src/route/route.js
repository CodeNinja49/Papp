import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import LoginPage from "../Pages/LoginPage/LoginPage";
import GuestLogin from "../Pages/LoginPage/GuestLogin";
import GlobalSearch from "../Pages/GlobalSearch/GlobalSearch";
import Home from "../Pages/Home/Home";
import ProjectDetails from "../Pages/ProjectDetails/ProjectDetails";
import Patentupload from "../Pages/PatentUpload/PatentUpload";
import MetaFields from "../Pages/MetaFields/MetaFields";

const getRoute = ({ login_from_garrage, user_type }) => {
  return (
    <Switch>
      <Route path="/" exact>
        <LoginPage />
      </Route>
      <Route
        path="/garrageLogin"
        exact
        render={(props) => <GuestLogin {...props} />}
      ></Route>
      <Route
        path="/projectDetails/:fileUrl/:projectId"
        render={(props) => <ProjectDetails {...props} />}
        exact
      ></Route>
      <PrivateRoute path="/search" component={GlobalSearch} exact />
      <PrivateRoute path="/home" component={Home} exact />
      <PrivateRoute
        path="/project/:fileUrl/:projectId"
        component={ProjectDetails}
        exact
      />
      {login_from_garrage || user_type != "client" ? (
        <PrivateRoute path="/upload" component={Patentupload} exact />
      ) : null}
      <PrivateRoute path="/metafields" component={MetaFields} exact />
      <Redirect to="/home" />
    </Switch>
  );
};

export default getRoute;
