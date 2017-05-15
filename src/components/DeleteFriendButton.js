import React from 'react'
import { Button, Icon} from 'native-base'

import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class DeleteFriendButton extends React.Component {

  render() {
    return (
      <Button bordered danger
        onPress={() => null}>
        <Icon name="delete" android="md-close" color="#FF3135"/>
      </Button>
    )
  }
}

export default DeleteFriendButton