import React from 'react'
import { AsyncStorage, ToastAndroid } from 'react-native'
import { Button, Text, Icon } from 'native-base'

import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { deactivate, deactivateDone } from '../actions'

class DeactivateAccountButton extends React.Component {

  _deactivate = () => {
    AsyncStorage.multiRemove(['token','id'], (err)=> {
      ToastAndroid.showWithGravity('Deactivating Account..', ToastAndroid.LONG, ToastAndroid.CENTER)
    })
  }

  render() {
    return (
      <Button>

      </Button>
    )
  }
}