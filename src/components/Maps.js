import React from 'react'
import { Alert, PermissionsAndroid } from 'react-native'
import MapView from 'react-native-maps'

import PropTypes from 'prop-types'

import { styles } from '../styles'

class Maps extends React.Component {

  state = {
    latitude: 0,
    longitude: 0
  }

  watchID: ?number = null


  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        })
      },
      (error) => Alert.alert('Turn on GPS',JSON.stringify(error)),
      {timeout: 5000, maximumAge: 2000}
    );
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
