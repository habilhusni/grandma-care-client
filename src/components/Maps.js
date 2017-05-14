import React from 'react'
import MapView from 'react-native-maps'

import PropTypes from 'prop-types'

import { styles } from '../styles'

class Maps extends React.Component {

  render() {
    const { user } = this.props
    return (
      <MapView
        style={styles.map}
        region={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}>

      </MapView>
    )
  }
}

Maps.propTypes = {
  user: PropTypes.object.isRequired
}

export default Maps