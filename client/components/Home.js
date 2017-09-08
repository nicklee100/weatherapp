import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchInitialWeather, getGoogleGeoLocation, fetchWeather, getInitialWeather } from '../actions/index.js'
import {store} from './App.js'
import Search from './Search.js'
import WeatherBar from './WeatherBar.js'
import './App.css'
import  Map from './Googlemaps'

class Home extends Component {
  constructor(){
    super()
    this.state = {
      location: ''
    }
  }

  componentDidMount() {
    //this.props.fetchData()
    this.props.getInitial()
    //this.props.getGoogleGeoLocation()

  }

  componentDidUpdate(){
  }

  // getLocation(){
  //   new Promise(function(resolve, reject) {
  //     this.props.fetchData()
  //   return this.state.location
  // })}

  render() {
    let data = Object.keys(this.props.data).length === 0 ? [] : Object.keys(this.props.data.current)
    return (
      <div>
        <WeatherBar data = {this.props.data.current}/>
        <Search/>
        <h3>All Current Weather App</h3>
        <button onClick={() => {this.props.fetchWeather()}}></button>
          <ul>
            {
              data.map((el) => {
                return <li className='red' key={el}>{`${el}:     ${this.props.data.current[el]}`}</li>
              })
            }
          </ul>

         <Map />
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
    fetchData: () => dispatch(fetchInitialWeather()),
    getGoogleGeoLocation: () => dispatch(getGoogleGeoLocation()),
    fetchWeather: () => dispatch(fetchWeather({lat:29.9511, lng:90.0715 })),
    getInitial: () => dispatch(getInitialWeather())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
