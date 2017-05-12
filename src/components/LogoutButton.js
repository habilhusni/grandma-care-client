import React from 'react'
import { AsyncStorage, Alert, ToastAndroid } from 'react-native'
import { Button, Text } from 'native-base'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { logout } from '../actions'

class LogoutButton extends React.Component {

  _logout = () => {
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
      }
    })
  }

  render() {
    const { navigation } = this.props
    return (
      <Button light transparent
        onPress={()=> {
          this._logout()
          setTimeout(()=> {
            navigation.goBack()
          }, 750)
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