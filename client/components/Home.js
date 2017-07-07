import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchInitialWeather } from '../actions/index.js'
import {store} from './App.js'
import Search from './Search.js'


class Home extends Component {
  constructor(){
    super()
  }

  componentDidMount() {
    this.props.fetchData()
  }

  render() {
    let data = Object.keys(this.props.data).length === 0 ? [] : Object.keys(this.props.data.current)
    return (
      <div>
        <h3>All Current Weather App</h3>
          <ul>
            {
              data.map((el) => {
                return <li key={el}>{`${el}:     ${this.props.data.current[el]}`}</li>
              })
            }
          </ul>
        <button onClick={()=>{console.log(store.getState())}}>click me</button>
        <Search/>
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
