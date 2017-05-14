import React from 'react'
import { Alert } from 'react-native'
import MapView from 'react-native-maps'

import PropTypes from 'prop-types'

import { styles } from '../styles'

class Maps extends React.Component {

  state = {
    latitude: 0,
    longitude: 0
  }

  watchID: ?number = null

  componentWillMount() {

    console.log('Component Will Mount')
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position)
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        })
      },
      (error) => Alert.alert(JSON.stringify(error)),
      {enableHighAccuracy: true, timeout: 1000, maximumAge: 1000}
    )

  }

  render() {
    const { user } = this.props
    const { latitude, longitude } = this.state
    return (
      <MapView
        style={styles.map}
        region={{
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}>
        <MapView.Marker
          coordinate={{ latitude, longitude }}
          title={user.username}
          description={"test"}/>
      </MapView>
    )
  }
}

Maps.propTypes = {
  user: PropTypes.object.isRequired
}

export default Maps