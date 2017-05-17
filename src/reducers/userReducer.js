import * as types from '../constants'

export const userReducer = (state = {}, action) => {
  switch(action.type) {
    case types.FETCH_ONEUSER_SUCCESS: return action.payload
    case types.FETCH_ONEUSER_FAIL : return {error: action.error}
    default: return state
  }
}
