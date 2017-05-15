import React from 'react'
import { ToastAndroid, View, ToastAndroid } from 'react-native'
import { Container, Content, Header, Left, Body, Right, Input, Item, Icon, Text, Button, Label, Form } from 'native-base'

import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { addFriend, fetchOneUser, addFriendDone } from '../actions'

class AddFriend extends React.Component {

  state = {
    friendID: ''
  }

  handleFriendIDInput = text => {
    this.setState({
      friendID: text
    })
  }

  componentWillUnmount() {
    const { token, userID, fetchOneUser, addFriendState } = this.props
    fetchOneUser(token,userID)

    if(addFriendState.hasOwnProperty('added')) {
      if(addFriendState.added) {
        ToastAndroid.showWithGravity('Friend added !', ToastAndroid.SHORT, ToastAndroid.CENTER)

      } else {
        ToastAndroid.showWithGravity('Error', ToastAndroid.SHORT, ToastAndroid.CENTER)
      }
    }
  }

  render() {
    const { _setModalAddFriendVisible, token, userID } = this.props
    const { friendID } = this.state
    return (
      <Container>
        <Header>
          <Left>
            <Button light transparent iconLeft
              onPress={()=> _setModalAddFriendVisible(false)}>
              <Icon name="arrow-back" color="#FFF"/>
              <Text>Back</Text>
            </Button>
          </Left>
        </Header>
        <Content>
          <View style={{marginTop:'45%',alignItems:'center'}}>
            <Form style={{width:'90%'}}>
              <Item floatingLabel>
                <Label>Friend ID</Label>
                <Input
                  autoCapitalize="none"
                  autoCorrect={false}
                  value={friendID}
                  onChange={(e) => this.handleFriendIDInput(e.nativeEvent.text)}
                  />
              </Item>
              <Item last style={{marginTop:20, borderColor:'transparent'}}>
                <Button bordered
                  onPress={() => {
                    addFriend(token,userID,friendID)
                    setTimeout(()=> {
                      _setModalAddFriendVisible(false)
                    })
                  }}>
                  <Icon name="add" android="md-add" color="#292988"/>
                </Button>
              </Item>
            </Form>
          </View>
        </Content>
      </Container>
    )
  }
}

AddFriend.propTypes = {
  addFriend: PropTypes.func.isRequired,
  addFriendDone: PropTypes.func.isRequired,
  fetchOneUser: PropTypes.func.isRequired,
  addFriendState: PropTypes.object.isRequired,
  token: PropTypes.string.isRequired,
  userID: PropTypes.string.isRequired
}

const mapStateToProps = state => ({
  addFriendState: state.addFriendState
})

const mapDispatchToProps = dispatch => ({
  addFriend: (token, userID, friendID) => dispatch(addFriend(token,userID,friendID)),
  addFriendDone: () => dispatch(addFriendDone())
  fetchOneUser: (token,userID) => dispatch(fetchOneUser(token,userID))
})

export default connect(mapStateToProps, mapDispatchToProps)(AddFriend)