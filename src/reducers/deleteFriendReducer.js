import * as types from '../constants'

export const deleteFriendReducer = (state = {}, action) => {
  switch(action.type) {
    case types.DELETE_FRIEND_SUCCESS: return { deleted: true }
    case types.DELETE_FRIEND_FAIL: return { deleted: false }
    case types.DELETE_FRIEND_DONE: return { done: true }
    default: return state
  }
}