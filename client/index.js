import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
//import { Main, Login, Signup, UserHome } from './components';
import { BrowserRouter as Router, Match, Link } from 'react-router-dom'

import App from './components'

console.log(store.getState())

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App/>
    </Router>
  </Provider>,
  document.getElementById('app')
)

 /*ReactDOM.render(
   <App/>,
   document.getElementById('app')
)*/
