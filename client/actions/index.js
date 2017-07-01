import axios from 'axios'

export const FETCH_LOCATION_SUCCESS = 'FETCH_LOCATION_SUCCESS'

export function fetchLocationSuccess(location) {
  return {
    type: FETCH_LOCATION_SUCCESS,
    location
  }
}
