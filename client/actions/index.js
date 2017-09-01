import axios from 'axios'

export const FETCH_INITIAL_FORCAST = 'FETCH_INITIAL_FORCAST'
export const GET_LOCATION = 'GET_LOCATION'
export const FETCH_LOCATION_SUCCESS = 'FETCH_LOCATION_SUCCESS'
export const WEATHER_HAS_ERRORED = 'WEATHER_HAS_ERRORED'
export const WEATHER_IS_LOADING = 'WEATHER_IS_LOADING'
export const FETCH_WEATHER_SUCCESS = 'FETCH_WEATHER_SUCCESS'
export const SEARCH_LOCATION = "SEARCH_LOCATION"


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
      .then((data) => { console.log(data); dispatch(fetchWeatherSuccess(data.data))})
  }
}


// export function fetchForcast(forcast) {
//   return {
//     type: FETCH_INITIAL_FORCAST,
//     forcast
//   }
// }


// export function fetchLocationSuccess(location) {
//   console.log('location:',location)
//   return {
//     type: FETCH_LOCATION_SUCCESS,
//     location
//   }
// }

//not working properly
// export function fetchLocation() {
//   return (dispatch) => {
//     //dispatch locationisloading
//     axios.get('/search/initiallocation')
//       .then((response) => {
//         return response
//       })
//       .then((data) => { dispatch(fetchLocationSuccess(data)) })
//   }
// }
