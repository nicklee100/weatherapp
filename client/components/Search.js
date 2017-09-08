import React, { Component } from 'react'
import { connect } from 'react-redux'
import './Search.css'
import { fetchInitialWeather, searchLocation, getInitialWeather, getGoogleGeoLocation } from '../actions/index.js'
import magnifyingglass from './search.png'
import currentlocation from './current-location.png'


class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchInput: ''
    }

  this.handleChange = this.handleChange.bind(this)
  this.handleSubmit = this.handleSubmit.bind(this)
  this.getLocationHTML5 = this.getLocationHTML5.bind(this)
  this.handleSearch = this.handleSearch.bind(this)
  this.fetchLocation = this.fetchLocation.bind(this)
  }

  handleChange(evt) {
    evt.preventDefault()
    this.setState({searchInput: evt.target.value})
  }

  getLocationHTML5 () {
      if (navigator.geolocation) {
        console.log('hi')
        navigator.geolocation.getCurrentPosition(this.showPosition);
    } else {
      console.log("Geolocation is not supported by this browser.")
    }
  }

  showPosition(position) {
    console.log(position.coords)
  }

  fetchLocation(){
    this.props.fetchLocation()
    this.props.getGoogleGeoLocation()
  }

  handleSubmit() {
    console.log(this.state)
    this.props.searchLocation(this.state.searchInput)
    this.setState({searchInput: ' '})

  }

  handleSearch() {
    console.log(this.state.searchInput)
    this.props.searchLocation(this.state.searchInput)
  }

  render() {
    return (
      <div className='SearchBar'>
        <form id='formBar'onSubmit={this.handleSubmit}>

         <img id='currentLocation' onClick ={this.fetchLocation} href='#'  src={currentlocation} />

          <input  type="text" onChange={this.handleChange} value={ this.state.searchInput } />

          <img id='locationSearch' href='#'  onClick={ this.handleSearch} src={magnifyingglass} />

        </form>
      </div>
    )
  }
}

const mapStateToProps = function(state) {
  return {
    location: state.location
  }
}

const mapDispatchToProps = function(dispatch) {
  return {
    fetchLocation: () => dispatch(getInitialWeather()),
    searchLocation: (data) => dispatch(searchLocation(data)),
    getGoogleGeoLocation: () => dispatch(getGoogleGeoLocation())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)
