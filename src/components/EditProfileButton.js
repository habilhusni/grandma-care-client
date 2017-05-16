import React from 'react';
import { Button, Text, Icon } from 'native-base';

import PropTypes from 'prop-types';

class EditProfileButton extends React.Component {

  render() {
    return (
      <Button block
        onPress={() => this.props._setModalEditProfileVisible(true)}>
        <Text>EDIT PROFILE</Text>
      </Button>
    )
  }
}

EditProfileButton.propTypes = {
  _setModalEditProfileVisible: PropTypes.func.isRequired
}

export default EditProfileButton
