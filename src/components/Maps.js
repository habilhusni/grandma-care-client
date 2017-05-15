import React from 'react'
import { Alert, PermissionsAndroid } from 'react-native'
import MapView from 'react-native-maps'
import BackgroundTimer from 'react-native-background-timer'
import PropTypes from 'prop-types'

import { styles } from '../styles'

class Maps extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      idTimer: null,
      latitude: 0,
      longitude: 0,
    }
    this.props.updateLocation=this.props.updateLocation.bind(this);
  }

  const intervalId = (lat,long,userID,token) => {
    return BackgroundTimer.setInterval(() => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.setState({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          })
          this.props.updateLocation(lat,long,userID,token)
        },
        (error) => Alert.alert('Turn on GPS',JSON.stringify(error)),
        {timeout: 5000, maximumAge: 2000}
      );
    }, 1000);
  }



  watchID: ?number = null

  componentDidMount() {
    intervalId(this.state.latitude, this.state.longitude,this.props.userID,this.props.token)
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

const mapDispatchToProps = dispatch => ({
  updateLocation: (lat,long,userID,token) => dispatch(updateLocation(latitude,longitude,userID,token))
})

export default connect(null,mapDispatchToProps)(Maps);
