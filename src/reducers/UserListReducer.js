import * as types from '../constants'

export const UserListReducer = (state = [], action) => {
  switch(action.type) {
    case types.FETCH_USERLIST_SUCCESS: return action.payload
    case types.FETCH_USERLIST_FAIL: return {error: action.error}
    default: return state
  }
}