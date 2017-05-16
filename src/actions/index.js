import * as types from '../constants'

export const registerSuccess = () => ({
  type: types.REGISTER_SUCCESS
})

export const registerDone = () => ({
  type: types.REGISTER_DONE
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

export const fetchUsersSuccess = payload => ({
  type: types.FETCH_USERLIST_SUCCESS,
  payload
})

export const fetchUsersFail = error => ({
  type: types.FETCH_USERLIST_FAIL,
  error
})

export const fetchOneUserSuccess = payload => ({
  type: types.FETCH_ONEUSER_SUCCESS,
  payload
})

export const fetchOneUserFail = error => ({
  type: types.FETCH_ONEUSER_FAIL,
  error
})

export const updateLocationSuccess = payload => ({
  type: types.FETCH_UPDATELOC_SUCCESS,
  payload
})

export const updateLocationFail = error => ({
  type: types.FETCH_UPDATELOC_FAIL,
  error
})

export const updateSensorSuccess = payload => ({
  type: types.FETCH_UPDSENSOR_SUCCESS,
  payload
})

export const updateSensorFail = error => ({
  type: types.FETCH_UPDSENSOR_FAIL,
  error
})

export const addFriendSuccess = () => ({
  type: types.ADD_FRIEND_SUCCESS
})

export const addFriendFail = error => ({
  type: types.ADD_FRIEND_FAIL,
  error
})

export const addFriendDone = () => ({
  type: types.ADD_FRIEND_DONE
})

export const deleteFriendSuccess = () => ({
  type: types.DELETE_FRIEND_SUCCESS
})

export const deleteFriendFail = () => ({
  type: types.DELETE_FRIEND_FAIL
})

export const deleteFriendDone = () => ({
  type: types.DELETE_FRIEND_DONE
})

export const deactivateSuccess = () => ({
  type: types.DEACTIVATE_SUCCESS
})

export const deactivateFail = error => ({
  type: types.DEACTIVATE_FAIL,
  error
})

export const deactivateDone = () => ({
  type: types.DEACTIVATE_DONE
})

export const fetchOneUser = (token,userId) => (
  dispatch => (
    fetch(`http://ec2-35-157-203-118.eu-central-1.compute.amazonaws.com/users/${userId}`,{
      method: 'get',
      headers: {
        'Accept' : 'application/json',
        'Content-Type' : 'application/json',
        'token' : token
      }
    }).then(res => res.json())
      .then(data => dispatch(fetchOneUserSuccess(data)))
      .catch(err => dispatch(fetchOneUserFail(err)))
  )
)

export const fetchUsers = token => (
  dispatch => (
    fetch('http://ec2-35-157-203-118.eu-central-1.compute.amazonaws.com/users', {
      method: 'get',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'token': token
      }
    }).then(res => res.json())
      .then(data => dispatch(fetchUsersSuccess(data)))
      .catch(err => dispatch(fetchUsersFail(err)))
  )
)

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
    }).then(res => {
      if(res.status === 400){
        dispatch(registerFail({error: 'error'}))
      } else {
        dispatch(registerSuccess())
      }
    }).catch(err => dispatch(registerFail(err)))
  )
)

export const updateLocation = (locUpdate) => (
  dispatch => (
    fetch(`http://ec2-35-157-203-118.eu-central-1.compute.amazonaws.com/users/${locUpdate.userID}/location/${locUpdate.latitude}/${locUpdate.longitude}`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'token':locUpdate.token,
      },
    })
    .then((res) => res.json())
    .then((data) => dispatch(updateLocationSuccess(data)))
    .catch((err) => dispatch(updateLocationFail(err)))
  )
)

export const updateSensor = (sensorUpdate) => (
  dispatch => (
    fetch(`http://ec2-35-157-203-118.eu-central-1.compute.amazonaws.com/users/${sensorUpdate.userID}/accelero/${sensorUpdate.x}/${sensorUpdate.y}/${sensorUpdate.z}`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'token':sensorUpdate.token,
      },
    })
    .then((res) => res.json())
    .then((data) => dispatch(updateSensorSuccess(data)))
    .catch((err) => dispatch(updateSensorFail(err)))
  )
)

export const addFriend = (token, userID, friendID) => (
  dispatch => (
    fetch(`http://ec2-35-157-203-118.eu-central-1.compute.amazonaws.com/users/${userID}/add/${friendID}`, {
      method: 'put',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'token': token
      }
    }).then(() => dispatch(addFriendSuccess()))
      .catch(err => dispatch(addFriendFail(err)))
  )
)

export const deleteFriend = (token, userID, friendID) => (
  dispatch => (
    fetch(`http://ec2-35-157-203-118.eu-central-1.compute.amazonaws.com/users/${userID}/remove/${friendID}`, {
      method: 'delete',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'token': token
      }
    }).then(() => dispatch(deleteFriendSuccess()))
      .catch(err => dispatch(deleteFriendFail(err)))
  )
)

export const deactivate = (token,userID) => (
  dispatch => (
    fetch(`http://ec2-35-157-203-118.eu-central-1.compute.amazonaws.com/users/${userID}`, {
      method: 'delete',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'token': token
      }
    }).then(() => dispatch(deactivateSuccess()))
      .catch(err => dispatch(deactivateFail(err)))
  )
)
