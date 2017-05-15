import React from 'react'
import { StackNavigator } from 'react-navigation'

import Login from './components/Login'
import Main from './components/Main'
import SplashScreen from './components/SplashScreen'
import SettingPage from './components/SettingPage'

const App = StackNavigator(
  {
  Login: { screen: Login },
  Main: { screen: Main },
  SplashScreen: { screen: SplashScreen },
  Profile: { screen: SettingPage }
  },
  {
    headerMode: 'none'
  }
)

export default App
