import React from 'react'
import { AsyncStorage, Alert, ToastAndroid } from 'react-native'
import { Button, Text, Icon } from 'native-base'
import { connect } from 'react-redux'

import { logout } from '../actions'
import PropTypes from 'prop-types'


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
          this.props.logout()
          if(state.params !== undefined) {
            goBack(state.params.stateKey)
          } else {
            goBack(null)
          }
        }, 750)
      }
    })
  }

  render() {
    return (
      <Button light transparent vertical
        onPress={()=> { this._logout() }}>
        <Icon name="power" color="#FFF"/>
        <Text>Logout</Text>
      </Button>
    )
  }

}

LogoutButton.propTypes = {
  navigation: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired
}

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
})

export default connect(null, mapDispatchToProps)(LogoutButton)