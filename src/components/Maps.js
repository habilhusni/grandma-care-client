import React from 'react'
import { Alert, PermissionsAndroid } from 'react-native'
import MapView from 'react-native-maps'
import BackgroundTimer from 'react-native-background-timer'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { updateLocation } from '../actions'
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
    this.intervalId=this.intervalId.bind(this);
  }

  intervalId(userID,token){
    let self = this
    return BackgroundTimer.setInterval(() => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.setState({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          })
          const locUpdate = {
            latitude: self.state.latitude,
            longitude: self.state.longitude,
            userID: self.props.userID,
            token: self.props.token
          }
          this.props.updateLocation(locUpdate)
        },
        (error) => Alert.alert('Turn on GPS',JSON.stringify(error)),
        {timeout: 5000}
      );
    }, 5000);
  }



  watchID: ?number = null

  componentDidMount() {
    this.setState({idTimer: this.intervalId(this.props.userID,this.props.token)});
    
  }

  componentWillUnmount() {
    BackgroundTimer.clearInterval(this.state.idTimer);
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
  updateLocation: (locUpdate) => dispatch(updateLocation(locUpdate))
})

export default connect(null,mapDispatchToProps)(Maps);
