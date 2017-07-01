import React, { Component } from 'react'
import { connect } from 'react-redux'

class Home extends Component {
  constructor(){
    super()
  }
  render() {
    console.log("props", this.props)
    return (
      <div>
        <h3>Weather App</h3>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    location: state.location
  }
}

export default connect(mapStateToProps)(Home)
