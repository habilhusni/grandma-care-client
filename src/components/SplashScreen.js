import React from 'react'
import { AsyncStorage, Alert, View, Image, Text } from 'react-native'
import { Container, Content } from 'native-base'

import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { styles } from '../styles'

class SplashScreen extends React.Component {

  state = {

  }

  componentDidUpdate() {
    const { token, navigation } = this.props

    if(token === null || token.hasOwnProperty('error')){
      setTimeout(()=> {
        navigation.goBack()
        Alert.alert(
          'Please Login',
          'Please Login before you can use this App'
        )
      }, 750)
    } else {
      AsyncStorage.multiSet([
        ['token', token.token],
        ['id', token.id]
      ], (err)=> {
        if(err) {
          Alert.alert('Error','Oops.. something wrong happened')
        } else {
          setTimeout(()=> {
            navigation.navigate('Main')
          }, 500)
        }
      })
    }
  }

  render() {
    return (
      <Container>
        <Content>
          <View style={styles.splash}>
            <Image
              source={{uri: 'http://us.sulekhalive.com/images/photos/thumbnailfull/photos-2014-7-3-8-35-8.jpg'}}
              style={{width:400,height:400}}
              />
            <Text style={styles.splashText}>Grandma Care</Text>
          </View>
        </Content>
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  token: state.token
})

export default connect(mapStateToProps, null)(SplashScreen)