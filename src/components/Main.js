import React from 'react'
import { View, AsyncStorage, Alert } from 'react-native'
import { Container, Content, Header, Footer } from 'native-base'

import Maps from './Maps'

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

        </Footer>
      </Container>
    )
  }
}

export default Main