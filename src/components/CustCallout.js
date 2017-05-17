import React from 'react'
import { View } from 'react-native'
import { Button, Icon, Text } from 'native-base'
import getDirections from 'react-native-google-maps-directions'

import PropTypes from 'prop-types'
import { styles } from '../styles'

export default class CustCallout extends React.Component {

  _handleGetDirection = () => {
    const { userLoc, friendLoc } = this.props
    if(friendLoc !== null) {
      const data = {
        source: {
          latitude: userLoc.latitude,
          longitude: userLoc.longitude
        },
        destination: {
          latitude: friendLoc.latitude,
          longitude: friendLoc.longitude
        },
        params: [
          { key: 'dirflg', value:'d' }
        ]
      }
      getDirections(data)
    }
  }

  render() {
    const { username, friendLoc, userLoc } = this.props
    return (
      <View style={styles.calloutContainer}>
        <View style={{flex:1}}>
          { friendLoc !== null ?
            <Button iconRight transparent primary style={{marginRight:10}}
              onPress={this._handleGetDirection}>
              <Icon name="get-direction" android="md-pin"/>
              <Text style={{marginLeft:15}}>{this.props.username}</Text>
            </Button>
            :
            <Button iconRight transparent primary style={{marginRight:10}}>
              <Icon name="person" android="md-person"/>
              <Text style={{marginLeft:10}}>{this.props.username}</Text>
            </Button>
          }
        </View>
      </View>
    )
  }
}

CustCallout.propTypes = {
  username: PropTypes.string.isRequired,
  userLoc: PropTypes.object.isRequired,
  friendLoc: PropTypes.object,
}
