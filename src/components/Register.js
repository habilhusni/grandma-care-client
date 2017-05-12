import React from 'react'
import { View, Text, Alert } from 'react-native'
import { Container, Content, Form, Item, Button, Label, Input } from 'native-base'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { register, registerDone } from '../actions'
import { styles } from '../styles'

class Register extends React.Component {

  state = {
    username: '',
    password: '',
    phone: ''
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
  handlePhoneInput = text => {
    this.setState({
      phone: text
    })
  }

  componentWillUnmount() {
    if(this.props.registerState.hasOwnProperty('register')){
      if(this.props.registerState.register){
        Alert.alert('Register Success')
        this.props.registerDone()
      } else {
        Alert.alert('Register Failed')
      }
    }
  }

  render() {
    const { username, password, phone } = this.state
    const { register, _setModalVisible } = this.props
    return (
      <Container>
        <Content>
          <View style={{marginTop:'45%', alignItems:'center'}}>
            <View>
              <Text style={{fontSize:25}}>Register Here</Text>
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
              <Item floatingLabel>
                <Label>Phone</Label>
                <Input
                  autoCapitalize="none"
                  autoCorrect={false}
                  value={phone}
                  onChange={e => this.handlePhoneInput(e.nativeEvent.text)}
                />
              </Item>
              <Item>
                <Button full style={{width:'100%', marginTop:15}}
                  onPress={()=> {
                    register({username,password,phone})
                    setTimeout(()=> {
                      _setModalVisible(false)
                    }, 500)
                  }}>
                  <Text>Register</Text>
                </Button>
              </Item>
            </Form>
          </View>
        </Content>
      </Container>
    )
  }

}

Register.propTypes = {
  register: PropTypes.func.isRequired,
  registerDone: PropTypes.func.isRequired,
  _setModalVisible: PropTypes.func.isRequired,
  registerState: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  registerState: state.registerState
})

const mapDispatchToProps = dispatch => ({
  register: user => dispatch(register(user)),
  registerDone: () => dispatch(registerDone())
})

export default connect(mapStateToProps, mapDispatchToProps)(Register)