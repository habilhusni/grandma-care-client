import BackgroundTimer from 'react-native-background-timer'

export default intervalId = (userID,token,instance) => {
  return BackgroundTimer.setInterval(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        instance.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        })
        const locUpdate = {
          latitude: instance.state.latitude,
          longitude: instance.state.longitude,
          userID: instance.props.userID,
          token: instance.props.token
        }
        instance.props.updateLocation(locUpdate)
        instance.props.fetchOneUser(instance.props.token,instance.props.userID)
      },
      (error) => Alert.alert('Turn on GPS',JSON.stringify(error)),
      {timeout: 5000}
    );
  }, 4000);
}