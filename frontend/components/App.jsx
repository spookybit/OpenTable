import React from 'react';
import {Provider} from 'react-redux';
import {Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';

import Modal from 'react-modal';

import {AuthRoute} from '../util/route_util';

import HeadingContainer from './heading/heading_container';
import SessionFormContainer from './session_form/session_form_container';
import HomeIndexContainer from './home_index/home_index_container';

// import CityContainer from './city/city_container';
// <Switch>
//   <Route path="/:id" component={CityContainer} />
// </Switch>

const App = () => (
  <div>
    <HomeIndexContainer />
    <HeadingContainer />

  </div>
);
// <AuthRoute path="/log" component={HeadingContainer} />
// <AuthRoute path="/signup" component={SessionFormContainer} />

export default App;
