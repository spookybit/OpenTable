import React from 'react';
import ReactDOM from 'react-dom';

import Modal from 'react-modal';

import configureStore from './store/store';
import Root from './components/root';

import { login, logout, signup } from './actions/session_actions';
import { clearErrors } from './actions/session_actions';

import { currentLocation, allLocations } from './actions/location_actions';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  Modal.setAppElement(root);

  let store;
  if (window.currentUser) {
    const preloadedState = {session: {currentUser: window.currentUser} };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  window.currentLocation = currentLocation;
  window.allLocations = allLocations;

  window.clearErrors = clearErrors;
  window.store = store;

  ReactDOM.render(<Root store={store} />, root);
});
