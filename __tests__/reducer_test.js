import 'react-native';
import React from 'react';

import { addFriendReducer } from '../src/reducers/addFriendReducer';
import { addFriendSuccess, addFriendFail, addFriendDone } from '../src/actions';

import { authReducer } from '../src/reducers/authReducer';
import { loginFail, loginSuccess } from '../src/actions';

import { deleteFriendReducer } from '../src/reducers/deleteFriendReducer';
import { deleteFriendSuccess, deleteFriendFail, deleteFriendDone } from '../src/actions';

import { registerReducer } from '../src/reducers/registerReducer';
import { registerSuccess, registerFail, registerDone } from '../src/actions';

import { UserListReducer } from '../src/reducers/UserListReducer';
import { fetchUsersSuccess, fetchUsersFail } from '../src/actions';

import { userReducer } from '../src/reducers/userReducer';
import { fetchOneUserSuccess, fetchOneUserFail } from '../src/actions';

import { deactivateReducer } from '../src/reducers/deactivateReducer';
import { deactivateSuccess, deactivateFail } from '../src/actions';


it('handle addFriendReducer SUCCESS', () => {
  expect(addFriendReducer({}, addFriendSuccess())).toEqual({
    added: true
  })
})

it('handle addFriendReducer FAIL', () => {
  expect(addFriendReducer({}, addFriendFail())).toEqual({
    added: false
  })
})

it('handle addFriendReducer DONE', () => {
  expect(addFriendReducer({}, addFriendDone())).toEqual({
    done: true
  })
})

it('handle login SUCCESS', () => {
  var success = 'Login Success!!'
  expect(authReducer(state = null, loginSuccess(success))).toEqual(success)
})

it('handle login FAIL', () => {
  var eror = 'Login Error!!'
  expect(authReducer(state = null, loginFail(eror))).toEqual({
    error: eror
  })
})

it('handle delete friend SUCCESS', () => {
  expect(deleteFriendReducer({}, deleteFriendSuccess())).toEqual({
    deleted: true
  })
})

it('handle delete friend FAIL', () => {
  expect(deleteFriendReducer({}, deleteFriendFail())).toEqual({
    deleted: false
  })
})

it('handle delete friend DONE', () => {
  expect(deleteFriendReducer({}, deleteFriendDone())).toEqual({
    done: true
  })
})

it('handle register friend SUCCESS', () => {
  expect(registerReducer({}, registerSuccess())).toEqual({
    register: true
  })
})

it('handle register friend FAIL', () => {
  expect(registerReducer({}, registerFail())).toEqual({
    register: false
  })
})

it('handle register friend DONE', () => {
  expect(registerReducer({}, registerDone())).toEqual({
    done: true
  })
})

it('handle fetch user list SUCCESS', () => {
  var success = 'Fetch Users Success!!'
  expect(UserListReducer(state = [], fetchUsersSuccess(success))).toEqual(success)
})

it('handle fetch user list FAIL', () => {
  var eror = 'Fetch Users Fail!!'
  expect(UserListReducer(state = [], fetchUsersFail(eror))).toEqual({
    error: eror
  })
})

it('handle fetch one user SUCCESS', () => {
  var success = 'Fetch a User Success!!'
  expect(userReducer(state = {}, fetchOneUserSuccess(success))).toEqual(success)
})

it('handle fetch user list FAIL', () => {
  var eror = 'Fetch a User Fail!!'
  expect(userReducer(state = {}, fetchOneUserFail(eror))).toEqual({
    error: eror
  })
})

it('handle deactivate SUCCESS', () => {
  expect(deactivateReducer(state = {}, deactivateSuccess())).toEqual({
    deactivate: true
  })
})

it('handle deactivate FAIL', () => {
  var eror = 'Deactivate Fail!!'
  expect(deactivateReducer(state = {}, deactivateFail(eror))).toEqual({
    deactivate: false
  })
})
