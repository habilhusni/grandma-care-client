import React from 'react'
import { StackNavigator } from 'react-navigation'

import Login from './components/Login'
import Main from './components/Main'

const App = StackNavigator(
  {
  Login: { screen: Login },
  },
  {
    headerMode: 'none'
  }
)

export default App