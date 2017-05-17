import React from 'react'
import { ToastAndroid, View, Dimensions } from 'react-native'
import { Container, Content, Header, Left, Body, Right, Input, Item, Icon, Text, Button, Label, Form } from 'native-base'

import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { addFriend, fetchOneUser, addFriendDone } from '../actions'

class AddFriend extends React.Component {

  state = {
    friendEmail: ''
  }

  handleFriendEmail = text => {
    this.setState({
      friendEmail: text
    })
  }

  componentWillUnmount() {
    const { token, userID, fetchOneUser, addFriendState, addFriendDone } = this.props
    fetchOneUser(token,userID)

    if(addFriendState.hasOwnProperty('added')) {
      if(addFriendState.added) {
        ToastAndroid.showWithGravity('Friend added !', ToastAndroid.SHORT, ToastAndroid.CENTER)
        addFriendDone()
      } else {
        ToastAndroid.showWithGravity('Add Friend Error', ToastAndroid.SHORT, ToastAndroid.CENTER)
      }
    }
  }

  render() {
    const { _setModalAddFriendVisible, token, userID, addFriend } = this.props
    const { friendEmail } = this.state
    const { height, width } = Dimensions.get('window')
    return (
      <View style={{
          width, height,
          backgroundColor: 'rgba(0,0,0,0.5)'
        }}>
      <Container style={{
          width: width * 0.85,
          height: 400,
          marginTop: '25%',
          marginLeft: '7.5%',
          marginBottom: '40%',
          backgroundColor: '#FFF'
        }}>
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
          <View style={{marginTop:'30%',alignItems:'center', marginRight:10}}>
            <Form style={{width:'85%'}}>
              <Item floatingLabel>
                <Label>Friend Email</Label>
                <Input
                  autoCapitalize="none"
                  autoCorrect={false}
                  value={friendEmail}
                  onChange={(e) => this.handleFriendEmail(e.nativeEvent.text)}
                  />
              </Item>
              <Item last style={{marginTop:20, borderColor:'transparent'}}>
                <Button full iconLeft
                  style={{width:'100%'}}
                  onPress={() => {
                    addFriend(token,userID,friendEmail)
                    setTimeout(()=> {
                      _setModalAddFriendVisible(false)
                    }, 500)
                  }}>
                  <Icon name="add" android="md-add" color="#292988"/>
                  <Text>Add</Text>
                </Button>
              </Item>
            </Form>
          </View>
        </Content>
      </Container>
      </View>
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
  addFriend: (token, userID, friendEmail) => dispatch(addFriend(token,userID,friendEmail)),
  addFriendDone: () => dispatch(addFriendDone()),
  fetchOneUser: (token,userID) => dispatch(fetchOneUser(token,userID))
})

export default connect(mapStateToProps, mapDispatchToProps)(AddFriend)