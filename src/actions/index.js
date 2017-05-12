import * as types from '../constants'

export const registerSuccess = () => ({
  type: types.REGISTER_SUCCESS
})

export const loginSuccess = payload => ({
  type: types.LOGIN,
  payload
})

export const logout = () => ({
  type: types.LOGOUT
})

export const login = user => (
  dispatch => (
    fetch('', {
      method: 'post',
      body: JSON.stringify(user),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
      .then(data => dispatch(loginSuccess(data)))
  )
)

export const register = user => (
  dispatch => (
    fetch('', {
      method: 'post',
      body: JSON.stringify(user),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(() => dispatch(registerSuccess()))
  )
)