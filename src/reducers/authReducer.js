import { AsyncStorage } from 'react-native'

import * as types from '../constants'

const Login = (state, payload) => {
  AsyncStorage.setItem('token', payload.token)
  return payload
}

const Logout = (state) => {
  AsyncStorage.removeItem('token')
  return { msg: 'Logout Success' }
}

export const authReducer = (state = {}, action) => {
  switch(action.type) {
    case types.LOGIN_SUCCESS : return Login(state, action.payload)
    case types.LOGIN_FAIL: return action.error
    case types.LOGOUT : return Logout(state)
    default: return state
  }
}