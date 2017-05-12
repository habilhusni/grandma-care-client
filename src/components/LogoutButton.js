import React from 'react'
import { AsyncStorage, Alert, ToastAndroid } from 'react-native'
import { Button, Text } from 'native-base'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { logout } from '../actions'

class LogoutButton extends React.Component {

  _logout = () => {
    const { goBack, state } = this.props.navigation
    AsyncStorage.multiRemove(['token','id'], (err)=> {
      if(err) {
        Alert.alert(
          'Logout Error',
          'Press Logout Button again'
        )
      } else {
        ToastAndroid.showWithGravity(
          'Logging out',
          ToastAndroid.LONG,
          ToastAndroid.CENTER
        )
        setTimeout(()=> {
          goBack(state.params.stateKey)
        }, 750)
      }
    })
  }

  render() {
    const { navigation } = this.props
    return (
      <Button light transparent
        onPress={()=> {
          this._logout()
        }}>
        <Text>Logout</Text>
      </Button>
    )
  }

}

LogoutButton.propTypes = {
  navigation: PropTypes.object.isRequired
}

export default LogoutButton