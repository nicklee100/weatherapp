import React, { Component } from 'react'

class TimeMachine extends Component {
  render(){
    return (
      <div>
        <h4>Search for Location & Date</h4>
        <button>View Current</button> <br/>
        <input type="date" id="myDate"/>
        <div>
          <p>GeoCoding</p>
          <input type="text" placeholder='enter location'/>
        </div>
      </div>
    )
  }
}

export default TimeMachine
