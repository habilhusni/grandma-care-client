import React from 'react'
import { AsyncStorage, ToastAndroid } from 'react-native'
import { Button, Text, Icon } from 'native-base'

import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { deactivate } from '../actions'

class DeactivateAccountButton extends React.Component {

  _deactivate = () => {
    const { token, userID, deactivate, deactivateDone } = this.props
    const { goBack, state } = this.props.navigation
    deactivate(token,userID)
    AsyncStorage.multiRemove(['token','id'], (err)=> {
      ToastAndroid.showWithGravity('Deactivating Account..', ToastAndroid.LONG, ToastAndroid.CENTER)
      setTimeout(()=> {
        if(state.params.stateKey !== undefined) {
          goBack(state.params.stateKey)
        } else {
          goBack(null)
      }, 500)
    })
  }

  render() {
    return (
      <Button bordered danger iconLeft
        onPress={() => this._deactivate() }>
        <Icon name="deactivate" android="md-close" />
        <Text>Deactivate</Text>
      </Button>
    )
  }
}

DeactivateAccountButton.propTypes = {
  deactivate: PropTypes.func.isRequired,
  deactivateDone: PropTypes.func.isRequired,
  token: PropTypes.string.isRequired,
  userID: PropTypes.string.isRequired,
  navigation: PropTypes.object.isRequired
}

const mapDispatchToProps = dispatch => ({
  deactivate: (token,userID) => dispatch(deactivate(token,userID))
  deactivateDone: () => dispatch(deactivateDone())
})

export default connect(null, mapDispatchToProps)(DeactivateAccountButton)