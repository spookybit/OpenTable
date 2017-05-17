import React from 'react';
import ReactDOM from 'react-dom';

import {login, signup, logout} from './util/sessions_api_util';

// import Root from './components/root';
// import configureStore from './store/store';
//
// import * as actions from './actions/post_actions';
// import { selectAllPosts } from './reducers/selectors';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');

  window.login = login;
  window.signup = signup;
  window.logout = logout;

  // const store = configureStore();

  // window.store = store;

  ReactDOM.render(<h1>hiwerere</h1>, root);
});
