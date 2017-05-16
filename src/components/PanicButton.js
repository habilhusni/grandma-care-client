import React from 'react'
import { Fab, Icon } from 'native-base'

import { connect } from 'react-redux'
import PropTypes from 'prop-types'


class PanicButton extends React.Component {

  render() {
    return (
      <Fab
        active={false}
        style={{backgroundColor:'#FF2821'}}
        position="bottomLeft"
        onPress={()=> null}>
        <Icon name="alert" android="md-alert" />
      </Fab>
    )
  }
}

// const mapDispatchToProps = dispatch => ({
//
// })

export default PanicButton