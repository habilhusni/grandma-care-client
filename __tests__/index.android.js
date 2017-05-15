import 'react-native';
import React from 'react';
import client from '../index.android.js';
import { Provider } from 'react-redux';
import reducers from '../src/reducers';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';

import App from '../src/index.js';
import { StackNavigator } from 'react-navigation';

import AddFriend from '../src/components/AddFriend.js';
import AddFriendButton from '../src/components/AddFriendButton.js';
import Login from '../src/components/Login.js';
import LogoutButton from '../src/components/LogoutButton.js';
import Main from '../src/components/Main.js';
import Maps from '../src/components/Maps.js';
import Register from '../src/components/Register.js';
import SettingPage from '../src/components/SettingPage.js';
import SplashScreen from '../src/components/SplashScreen.js';
import UserList from '../src/components/UserList.js';
import UserListButton from '../src/components/UserListButton.js';
import sum from '../math.js';

const store = createStore(reducers, applyMiddleware(thunk, logger));
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders with snapshot', () => {
  const tree = renderer.create(<client />);
  expect(tree).toMatchSnapshot();
});

it('renders AddFriend snapshot', () => {
  const compAddFriend = renderer.create(
    <Provider store={store}>
      <AddFriend/>
    </Provider>
  );
  expect(compAddFriend).toMatchSnapshot();
});

it('renders AddFriendButton snapshot', () => {
  const compAddFriendButton = renderer.create(<AddFriendButton/>);
  expect(compAddFriendButton).toMatchSnapshot();
});

it('renders Login snapshot', () => {
  const compLogin = renderer.create(
    <Provider store={store}>
      <Login/>
    </Provider>
  );
  expect(compLogin).toMatchSnapshot();
});

it('renders LogoutButton snapshot', () => {
  const compLogoutButton = renderer.create(<LogoutButton/>);
  expect(compLogoutButton).toMatchSnapshot();
});

it('renders Main snapshot', () => {
  const compMain = renderer.create(
    <Provider store={store}>
      <App>
        <Main/>
      </App>
    </Provider>
  );
  expect(compMain).toMatchSnapshot();
});

it('renders Maps snapshot', () => {
  const compMaps = renderer.create(
    <Provider store={store}>
      <App>
        <Maps/>
      </App>
    </Provider>
  );
  expect(compMaps).toMatchSnapshot();
});

it('renders Register snapshot', () => {
  const compRegister = renderer.create(
    <Provider store={store}>
      <Register/>
    </Provider>
  );
  expect(compRegister).toMatchSnapshot();
});

it('renders SettingPage snapshot', () => {
  const compSettingPage = renderer.create(
    <Provider store={store}>
      <SettingPage/>
    </Provider>
  );
  expect(compSettingPage).toMatchSnapshot();
});

it('renders SplashScreen snapshot', () => {
  const compSplashScreen = renderer.create(
    <Provider store={store}>
      <SplashScreen/>
    </Provider>
  );
  expect(compSplashScreen).toMatchSnapshot();
});

it('renders UserList snapshot', () => {
  const compUserList = renderer.create(
    <Provider store={store}>
      <App>
        <UserList/>
      </App>
    </Provider>
  );
  expect(compUserList).toMatchSnapshot();
});

it('renders UserListButton snapshot', () => {
  const compUserListButton = renderer.create(<UserListButton/>);
  expect(compUserListButton).toMatchSnapshot();
});

test('Adds two number', () => {
  expect(sum(2,3)).toBe(5)
});
