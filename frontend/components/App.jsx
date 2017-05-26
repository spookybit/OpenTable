import React from 'react';
import {Provider} from 'react-redux';
import {Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';

import Modal from 'react-modal';

import {ProtectedRoute} from '../util/route_util';

import HeadingContainer from './heading/heading_container';
import SessionFormContainer from './session_form/session_form_container';
import HomeIndexContainer from './home_index/home_index_container';
import RestaurantContainer from './restaurant/restaurant_container';
import SearchPageContainer from './search/search_page_container';
import FavoritesContainer from './favorites/favorites_container';
import ReservationPageContainer from './reservations/reservation_page_container';

import CityContainer from './city/city_container';

const App = () => (
  <div>
    <HeadingContainer />
    <Switch>
      <Route path="/search" component={SearchPageContainer} />
      <Route exact path="/restaurant/:name/:id" component={RestaurantContainer} />
      <Route exact path="/city/:id" component={CityContainer} />
      <ProtectedRoute exact path="/favorites" component={FavoritesContainer} />
      <ProtectedRoute exact path="/reservations" component={ReservationPageContainer} />
      <Route path="/" component={HomeIndexContainer} />
    </Switch>

  </div>
);

export default App;
