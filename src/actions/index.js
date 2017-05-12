import * as types from '../constants'

export const registerSuccess = () => ({
  type: types.REGISTER_SUCCESS
})

export const registerFail = error => ({
  type: types.REGISTER_FAIL,
  error
})

export const loginSuccess = payload => ({
  type: types.LOGIN_SUCCESS,
  payload
})

export const loginFail = error => ({
  type: types.LOGIN_FAIL,
  error
})

export const logout = () => ({
  type: types.LOGOUT
})

export const login = user => (
  dispatch => (
    fetch('http://ec2-35-157-203-118.eu-central-1.compute.amazonaws.com/login', {
      method: 'post',
      body: JSON.stringify(user),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
      .then(data => dispatch(loginSuccess(data)))
      .catch(err => dispatch(loginFail(err)))
  )
)

export const register = user => (
  dispatch => (
    fetch('http://ec2-35-157-203-118.eu-central-1.compute.amazonaws.com/signup', {
      method: 'post',
      body: JSON.stringify(user),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(() => dispatch(registerSuccess()))
      .catch(err => dispatch(registerFail(err)))
  )
)