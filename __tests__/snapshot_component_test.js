import 'react-native';
import React from 'react';
import client from '../index.android.js';
import { Provider } from 'react-redux';
import reducers from '../src/reducers';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import { shallow } from 'enzyme';

import App from '../src';

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
import DeleteFriendButton from '../src/components/DeleteFriendButton.js';
import PanicButton from '../src/components/PanicButton.js';
import DeactivateAccountButton from '../src/components/DeactivateAccountButton.js';
import EditProfile from '../src/components/EditProfile.js';
import EditProfileButton from '../src/components/EditProfileButton.js';

const store = createStore(reducers, applyMiddleware(thunk, logger));
// Note: test renderer must be required after react-native.

it('renders with snapshot', () => {
  const tree = shallow(<client />);
  expect(tree).toMatchSnapshot();
});

it('renders AddFriend snapshot', () => {
  const compAddFriend = shallow(
    <Provider store={store}>
      <AddFriend/>
    </Provider>
  );
  expect(compAddFriend).toMatchSnapshot();
});

it('renders AddFriendButton snapshot', () => {
  const compAddFriendButton = shallow(<AddFriendButton/>);
  expect(compAddFriendButton).toMatchSnapshot();
});

it('renders DeactivateAccountButton snapshot', () => {
  const compDeactivateAccountButton = shallow(
    <Provider store={store}>
      <DeactivateAccountButton/>
    </Provider>
  );
  expect(compDeactivateAccountButton).toMatchSnapshot();
});

it('renders DeleteFriendButton snapshot', () => {
  const compDeleteFriendButton = shallow(
    <Provider store={store}>
      <DeleteFriendButton/>
    </Provider>
  );
  expect(compDeleteFriendButton).toMatchSnapshot();
});

it('renders EditProfile snapshot', () => {
  const compEditProfile = shallow(
    <Provider store={store}>
      <EditProfile/>
    </Provider>
  );
  expect(compEditProfile).toMatchSnapshot();
});

it('renders EditProfileButton snapshot', () => {
  const compEditProfileButton = shallow(
      <EditProfileButton/>
  );
  expect(compEditProfileButton).toMatchSnapshot();
});

it('renders Login snapshot', () => {
  const compLogin = shallow(
    <Provider store={store}>
      <Login/>
    </Provider>
  );
  expect(compLogin).toMatchSnapshot();
});

it('renders LogoutButton snapshot', () => {
  const compLogoutButton = shallow(
    <Provider store={store}>
      <LogoutButton/>
    </Provider>
  );
  expect(compLogoutButton).toMatchSnapshot();
});

it('renders Main snapshot', () => {
  const compMain = shallow(
  <Provider store={store}>
    <App>
      <Main/>
    </App>
  </Provider>
  );
  expect(compMain).toMatchSnapshot();
});


it('renders Maps snapshot', () => {
  const compMaps = shallow(
    <Provider store={store}>
      <App>
        <Maps/>
      </App>
    </Provider>
  );
  expect(compMaps).toMatchSnapshot();
});

it('renders PanicButton snapshot', () => {
  const compPanicButton = shallow(
    <Provider store={store}>
      <PanicButton/>
    </Provider>
  );
  expect(compPanicButton).toMatchSnapshot();
})

it('renders Register snapshot', () => {
  const compRegister = shallow(
    <Provider store={store}>
      <Register/>
    </Provider>
  );
  expect(compRegister).toMatchSnapshot();
});

it('renders SettingPage snapshot', () => {
  const compSettingPage = shallow(
    <Provider store={store}>
      <App>
        <SettingPage/>
      </App>
    </Provider>
  );
  expect(compSettingPage).toMatchSnapshot();
});

it('renders SplashScreen snapshot', () => {
  const compSplashScreen = shallow(
    <Provider store={store}>
      <SplashScreen/>
    </Provider>
  );
  expect(compSplashScreen).toMatchSnapshot();
});

it('renders UserList snapshot', () => {
  const compUserList = shallow(
    <Provider store={store}>
      <App>
        <UserList/>
      </App>
    </Provider>
  );
  expect(compUserList).toMatchSnapshot();
});

it('renders UserListButton snapshot', () => {
  const compUserListButton = shallow(<UserListButton/>);
  expect(compUserListButton).toMatchSnapshot();
});
