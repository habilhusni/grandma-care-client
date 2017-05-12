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

const testLang = {
  id: '59155ebe72a224306c16905c',
  latitude: 0,
  longitude: 0,
}

const fetchLongLat = (user, token) => {
  fetch(`http://ec2-35-157-203-118.eu-central-1.compute.amazonaws.com/users/${user.id}/location/${user.latitude}/${user.longitude}`, {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'token': token,
    },
  })
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.log(err))
}

const intervalId = () => {
  return BackgroundTimer.setInterval(() => {
    // this will be executed every 1000 ms
    // even when app is the the background
    // console.log('tic');
    fetchLongLat(testLang, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3RMYW5nIiwicGFzc3dvcmQiOiJ0ZXN0TGFuZyIsImlhdCI6MTQ5NDU3Mjc2OH0.4J5-s4-8EvW5bTC-sFVhLTh8OeLcvSpGUySZu-ZUd5Q')
  }, 4000);
}

export default class testgeoloc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idTimer: null
    }
  }

  componentDidMount() {
    this.setState({idTimer: intervalId()})
  }

  componentWillUnmount() {
    BackgroundTimer.clearInterval(this.state.idTimer);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Hello</Text>
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
  instructions: { textAlign: "center", color: "#333333", marginBottom: 5 }
});

AppRegistry.registerComponent("testgeoloc", () => testgeoloc);
