import React, { useEffect } from "react";
import { Route, withRouter } from "react-router-dom";
import Layout from "../Pages/Layout/Layout";

const PrivateRoute = ({ component: Component, path, ...rest }) => {
  const render = (props) =>
    true ? (
      <Layout>
        <Component {...props} />
      </Layout>
    ) : null;

  return <Route path={path} render={render} {...rest} />;
};

export default withRouter(PrivateRoute);
