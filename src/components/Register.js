import React from 'react'
import { View, Text } from 'react-native'
import { Container, Content, Form, Item, Button, Label, Input } from 'native-base'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { register } from '../actions'
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
                  onPress={(e)=> {

                    e.preventDefault()
                    register({username,password,phone})
                    _setModalVisible(false)
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
  _setModalVisible: PropTypes.func.isRequired
}

const mapDispatchToProps = dispatch => ({
  register: user => dispatch(register(user))
})

export default connect(null, mapDispatchToProps)(Register)