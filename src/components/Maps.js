import React from 'react'
import { Alert } from 'react-native'
import MapView from 'react-native-maps'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import BackgroundTimer from 'react-native-background-timer'

import { updateLocation, fetchOneUser } from '../actions'
import { styles } from '../styles'
import intervalId from '../helpers/backgroundjob'

class Maps extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      latitude: 0,
      longitude: 0,
      region: {
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      }
    }
  }

  idTimer: ?number = null

  getInitialData(){
    const { region } = this.state
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        })
        this._onRegionChange({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        })
      },
      (error) => Alert.alert('Turn on GPS',JSON.stringify(error)),
      {timeout: 5000}
    );
  }

  componentDidMount() {
    const { userID, token } = this.props
    this.idTimer = intervalId(userID,token,this);
  }

  componentWillMount() {
    this.getInitialData()
  }

  componentWillUnmount() {
    BackgroundTimer.clearInterval(this.idTimer);
  }

  _onRegionChange = (region) => {
    this.setState({ region })
  }

  render() {
    const { user } = this.props
    const { latitude, longitude, region } = this.state
    if(user.friends){
      return (
        <MapView
          style={styles.map}
          region={region}
          onRegionChange={this._onRegionChange}>
          <MapView.Marker
            coordinate={{latitude, longitude}}
            title={user.username}/>

            {user.friends.map(friend => (
            <MapView.Marker.Animated key={friend._id}
              coordinate={{latitude: friend.latitude, longitude: friend.longitude}}
              title={friend.username}/>
          ))}
        </MapView>
      )
    } else {
      return (
        <MapView
          style={styles.map}
          region={region}
          onRegionChange={this._onRegionChange}>
          <MapView.Marker
            coordinate={{latitude, longitude}}
            title={user.username}/>
        </MapView>
      )
    }
  }
}

Maps.propTypes = {
  user: PropTypes.object.isRequired
}

const mapDispatchToProps = dispatch => ({
  updateLocation: (locUpdate) => dispatch(updateLocation(locUpdate)),
  fetchOneUser: (token,userId) => dispatch(fetchOneUser(token,userId))
})

export default connect(null,mapDispatchToProps)(Maps);
