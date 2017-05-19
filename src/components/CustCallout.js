import React from 'react'
import { View } from 'react-native'
import { Button, Icon, Text } from 'native-base'
import MapView from 'react-native-maps'
import getDirections from 'react-native-google-maps-directions'

import PropTypes from 'prop-types'
import { styles } from '../styles'

export default class CustCallout extends React.Component {

  _handleGetDirection = () => {
    const { userLoc, friendLoc } = this.props
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

  render() {
    const { username, friendLoc, userLoc } = this.props
    return (
      <View>
      { friendLoc !== null ?
        <MapView.Callout onPress={() => this._handleGetDirection()}>
          <View style={styles.calloutContainer}>
            <View style={{flex:1}}>
              <Button iconRight transparent primary style={{marginRight:10}}>
                <Icon name="get-direction" android="md-map"/>
                <Text style={{marginLeft:12}}>{this.props.username}</Text>
              </Button>
            </View>
          </View>
        </MapView.Callout>
        :
        <MapView.Callout>
          <View style={styles.calloutContainer}>
            <View style={{flex:1}}>
              <Button iconRight transparent danger style={{marginRight:10}}>
                <Icon name="person" android="md-person"/>
                <Text style={{marginLeft:10}}>{this.props.username}</Text>
              </Button>
            </View>
          </View>
        </MapView.Callout>
      }
      </View>
    )
  }
}

CustCallout.propTypes = {
  username: PropTypes.string.isRequired,
  userLoc: PropTypes.object.isRequired,
  friendLoc: PropTypes.object,
}
