import React from 'react'
import { View, AsyncStorage, Alert, BackHandler, Modal } from 'react-native'
import { Container, Content, Header, Footer, FooterTab } from 'native-base'

import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { fetchOneUser } from '../actions'

import Maps from './Maps'
import LogoutButton from './LogoutButton'
import UserListButton from './UserListButton'
import UserList from './UserList'

class Main extends React.Component {

  static navigationOptions = {
    title: 'Main'
  }

  state = {
    modalUserListVisible: false,
    mapWidth: 0,
    mapHeight: 0
  }

  _setModalUserListVisible = (val) => {
    this.setState({ modalUserListVisible: val })
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
            fetchOneUser(token, userID)
          }
        })
      }
    })
    BackHandler.addEventListener('hardwareBackPress', this._backHandler)
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this._backHandler)
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
    const { mapWidth, mapHeight, modalUserListVisible } = this.state
    const { user } = this.props
    return (
      <Container>
        <Header>

        </Header>
        <Content onLayout={e => this._getContentSize(e)}>
          <View style={{width:mapWidth,height:mapHeight,alignItems:'center'}}>
            <Maps user={user}/>
          </View>
        </Content>
        <Footer>
          <FooterTab>
            <UserListButton _setModalUserListVisible={this._setModalUserListVisible}/>
            <LogoutButton navigation={this.props.navigation}/>
          </FooterTab>
        </Footer>
        <Modal
          animationType={'fade'}
          transparent={false}
          visible={modalUserListVisible}
          onRequestClose={()=> null}>
          <UserList _setModalUserListVisible={this._setModalUserListVisible}/>
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
  fetchOneUser: (token,userId) => dispatch(fetchOneUser(token,userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Main)