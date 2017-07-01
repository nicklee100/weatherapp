import { FETCH_LOCATION_SUCCESS } from '../actions'

function location(state = ['123','456'], action) {
  switch(action.type) {
    case FETCH_LOCATION_SUCCESS:
      console.log('in fetch location success case')
      return [action.location.lat, action.location.lng]
    default:
      return state
  }
}

export default location

