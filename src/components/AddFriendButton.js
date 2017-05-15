import React from 'react'
import { Button, Text, Icon } from 'native-base'

import PropTypes from 'prop-types'

class AddFriendButton extends React.Component {

  render() {
    return (
      <Button light transparent vertical
        onPress={() => this.props._setModalAddFriendVisible(true)}>
        <Icon name="ion-person-add" color="#FFF"/>
        <Text>Add Friend</Text>
      </Button>
    )
  }
}

AddFriendButton.propTypes = {
  _setModalAddFriendVisible: PropTypes.func.isRequired
}

export default AddFriendButton