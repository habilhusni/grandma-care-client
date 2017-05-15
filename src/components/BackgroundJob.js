/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import {
  AppRegistry,
  TouchableHighlight,
  StyleSheet,
  Text,
  View
} from "react-native";

import BackgroundTimer from 'react-native-background-timer';

const intervalId = (lat, longi) => {
  return BackgroundTimer.setInterval(() => {
    // this will be executed every 1000 ms
    // even when app is the the background
    // console.log('tic');
    fetch(`http://ec2-35-157-203-118.eu-central-1.compute.amazonaws.com/users/5917e4b1d9b1a81e3bbb3c62/location/${lat}/${longi}/`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwicGFzc3dvcmQiOiJzaGExJDBkN2IwOTllJDEkYmZjMTA1YjcyZWI0MzFkMjRmMjc3NGU2YzE4NDI4YzIwMjBmNzA4OCIsImlhdCI6MTQ5NDc2MzY0NH0.s155eZxCI6i59B2Gb23qM8-xq_7h7Tw3UdsEUYQfEq0',
      },
    })
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(JSON.stringify(responseJson));
    })
    .catch((error) => {
      console.error(error);
    });
  }, 3000);
}

export default class testgeoloc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idTimer: null,
      longitude: 'unknown',
      latitude: 'unknown',
    }
  }

  watchID: ?number = null;

  componentDidMount() {
    this.watchID = navigator.geolocation.watchPosition((position) => {
      var longitude = JSON.stringify(position.coords.longitude);
      var latitude = JSON.stringify(position.coords.latitude);
      this.setState({latitude: latitude, longitude: longitude}, () => {
        this.setState({idTimer: intervalId(this.state.latitude, this.state.longitude)});
      });
    });
  }

  componentWillUnmount() {
    BackgroundTimer.clearInterval(this.state.idTimer);
  }

  render() {
    return (
      <View>
        <Text>
          <Text style={styles.title}>Longitude position: </Text>
          {this.state.longitude}
        </Text>
        <Text>
          <Text style={styles.title}>Latitude position: </Text>
          {this.state.latitude}
        </Text>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  button: { padding: 20, backgroundColor: "#ccc", marginBottom: 10 },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: { fontSize: 20, textAlign: "center", margin: 10 },
  instructions: { textAlign: "center", color: "#333333", marginBottom: 5 },
  title: {
    fontWeight: '500',
  }
});

AppRegistry.registerComponent("testgeoloc", () => testgeoloc);
