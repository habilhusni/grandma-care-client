import React from 'react'
import  Icon  from 'react-native-vector-icons/Ionicons'
import { View, AsyncStorage, Alert, BackHandler, Modal, ActivityIndicator, DeviceEventEmitter } from 'react-native'
import { Container, Content, Header, Footer, FooterTab, Right, Button } from 'native-base'
import { SensorManager } from 'NativeModules';

import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { fetchOneUser, updateSensor } from '../actions'
import { styles } from '../styles'

import Maps from './Maps'
import AddFriendButton from './AddFriendButton'
import AddFriend from './AddFriend'
import LogoutButton from './LogoutButton'
import UserListButton from './UserListButton'
import UserList from './UserList'
import PanicButton from './PanicButton'

class Main extends React.Component {

  static navigationOptions = {
    title: 'Main'
  }

  state = {
    modalUserListVisible: false,
    modalAddFriendVisible: false,
    mapWidth: 0,
    mapHeight: 0,
    token: '',
    userID: ''
  }

  getAccel(){
    let self = this
    SensorManager.startAccelerometer(500);
    DeviceEventEmitter.addListener('Accelerometer', function (data) {
      if(Math.abs(data.x) > 21 || Math.abs(data.y) > 21 || Math.abs(data.z) > 21 ) {
        const sensorUpdate = {
          x: Math.abs(Math.round(data.x)),
          y: Math.abs(Math.round(data.y)),
          z: Math.abs(Math.round(data.z)),
          token: self.state.token,
          userID: self.state.userID
        }
        self.props.updateSensor(sensorUpdate);
      }
      else if(Math.abs(data.x) < 1 && Math.abs(data.y) < 1 && Math.abs(data.z) < 1 ) {
        const sensorUpdate = {
          x: Math.abs(Math.round(data.x)),
          y: Math.abs(Math.round(data.y)),
          z: Math.abs(Math.round(data.z)),
          token: self.state.token,
          userID: self.state.userID
        }
        self.props.updateSensor(sensorUpdate);
      }
    });
  }

  _setModalUserListVisible = (val) => {
    this.setState({ modalUserListVisible: val })
  }

  _setModalAddFriendVisible = (val) => {
    this.setState({ modalAddFriendVisible: val })
  }

  _getContentSize = (e) => {
    this.setState({
      mapWidth: e.nativeEvent.layout.width,
      mapHeight: e.nativeEvent.layout.height
    })
  }

  componentWillMount() {
    const { goBack, state } = this.props.navigation
    const { fetchOneUser } = this.props

    AsyncStorage.getItem('token', (err,token)=> {
      if(token == null){
        goBack(state.params.stateKey)
        Alert.alert(
          'Please Login',
          'Please Login before you can use this App'
        )
      } else {
        AsyncStorage.getItem('id', (err,userID) => {
          if(err) {
            Alert.alert('','Error getting user ID')
          } else {
            this.setState({
              token, userID
            })
            fetchOneUser(token, userID)
          }
        })
      }
    })
    BackHandler.addEventListener('hardwareBackPress', this._backHandler);
  }

  componentDidMount(){
    this.getAccel()
  }

  componentWillUnmount() {
    SensorManager.stopAccelerometer();
    BackHandler.removeEventListener('hardwareBackPress', this._backHandler);
  }

  _backHandler = async () => {
    const { goBack, state } = this.props.navigation
    let result = await AsyncStorage.getItem('token')
    if(result === null) {
      goBack(state.params.stateKey)
      return true
    }
    return false
  }

  render() {
    const { mapWidth, mapHeight, modalUserListVisible, token, userID, modalAddFriendVisible, mapLatitude, mapLongitude } = this.state
    const { user } = this.props
    const { navigate } = this.props.navigation
    return (
      <Container>
        <Header>
          <Right>
            <Button transparent onPress={() => navigate('Profile')}>
              <Icon name="md-settings" style={{fontSize: 28, color: 'white'}}/>
            </Button>
          </Right>
        </Header>
        <Content onLayout={e => this._getContentSize(e)}>
          { mapWidth > 0 && mapHeight > 0 ?
            <View style={{width:mapWidth,height:mapHeight,alignItems:'center'}}>
              <Maps user={user} token={token} userID={userID}/>
            </View>
            :
            <ActivityIndicator
              animating={true}
              size="large"
              color="#292988"
              style={styles.loadingIcon}/>
          }
          <PanicButton token={token} userID={userID}/>
        </Content>
        <Footer>
          <FooterTab>
            <AddFriendButton _setModalAddFriendVisible={this._setModalAddFriendVisible}/>
            <UserListButton _setModalUserListVisible={this._setModalUserListVisible}/>
            <LogoutButton navigation={this.props.navigation}/>
          </FooterTab>
        </Footer>
        <Modal
          animationType={'slide'}
          transparent={false}
          visible={modalUserListVisible}
          onRequestClose={()=> null}>
          <UserList
            user={user}
            token={token}
            userID={userID}
            _setModalUserListVisible={this._setModalUserListVisible}/>
        </Modal>
        <Modal
          animationType={'slide'}
          transparent={false}
          visible={modalAddFriendVisible}
          onRequestClose={()=> null}>
          <AddFriend
            token={token}
            userID={userID}
            _setModalAddFriendVisible={this._setModalAddFriendVisible} />
        </Modal>
      </Container>
    )
  }
}

Main.propTypes = {
  user: PropTypes.object.isRequired,
  fetchOneUser: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  user: state.user
})

const mapDispatchToProps = dispatch => ({
  fetchOneUser: (token,userId) => dispatch(fetchOneUser(token,userId)),
  updateSensor: (sensorUpdate) => dispatch(updateSensor(sensorUpdate))
})

export default connect(mapStateToProps, mapDispatchToProps)(Main)
