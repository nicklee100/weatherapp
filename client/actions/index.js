import axios from 'axios'

 import { FETCH_INITIAL_FORCAST, GET_LOCATION, WEATHER_HAS_ERRORED, WEATHER_IS_LOADING, FETCH_WEATHER_SUCCESS, SEARCH_LOCATION, FETCH_LOCATION_SUCCESS, LOCATION_HAS_ERRORED, LOCATION_IS_LOADING } from './actionTypes.js'


export function locationHasErrored(bool) {
  return {
    type: LOCATION_HAS_ERRORED,
    locationHasErrored: bool
  }
}

export function locationIsLoading(bool) {
  return {
    type: LOCATION_IS_LOADING,
    locationIsLoading: bool
  }
}

export function fetchLocationSuccess(location) {
  return {
    type: FETCH_LOCATION_SUCCESS,
    location
  }
}

export function weatherHasErrored(bool) {
  return {
    type: WEATHER_HAS_ERRORED,
    hasErrored: bool
  }
}

export function weatherIsLoading(bool) {
  return {
    type: WEATHER_IS_LOADING,
    isLoading: bool
  }
}

export function fetchWeatherSuccess(data) {
  return {
    type: FETCH_WEATHER_SUCCESS,
    data: data
  }
}

export function fetchInitialWeather() {
  return (dispatch) => {
    dispatch(weatherIsLoading(true))
    //write error message on server
    axios.get('/initialweather')
      .then((response) => {
        // Object {data: "hit route", status: 200, statusText: "OK", headers:
        if (!response.status === 200) {
          console.log('not ok')
          throw Error(response.statusText)
        }
        dispatch(weatherIsLoading(false))
        return response
      })
      //.then((response) => response.json())
      .then((data) => { dispatch(fetchWeatherSuccess(data.data)) })
      .catch((err) => (console.log(err)))
      .catch(() => dispatch(weatherHasErrored(true)))
  }
}

export function searchLocation(location) {
  return (dispatch) => {
    axios.get(`/search/${location}` )
      .then((data) => { dispatch(fetchWeatherSuccess(data.data))})
  }
}

export function getGoogleGeoLocation(){
  return (dispatch) => {
    dispatch(locationIsLoading(true))
    axios.post(`https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyAvn1WOC1uXO7jw820pYZsSzZUNh5g7cTs`, {
      considerIp: "true",
    })
    .then( data => {
      dispatch(locationIsLoading(false))
      dispatch(fetchLocationSuccess(data.data.location))
    })
    .catch((error)=> {
      console.log(error)
      dispatch(locationIsLoading(false))

      dispatch(locationHasErrored(true))
    })
  }
}
