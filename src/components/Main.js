import React from 'react'
import { View, AsyncStorage, Alert, BackHandler } from 'react-native'
import { Container, Content, Header, Footer } from 'native-base'

import Maps from './Maps'
import LogoutButton from './LogoutButton'

class Main extends React.Component {

  static navigationOptions = {
    title: 'Main'
  }

  state = {

  }

  componentWillMount() {
    let self = this

    AsyncStorage.getItem('token', (err,result)=> {
      if(result == null){
        self.props.navigation.goBack()
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
    let result = AsyncStorage.getItem('token')
    if(result === null) {
      this.props.navigation.goBack()
      return true
    }
    return false
  }

  render() {
    return (
      <Container>
        <Header>

        </Header>
        <Content>
          <View style={{width:400,height:500,alignItems:'center'}}>
            <Maps />
          </View>
        </Content>
        <Footer>
          <LogoutButton navigation={this.props.navigation}/>
        </Footer>
      </Container>
    )
  }
}

export default Main