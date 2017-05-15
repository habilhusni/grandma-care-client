import React, { Component } from 'react';
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import { Container, Content, Card, CardItem, Thumbnail, Text, Header, Button, Left, Body } from 'native-base';

import { connect } from 'react-redux';

class SettingPage extends Component {
  render() {
    const { navigate,goBack } = this.props.navigation
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => goBack()}>
              <Icon name="md-arrow-back" style={{fontSize: 28, color: 'white'}}/>
              <Text>Back</Text>
            </Button>
          </Left>
        </Header>
        <Content>
          <Card >
            <CardItem>
              <Left>
                <Body>
                  <Text>NativeBase</Text>
                  <Text note>GeekyAnts</Text>
                </Body>
              </Left>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
})

export default connect(mapStateToProps,null)(SettingPage);
