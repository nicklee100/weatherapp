// import { FETCH_LOCATION_SUCCESS } from '../actions'

// export function location(state = ['123','456'], action) {
//   switch(action.type) {
//     case FETCH_LOCATION_SUCCESS:
//       console.log('in fetch location success case')
//       return [action.location.lat, action.location.lng]
//     default:
//       return state
//   }
// }

import { FETCH_LOCATION_SUCCESS, WEATHER_HAS_ERRORED, WEAHTER_IS_LOADING, FETCH_WEATHER_SUCCESS } from '../actions'

export function location(state = [], action) {
  switch(action.type) {
    case FETCH_LOCATION_SUCCESS:
      console.log('in fetch location success case')
      return [action.location.lat, action.location.lng]
    default:
      return state
  }
}

export function weatherIsLoading(state = false, action) {
  switch(action.type) {
    case WEAHTER_IS_LOADING:
      return action.isLoading
     default:
      return state
  }
}
export function weatherHasErrored(state = false, action) {
  switch(action.type) {
    case WEATHER_HAS_ERRORED:
      return action.hasErrored
     default:
      return state
  }
}

export function fetchWeatherSuccess(state = {}, action) {
  switch(action.type) {
    case FETCH_WEATHER_SUCCESS:
      return action.data
    default:
      return state
  }
}
