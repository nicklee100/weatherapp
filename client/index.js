import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import store from './store';
//import { Main, Login, Signup, UserHome } from './components';
//import { me } from './reducer/user';

import App from './components'


ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <App/>
    </Router>
  </Provider>,
  document.getElementById('app')
)

// ReactDOM.render(
//   <App/>,
//   document.getElementById('app')
// )
