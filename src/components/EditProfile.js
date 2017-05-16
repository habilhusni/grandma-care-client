import React from 'react';
import { AsyncStorage, Alert, ActivityIndicator, View, Text } from 'react-native';
import { Container, Content, Form, Item, Button, Label, Input } from 'native-base';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchOneUser, updateUser } from '../actions';
import { styles } from '../styles';

import DeleteFriendButton from './DeleteFriendButton';

class EditProfile extends React.Component {

  state = {
    username: '',
    phone: '',
    email: ''
  }

  handleUsernameInput = text => {
    this.setState({
      username: text
    })
  }
  handlePhoneInput = text => {
    this.setState({
      phone: text
    })
  }
  handleEmailInput = text => {
    this.setState({
      email: text
    })
  }

  componentDidMount() {
    this.setState({
      username: this.props.user.username,
      password: this.props.user.password,
      email: this.props.user.email,
      phone: this.props.user.phone
    })
  }

  componentWillUnmount() {
    const { user, fetchOneUser, token, userID } = this.props
    fetchOneUser(token, userID)
  }

  render() {
    const { user, _setModalEditProfileVisible, token, userID, updateUser } = this.props
    const { username, password, phone, email } = this.state
    return (
      <Container>
        <Content>
          <View style={{marginTop:'45%', alignItems:'center'}}>
            <View>
              <Text style={{fontSize:25}}>Update Profile Information</Text>
            </View>
            <Form style={{width:'85%'}}>
              <Item fixedLabel>
                <Label>Username</Label>
                <Input
                  autoCapitalize="none"
                  autoCorrect={false}
                  value={username}
                  onChange={e => this.handleUsernameInput(e.nativeEvent.text)}
                />
              </Item>
              <Item fixedLabel>
                <Label>Phone</Label>
                <Input
                  autoCapitalize="none"
                  autoCorrect={false}
                  value={phone}
                  keyboardType='phone-pad'
                  onChange={e => this.handlePhoneInput(e.nativeEvent.text)}
                />
              </Item>
              <Item fixedLabel>
                <Label>Email</Label>
                <Input
                  autoCapitalize="none"
                  autoCorrect={false}
                  value={email}
                  keyboardType='email-address'
                  onChange={e => this.handleEmailInput(e.nativeEvent.text)}
                />
              </Item>
              <Item>
                <Button full style={{width:'100%', marginTop:15}}
                  onPress={()=> {
                    updateUser(token,userID,{username,phone,email})
                    setTimeout(()=> {
                      _setModalEditProfileVisible(false)
                    }, 500)
                  }}>
                  <Text style={{color:'white'}}>UPDATE</Text>
                </Button>
              </Item>
            </Form>
          </View>
        </Content>
      </Container>
    )
  }
}

EditProfile.propTypes = {
  user: PropTypes.object.isRequired,
  fetchOneUser: PropTypes.func.isRequired,
  _setModalEditProfileVisible: PropTypes.func.isRequired,
  token: PropTypes.string.isRequired,
  userID: PropTypes.string.isRequired
}

const mapDispatchToProps = dispatch => ({
  fetchOneUser: (token,userID) => dispatch(fetchOneUser(token,userID)),
  updateUser: (token,userID,newUser) => dispatch(updateUser(token,userID,newUser))
})

export default connect(null, mapDispatchToProps)(EditProfile)
