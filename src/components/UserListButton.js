import React from 'react'
import { Button, Text, Icon } from 'native-base'

import PropTypes from 'prop-types'

class UserListButton extends React.Component {

  render() {
    return (
      <Button light transparent vertical
        onPress={() => null}>
        <Icon name="person" />
        <Text>User List</Text>
      </Button>
    )
  }
}

export default UserListButton