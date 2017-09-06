import React from 'react'
import ReactDOM from 'react-dom'
import { Link, Route, HashRouter } from 'react-router-dom'

import App from './components/App.js'

ReactDOM.render(
  <HashRouter>
     <Route path='/' component={App}/>
  </HashRouter>,
  document.getElementById('root'))
