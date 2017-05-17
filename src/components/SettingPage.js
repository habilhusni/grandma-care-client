import React, { Component } from 'react';
import { View, Image, StyleSheet, Modal, BackHandler } from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail, Header, Button, Left, Right, Body, Text, Icon } from 'native-base';

import { connect } from 'react-redux';
import { styles } from '../styles';

import EditProfileButton from './EditProfileButton'
import EditProfile from './EditProfile'

import DeactivateAccountButton from './DeactivateAccountButton'

class SettingPage extends Component {

  state = {
    modalEditProfileVisible: false,
  }

  _setModalEditProfileVisible = (val) => {
    this.setState({ modalEditProfileVisible: val })
  }

  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', this.props.navigation.goBack)
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.props.navigation.goBack)
  }

  render() {
    const { navigate, goBack } = this.props.navigation
    const { user } = this.props
    const { token, stateKey } = this.props.navigation.state.params
    const { modalEditProfileVisible } = this.state
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
            <Card>
              <View style={styles.child}>
                <Text>User id: </Text>
                <Text>{user._id}</Text>
              </View>
            </Card>
            <Card>
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
            <View style={{marginTop:15}}>
              <EditProfileButton _setModalEditProfileVisible={this._setModalEditProfileVisible}/>
              <View style={{width:'100%', justifyContent:'center', alignItems:'center', marginTop: 15}}>
                <DeactivateAccountButton
                  token={token}
                  userID={user._id}
                  navigation={this.props.navigation}/>
              </View>
            </View>
        </Content>
        <Modal
          animationType={'slide'}
          transparent={false}
          visible={modalEditProfileVisible}
          onRequestClose={()=> this._setModalEditProfileVisible(false)}>
          <EditProfile
            user={user}
            token={token}
            userID={user._id}
            _setModalEditProfileVisible={this._setModalEditProfileVisible}/>
        </Modal>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
})

export default connect(mapStateToProps,null)(SettingPage);
