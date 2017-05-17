import React from 'react'
import { AsyncStorage, Alert, View, Image, Text } from 'react-native'
import { Container, Content } from 'native-base'

import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { styles } from '../styles'

class SplashScreen extends React.Component {

  componentWillUpdate(props, state) {
    const { navigation } = this.props

    if(props.token === null || props.token.hasOwnProperty('error')){
      console.log('null')
      setTimeout(()=> {
        navigation.goBack()
        Alert.alert(
          'Please Login',
          'Please Login before you can use this App'
        )
      }, 750)
    } else {
      AsyncStorage.setItem('token', props.token.token, (err) =>{
        if(props.token.id) AsyncStorage.setItem('id', props.token.id)
        if(err) {
          Alert.alert('Error','Oops.. something wrong happened')
        } else {
          setTimeout(()=> {
            navigation.navigate('Main', {stateKey:navigation.state.key})
          }, 500)
        }
      })
    }
  }


  render() {
    return (
      <Container style={{backgroundColor: 'rgba(35,113,255,0.8)'}}>
        <Content>
          <View style={styles.splash}>
            <Image
              source={{uri: 'http://www.iconsfind.com/wp-content/uploads/2015/08/20150831_55e46afd69b4b.png'}}
              style={{width:300,height:300}}
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