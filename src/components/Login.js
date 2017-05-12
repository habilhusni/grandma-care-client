import React from 'react'
import { View, Modal, Text, AsyncStorage, Alert } from 'react-native'
import { Container, Content, Form, Item, Button, Input, Label} from 'native-base'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { login } from '../actions'
import { styles } from '../styles'
import Register from './Register'

class Login extends React.Component {

  static navigationOptions = {
    title: 'Login'
  }

  state = {
    username: '',
    password: '',
    modalVisible: false
  }

  componentWillMount() {
    let self = this

    AsyncStorage.getItem('token', (err,result) => {
      if(result !== null){
        self.props.navigation.navigate('Main')
      }
    })
  }

  handleUsernameInput = text => {
    this.setState({
      username: text
    })
  }
  handlePasswordInput = text => {
    this.setState({
      password: text
    })
  }

  _setModalVisible = val => {
    this.setState({
      modalVisible: val
    })
  }

  _handleLogin= (input) => {
    const { login, navigation } = this.props

    login(input)
    navigation.navigate('SplashScreen')
  }

  render() {
    const { username, password, modalVisible } = this.state
    const { login, navigation } = this.props
    return (
      <Container>
        <Content>
          <View style={{flex:1,marginTop:'50%',alignItems:'center'}}>
            <View>
              <Text style={{fontSize:25}}>Login Here</Text>
            </View>
            <Form style={{width:'85%'}}>
              <Item floatingLabel>
                <Label>Username</Label>
                <Input
                  autoCapitalize="none"
                  autoCorrect={false}
                  value={username}
                  onChange={e => this.handleUsernameInput(e.nativeEvent.text)}
                />
              </Item>
              <Item floatingLabel>
                <Label>Password</Label>
                <Input
                  autoCapitalize="none"
                  autoCorrect={false}
                  secureTextEntry={true}
                  value={password}
                  onChange={e => this.handlePasswordInput(e.nativeEvent.text)}
                />
              </Item>
              <Item last style={{marginTop:20, borderColor:'transparent'}}>
                <Button block
                  onPress={(e) => {
                    e.preventDefault()
                    this._handleLogin({username,password})
                  }}>
                  <Text>Login</Text>
                </Button>
                <Button transparent primary
                  onPress={() => this._setModalVisible(true)}>
                  <Text>or Register here</Text>
                </Button>
              </Item>
            </Form>
          </View>
        </Content>
        <Modal
          animationType={"slide"}
          transparent={false}
          visible={modalVisible}
          onRequestClose={() => this._setModalVisible(false)}>
          <Register _setModalVisible={this._setModalVisible} />
        </Modal>
      </Container>
    )
  }

}

Login.propTypes = {
  login: PropTypes.func.isRequired,
  registerState: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  registerState: state.registerState
})

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(login(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)