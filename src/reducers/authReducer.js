import * as types from '../constants'

export const authReducer = (state = null, action) => {
  switch(action.type) {
    case types.LOGIN_SUCCESS : return action.payload
    case types.LOGIN_FAIL: return {error: action.error}
    case types.LOGOUT: return {logout: true}
    default: return state
  }
}
