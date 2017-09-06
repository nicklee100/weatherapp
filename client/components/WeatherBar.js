import React  from 'react'
import './WeatherBar.css'

function WeatherBar(props) {
  if(props.data){
    return (
      <div className="weatherBar">
        <ul>
          <li> <span className="label">Tempature:</span> {Math.round(props.data.temperature)} F°</li>
          <li> <span className="label">Wind:</span> {Math.round(props.data.windSpeed)} mph</li>
          <li> <span className="label">Humidity:</span> {props.data.humidity * 100} %</li>
          <li> <span className="label">Dew Pt: </span> {props.data.dewPoint}˚</li>
          <li> <span className="label">UV Index </span> {props.data.uvIndex}</li>
          <li> <span className="label">Visibility:</span> {props.data.visibility} mi </li>
          <li> <span className="label">Pressure:</span> {props.data.pressure} mb</li>
        </ul>
      </div>
    )
  }  else {
      return ( <p>loading...</p> )
    }
}

export default WeatherBar
