import React from 'react'
import { AsyncStorage, Alert, View } from 'react-native'
import { Container, Content } from 'native-base'

import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { styles } from '../styles'

class SplashScreen extends React.Component {

  componentWillMount() {
    const { token, navigation } = this.props

    AsyncStorage.setItem('token', token.token, (err)=> {
      if(err) {
        Alert.alert('Error','Oops.. something wrong happened')
      } else {
        navigation.navigate('Main')
      }
    })
  }

  render() {
    return (
      <Container>
        <Content style={styles.splash}>
          
        </Content>
      </Container>
    )
  }
}

SplashScreen.propTypes = {
  token: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  token: state.token
})

export default connect(mapStateToProps, null)(SplashScreen)