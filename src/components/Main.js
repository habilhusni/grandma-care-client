import React from 'react'
import { View, AsyncStorage, Alert, BackHandler } from 'react-native'
import { Container, Content, Header, Footer, FooterTab } from 'native-base'

import Maps from './Maps'
import LogoutButton from './LogoutButton'
import UserListButton from './UserListButton'

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

    AsyncStorage.getItem('token', (err,result)=> {
      if(result == null){
        goBack(state.params.stateKey)
        Alert.alert(
          'Please Login',
          'Please Login before you can use this App'
        )
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
    const { mapWidth, mapHeight } = this.state
    return (
      <Container>
        <Header>

        </Header>
        <Content onLayout={e => this._getContentSize(e)}>
          <View style={{width:mapWidth,height:mapHeight,alignItems:'center'}}>
            <Maps />
          </View>
        </Content>
        <Footer>
          <FooterTab>
            <UserListButton _setModalUserListVisible={this._setModalUserListVisible}/>
            <LogoutButton navigation={this.props.navigation}/>
          </FooterTab>
        </Footer>
      </Container>
    )
  }
}

export default Main