import React, { Component } from 'react'
import { connect } from 'react-redux'
import './Search.css'
import { fetchLocation } from '../actions/index.js'

class Search extends Component {

  componentDidMount(){
    this.props.fetchLocation()
  }

  render() {
    return (
      <div className='SearchBar'>
       <form action="">
        <a onClick ={ () => {this.props.fetchLocation()}} href='#' id="findSearch"> #</a>
        <input type="text" value={`${this.props.location} `} />
          <a href='#' id="locationSearch">O</a>
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
    fetchLocation: () => dispatch(fetchLocation())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)
