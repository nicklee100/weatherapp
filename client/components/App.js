import React, { Component } from 'react'
import { connect, Provider } from 'react-redux'
import { combineReducers, createStore, applyMiddleware } from 'redux'
import {Route} from 'react-router-dom'
import thunk from 'redux-thunk';

import Home from './Home.js'
import Historical from './Historical'
import {fetchWeatherSuccess, weatherHasErrored, weatherIsLoading, location, locationHasErrored, locationIsLoading } from '../reducers/'

const rootReducer = combineReducers({ fetchWeatherSuccess, weatherHasErrored, weatherIsLoading,location, locationIsLoading, locationHasErrored })

const store = createStore(rootReducer,  applyMiddleware(thunk) )
export {store}
class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <div id='appContainer'>
          <Route exact path='/' component ={Home}/>
          <Route path='/history' component = { Historical } />
        </div>
      </Provider>
    )
  }
}
export default App

