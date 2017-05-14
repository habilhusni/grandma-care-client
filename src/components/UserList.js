import React from 'react'
import { AsyncStorage, Alert, ActivityIndicator } from 'react-native'
import { Container, Content, Header, Left, List, ListItem, Text, Button, Icon } from 'native-base'

import { connect } from 'react-redux',
import PropTypes from 'prop-types'

import { fetchUsers } from '../actions'
import { styles } from '../styles'

class UserList extends React.Component {

  componentWillMount() {
    const self = this

    AsyncStorage.getItem('token', (err,result)=> {
      if(err) {
        Alert.alert('Error getting token')
      } else {
        self.props.fetchUsers(result)
      }
    })
  }

  render() {
    const { UserList, _setModalUserListVisible } = this.props
    return (
      <Container>
        <Header>
          <Left>
            <Button light transparent vertical
              onPress={()=> _setModalUserListVisible(false)}>
              <Icon name="arrow-back" color="#FFF"/>
              <Text>Back</Text>
            </Button>
          </Left>
        </Header>
        <Content>
          <List>
            { UserList.length > 0 && Array.isArray(UserList)
              ?
              UserList.map(user => (
                <ListItem key={user._id}>
                  <Text>{user.username}</Text>
                </ListItem>
              ))
              :
              <ActivityIndicator
                animating={true}
                size="large"
                style={styles.loadingIcon}/>
            }
          </List>
        </Content>
      </Container>
    )
  }

}

UserList.propTypes = {
  UserList: PropTypes.arrayOf(PropTypes.object).isRequired,
  fetchUsers: PropTypes.func.isRequired,
  _setModalUserListVisible: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  UserList: state.UserList
})

const mapDispatchToProps = dispatch => ({
  fetchUsers: token => dispatch(fetchUsers(token))
})

export default connect(mapStateToProps, mapDispatchToProps)(UserList)