import * as types from '../constants'

export const addFriendReducer = (state = {}, action) => {
  switch(action.type) {
    case types.ADD_FRIEND_SUCCESS: return { added: true }
    case types.ADD_FRIEND_FAIL: return { added: false }
    case types.ADD_FRIEND_DONE: return { done: true }
    default: return state
  }
}