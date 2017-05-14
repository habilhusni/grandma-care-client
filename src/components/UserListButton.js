import React from 'react'
import { Button, Text, Icon } from 'native-base'

import PropTypes from 'prop-types'

class UserListButton extends React.Component {

  render() {
    return (
      <Button light transparent vertical
        onPress={() => this.props._setModalUserListVisible(true)}>
        <Icon name="person" color="#FFF" />
        <Text>User List</Text>
      </Button>
    )
  }
}

UserListButton.propTypes = {
  _setModalUserListVisible: PropTypes.func.isRequired
}

export default UserListButton