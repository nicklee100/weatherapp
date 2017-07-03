import axios from 'axios'

export const FETCH_LOCATION_SUCCESS = 'FETCH_LOCATION_SUCCESS'
export const FETCH_INITIAL_FORCAST = 'FETCH_INITIAL_FORCAST'

export function fetchLocationSuccess(location) {
  return {
    type: FETCH_LOCATION_SUCCESS,
    location
  }
}

export function fetchForcast(forcast) {
  return {
    type: FETCH_INITIAL_FORCAST,
    forcast
  }
}
