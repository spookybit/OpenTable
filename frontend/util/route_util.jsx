import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import React from 'react';
import {Route, Redirect} from 'react-router-dom';

const Protected = ({ component: Component, path, loggedIn }) => (
  <Route path={path} render={(props) => (
     loggedIn ? (
      <Component {...props} />
    ) : (
      <Redirect to="/" />
    )
  )} />
);

const mapStateToProps = state => {
  return {loggedIn: Boolean(state.session.currentUser)};
};


export const ProtectedRoute = withRouter(connect(mapStateToProps, null)(Protected));
