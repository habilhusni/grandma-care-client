import React from 'react'
import { Button, Text, Icon } from 'native-base'

import PropTypes from 'prop-types'

class AddFriendButton extends React.Component {

  render() {
    return (
      <Button light transparent vertical
        onPress={() => this.props._setModalAddFriendVisible(true)}>
        <Icon name="person-add" android="md-person-add" color="#FFF"/>
        <Text>Add Care</Text>
      </Button>
    )
  }
}

AddFriendButton.propTypes = {
  _setModalAddFriendVisible: PropTypes.func.isRequired
}

export default AddFriendButton