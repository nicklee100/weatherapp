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
    console.log("props", this.props)
    return (
      <div>
        <h3>Weather App</h3>
        <p onClick={() => {console.log(store.getState())}}>data:{this.props.data}</p>
      </div>
    )
  }
}

const  mapStateToProps = function(state) {
  return {
      data: state.data,
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
