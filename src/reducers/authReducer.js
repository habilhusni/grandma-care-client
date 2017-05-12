import { AsyncStorage } from 'react-native'

import * as types from '../constants'

const Login = async (state, payload) => {
  try {
    await AsyncStorage.setItem('token', payload.token)
    return payload
  } catch(err) {

  }
}

export const authReducer = (state = {}, action) => {
  switch(action.type) {
    case types.LOGIN_SUCCESS : return Login(state, action.payload)
    case types.LOGIN_FAIL: return action.error
    default: return state
  }
}