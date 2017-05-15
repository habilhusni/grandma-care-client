import 'react-native';
import React from 'react';
import client from '../index.android.js';
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

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders with snapshot', () => {
  const tree = renderer.create(<client />);
  expect(tree).toMatchSnapshot();
});

it('renders AddFriend snapshot', () => {
  const compAddFriend = renderer.create(<AddFriend/>);
  expect(compAddFriend).toMatchSnapshot();
});

it('renders AddFriendButton snapshot', () => {
  const compAddFriendButton = renderer.create(<AddFriendButton/>);
  expect(compAddFriendButton).toMatchSnapshot();
});

it('renders Login snapshot', () => {
  const compLogin = renderer.create(<Login/>);
  expect(compLogin).toMatchSnapshot();
});

it('renders LogoutButton snapshot', () => {
  const compLogoutButton = renderer.create(<LogoutButton/>);
  expect(compLogoutButton).toMatchSnapshot();
});

it('renders Main snapshot', () => {
  const compMain = renderer.create(<Main/>);
  expect(compMain).toMatchSnapshot();
});

it('renders Maps snapshot', () => {
  const compMaps = renderer.create(<Maps/>);
  expect(compMaps).toMatchSnapshot();
});

it('renders Register snapshot', () => {
  const compRegister = renderer.create(<Register/>);
  expect(compRegister).toMatchSnapshot();
});

it('renders SettingPage snapshot', () => {
  const compSettingPage = renderer.create(<SettingPage/>);
  expect(compSettingPage).toMatchSnapshot();
});

it('renders SplashScreen snapshot', () => {
  const compSplashScreen = renderer.create(<SplashScreen/>);
  expect(compSplashScreen).toMatchSnapshot();
});

it('renders UserList snapshot', () => {
  const compUserList = renderer.create(<UserList/>);
  expect(compUserList).toMatchSnapshot();
});

it('renders UserListButton snapshot', () => {
  const compUserListButton = renderer.create(<UserListButton/>);
  expect(compUserListButton).toMatchSnapshot();
});
