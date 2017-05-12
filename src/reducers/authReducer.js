import { AsyncStorage } from 'react-native'

import * as types from '../constants'

const Login = (state, payload) => {
  try {
    AsyncStorage.setItem('token', payload.token)
    return payload
  } catch(error) {
    return error
  }
}

const Logout = (state) => {
  try {
    AsyncStorage.removeItem('token')
    return { msg: 'Logout Success' }
  } catch(error) {
    return error
  }
}

export const authReducer = (state = {}, action) => {
  switch(action.type) {
    case types.LOGIN : return Login(state, action.payload)
    case types.LOGOUT : return Logout(state)
    default: return state
  }
}