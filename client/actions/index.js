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


export function fetchWeather(coordinates) {
  return (dispatch) => {
    dispatch(weatherIsLoading(true))
    axios.get(`/initialweather/weather/${coordinates.lat}/${coordinates.lng}`)
      .then((response) => {
        if (!response.status === 200) {
          console.log('not ok')
          throw Error(response.statusText)
        }
        dispatch(weatherIsLoading(false))
        return response
      })
      .then((data) => { dispatch(fetchWeatherSuccess(data.data)) })
      .catch((err) => (console.log(err)))
      .catch(() => dispatch(weatherHasErrored(true)))
  }
}


export function searchLocation(location) {
  return (dispatch) => {
    axios.get(`/search/${location}` )
      .then(({data}) => {
        console.log('test',data);
        dispatch(fetchWeatherSuccess(data))
        dispatch(fetchLocationSuccess(data.coordinates))

      })
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


export function getInitialWeather() {
  const request = axios.post(`https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyAvn1WOC1uXO7jw820pYZsSzZUNh5g7cTs`, {
    considerIp: "true",
  })

  return (dispatch) => {
    request.then(({data}) => {
      dispatch(fetchWeather(data.location))
    });
  };
}
