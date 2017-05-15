import React from 'react'
import { ToastAndroid } from 'react-native'
import { Container, Content, Header, Left, Body, Right, Input, Item, Icon, Text, Button } from 'native-base'

import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import {} from '../actions'

class UserList extends React.Component {

  state = {
    friendID: ''
  }

  handleFriendIDInput = text => {
    this.setState({
      friendID: text
    })
  }

  render() {
    const { _setModalAddFriendVisible } = this.props
    const { friendID } = this.state
    return (
      <Container>
        <Header>
          <Left>
            <Button light transparent iconLeft
              onPress={()=> _setModalUserListVisible(false)}>
              <Icon name="arrow-back" color="#FFF"/>
              <Text>Back</Text>
            </Button>
          </Left>
        </Header>
        <Content>
          <Item inlineLabel>
            <Label>ID</Label>
            <Input
              autoCapitalize="none"
              autoCorrect={false}
              value={friendID}
              onChange={(e) => this.handleFriendIDInput(e.nativeEvent.text)}
              />
            <Button bordered>
              <Icon name="ion-plus" color="#292988"/>
            </Button>
          </Item>
        </Content>
      </Container>
    )
  }
}