import React from 'react'
import { ToastAndroid } from 'react-native'
import { Button, Icon } from 'native-base'

import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { deleteFriend, fetchOneUser, deleteFriendDone } from '../actions'

class DeleteFriendButton extends React.Component {

  componentWillUnmount() {
    const { token, userID, deleteFriendState, deleteFriendDone } = this.props
    fetchOneUser(token,userID)
    if(deleteFriendState.hasOwnProperty('deleted')){
      if(deleteFriendState.deleted){
        ToastAndroid.showWithGravity('Deleted !', ToastAndroid.SHORT, ToastAndroid.CENTER)
        deleteFriendDone()
      } else {
        ToastAndroid.showWithGravity('Delete Failed', ToastAndroid.SHORT, ToastAndroid.CENTER)
      }
    }
  }

  render() {
    const { deleteFriend, token, userID, friendID, _setModalUserListVisible } = this.props
    return (
      <Button bordered danger
        onPress={() => {
          deleteFriend(token,userID,friendID)
          setTimeout(() => {
            _setModalUserListVisible(false)
          },500)
        }}>
        <Icon name="delete" android="md-close" color="#FF3135"/>
      </Button>
    )
  }
}

DeleteFriendButton.propTypes = {
  deleteFriend: PropTypes.func.isRequired,
  token: PropTypes.string.isRequired,
  userID: PropTypes.string.isRequired,
  friendID: PropTypes.string.isRequired,
  _setModalUserListVisible: PropTypes.func.isRequired,
  deleteFriendDone: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  deleteFriendState: state.deleteFriendState
})

const mapDispatchToProps = dispatch => ({
  deleteFriend: (token,userID,friendID) => dispatch(deleteFriend(token,userID,friendID)),
  deleteFriendDone: () => dispatch(deleteFriendDone())
})

export default connect(mapStateToProps, mapDispatchToProps)(DeleteFriendButton)