import * as types from '../constants'

export const registerReducer = (state = {}, action) => {
  switch(action.type) {
    case types.REGISTER_SUCCESS: return { register:true }
    case types.REGISTER_FAIL: return { register:false }
    default: return state
  }
}
