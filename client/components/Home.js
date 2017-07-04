import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchInitialWeather } from '../actions/index.js'
import {store} from './App.js'


class Home extends Component {
  constructor(){
    super()
  }

  componentDidMount() {
    this.props.fetchData()
  }

  render() {
    return (
      <div>
        <h3>Weather App</h3>
        <p>data:{this.props.data}</p>
        <button onClick={()=>{console.log(store.getState())}}>click me</button>
      </div>
    )
  }
}

const  mapStateToProps = function(state) {
  console.log(state)
  return {
      data: state.fetchWeatherSuccess,     //this should be named data
      hasErrored: state.hasErrored,
      isLoading: state.isLoading
  }
}

const mapDispatchToProps = function(dispatch) {
  return {
    fetchData: () => dispatch(fetchInitialWeather())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
