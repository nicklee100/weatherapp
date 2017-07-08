import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchInitialWeather } from '../actions/index.js'
import {store} from './App.js'
import Search from './Search.js'
import WeatherBar from './WeatherBar.js'
import './App.css'


class Home extends Component {
  constructor(){
    super()
  }

  componentDidMount() {
    this.props.fetchData()
  }

  render() {
    console.log('home render:', this.props.data.current)
    let data = Object.keys(this.props.data).length === 0 ? [] : Object.keys(this.props.data.current)
    return (
      <div>
        <WeatherBar data = {this.props.data.current}/>
        <Search/>
        <h3>All Current Weather App</h3>
          <ul>
            {
              data.map((el) => {
                return <li className='red' key={el}>{`${el}:     ${this.props.data.current[el]}`}</li>
              })
            }
          </ul>
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
