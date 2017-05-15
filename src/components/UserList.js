import React from 'react'
import { AsyncStorage, Alert, ActivityIndicator } from 'react-native'
import { Container, Content, Header, Left, Body, Right, List, ListItem, Text, Button, Icon } from 'native-base'

import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { fetchOneUser } from '../actions'
import { styles } from '../styles'

import DeleteFriendButton from './DeleteFriendButton'

class UserList extends React.Component {

  componentWillUnmount() {
    const { user, fetchOneUser, token, userID } = this.props
    fetchOneUser(token, userID)
  }

  render() {
    const { user, _setModalUserListVisible, token, userID } = this.props
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
          <List>
            { user.friends !== undefined
              ?
              user.friends.map(friend => (
                <ListItem key={friend._id}>
                  <Body>
                    <Text>{friend.username}</Text>
                  </Body>
                  <Right>
                    <DeleteFriendButton
                      token={token}
                      userID={userID}
                      friendID={friend._id}
                      _setModalUserListVisible={_setModalUserListVisible}/>
                  </Right>
                </ListItem>
              ))
              :
              <ActivityIndicator
                animating={true}
                size="large"
                color="#292988"
                style={styles.loadingIcon}/>
            }
          </List>
        </Content>
      </Container>
    )
  }

}

UserList.propTypes = {
  user: PropTypes.object.isRequired,
  fetchOneUser: PropTypes.func.isRequired,
  _setModalUserListVisible: PropTypes.func.isRequired,
  token: PropTypes.string.isRequired,
  userID: PropTypes.string.isRequired
}

const mapDispatchToProps = dispatch => ({
  fetchOneUser: (token,userID) => dispatch(fetchOneUser(token,userID))
})

export default connect(null, mapDispatchToProps)(UserList)