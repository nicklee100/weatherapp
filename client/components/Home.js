import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getGoogleGeoLocation, fetchWeather, getInitialWeather } from '../actions/index.js'
import {store} from './App.js'
import Search from './Search.js'
import WeatherBar from './WeatherBar.js'
import './App.css'
import  Map from './Googlemaps'

class Home extends Component {
  constructor(){
    super()
    this.state = {
    }
  }

  componentDidMount() {
    this.props.getInitial()
    this.props.getGoogleGeoLocation()
  }

  render() {

    return (
      <div>
        <WeatherBar data = {this.props.data.current}/>
        <Search/>
         <Map/>
      </div>
    )
  }
}

const  mapStateToProps = function(state) {
  return {
      data: state.fetchWeatherSuccess,     //this should be named data
      hasErrored: state.hasErrored,
      isLoading: state.isLoading,
      Glocation: state.location
  }
}

const mapDispatchToProps = function(dispatch) {
  return {
    getGoogleGeoLocation: () => dispatch(getGoogleGeoLocation()),
    getInitial: () => dispatch(getInitialWeather())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
