import { combineReducers } from 'redux'

import { authReducer } from './authReducer'
import { registerReducer } from './registerReducer'
import { UserListReducer } from './UserListReducer'

export default combineReducers({
  token: authReducer,
  registerState: registerReducer,
  userList: UserListReducer
})