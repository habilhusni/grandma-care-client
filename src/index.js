import React from 'react'
import { StackNavigator } from 'react-navigation'

import Login from './components/Login'
import Main from './components/Main'

const App = StackNavigator(
  {
  Login: { screen: Login },
  Main: { screen: Main }
  },
  {
    headerMode: 'none'
  }
)

export default App