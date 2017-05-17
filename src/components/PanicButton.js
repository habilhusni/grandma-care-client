import React from 'react'
import { ToastAndroid } from 'react-native'
import { Fab, Icon } from 'native-base'

import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { updateSensor } from '../actions'

class PanicButton extends React.Component {

  render() {
    const { updateSensor, token, userID } = this.props
    return (
      <Fab
        active={false}
        style={{backgroundColor:'#FF2821'}}
        position="bottomLeft"
        onPress={()=> {
          updateSensor({
            token, userID,
            x: 0, y: 0, z:0
          })
          ToastAndroid.showWithGravity('You just pressed Panic Button !', ToastAndroid.SHORT, ToastAndroid.CENTER)
        }}>
        <Icon name="alert" android="md-alert" style={{fontSize:55}} />
      </Fab>
    )
  }
}

PanicButton.propTypes = {
  updateSensor: PropTypes.func.isRequired,
  token: PropTypes.string.isRequired,
  userID: PropTypes.string.isRequired
}

const mapDispatchToProps = dispatch => ({
  updateSensor: (obj) => dispatch(updateSensor(obj))
})

export default connect(null, mapDispatchToProps)(PanicButton)