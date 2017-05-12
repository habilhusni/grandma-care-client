import { AsyncStorage } from 'react-native'

import * as types from '../constants'

export const authReducer = (state = null, action) => {
  switch(action.type) {
    case types.LOGIN_SUCCESS : return action.payload
    case types.LOGIN_FAIL: return {error: action.error}
    default: return state
  }
}
