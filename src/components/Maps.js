import React from 'react'
import MapView from 'react-native-maps'

import { styles } from '../styles'

class Maps extends React.Component {

  render() {
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

export default Maps