import * as types from '../constants'

export const deactivateReducer = (state = {}, action) => {
  switch(action.type) {
    case types.DEACTIVATE_SUCCESS: return { deactivate: true }
    case types.DEACTIVATE_FAIL: return { deactivate: false }
    case types.DEACTIVATE_DONE: return { done: true }
    default: return state
  }
}