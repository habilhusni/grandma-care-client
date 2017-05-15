import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail, Header, Button, Left, Right, Body, Text, Icon } from 'native-base';

import { connect } from 'react-redux';
import { styles } from '../styles'

class SettingPage extends Component {
  render() {
    const { navigate,goBack } = this.props.navigation
    const { user } = this.props
    return (
      <Container>
        <Header>
          <Left>
            <Button light transparent iconLeft
              onPress={() => goBack()}>
              <Icon name="arrow-back" style={{color: 'white'}}/>
              <Text>Back</Text>
            </Button>
          </Left>
        </Header>
        <Content>
          <Card >
            <View style={styles.child}>
              <Text>User id: </Text>
              <Text>{user._id}</Text>
            </View>
          </Card>
          <Card >
            <View style={styles.child}>
              <Text>Username: </Text>
              <Text>{user.username}</Text>
            </View>
            <View style={styles.child}>
              <Text>Phone: </Text>
              <Text>{user.phone}</Text>
            </View>
            <View style={styles.child}>
              <Text>Email: </Text>
              <Text>{user.email}</Text>
            </View>
          </Card>
          <Card>
            <View>
              <View style={styles.child}>
                <Text>Location: </Text>
              </View>
              <View style={styles.child}>
                <Text>Latitude: </Text>
                <Text>{user.latitude}</Text>
              </View>
              <View style={styles.child}>
                <Text>Longitude: </Text>
                <Text>{user.longitude}</Text>
              </View>
            </View>
          </Card>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
})

export default connect(mapStateToProps,null)(SettingPage);
