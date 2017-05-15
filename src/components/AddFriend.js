import React from 'react'
import { ToastAndroid, View } from 'react-native'
import { Container, Content, Header, Left, Body, Right, Input, Item, Icon, Text, Button, Label, Form } from 'native-base'

import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { addFriend } from '../actions'

class AddFriend extends React.Component {

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
  addFriend: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  addFriendState: state.addFriendState
})

const mapDispatchToProps = dispatch => ({
  addFriend:
})

export default connect(mapStateToProps, mapDispatchToProps)(AddFriend)