import * as types from '../constants'

const user = {}

user.getUser = (state, data) => {
  const newState = data;
  return newState;
}

export const UserListReducer = (state = [], action) => {
  switch(action.type) {
    case types.GET_USER_SUCCESS: return user.getUser(state, action.payload)
    case types.GET_USER_FAIL : return {error: action.error}
    default: return state
  }
}
