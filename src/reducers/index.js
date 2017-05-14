import { combineReducers } from 'redux'

import { authReducer } from './authReducer'
import { registerReducer } from './registerReducer'
import { UserListReducer } from './UserListReducer'
import { userReducer } from './userReducer'

export default combineReducers({
  token: authReducer,
  registerState: registerReducer,
  userList: UserListReducer,
  user: userReducer
})
