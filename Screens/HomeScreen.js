import React, { Component } from 'react';
import {View, Text, StyleSheet } from "react-native";
import { Icon, Button, Container, Header, Content, Left} from 'native-base';
import {TabNavigator} from 'react-navigation';
 import Notifications from './Home/Notifications'; 



class HomeScreen extends Component {
    static navigationOptions = {
        drawerIcon: (
        <Icon name="ios-home" style= {{height: 24 , width:24}} />
    )
}
  render() {
    return (
    <Container>
        <Header>
            <Left>
                <Icon name='ios-menu' onPress={() =>
                this.props.navigation.navigate('DrawerOpen')
                }/>
            </Left>
        </Header>
        <Content
          contentContainerStyle={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 10 }}>
     <Text>Man Hinh HOme</Text>
    </Content>
    </Container>
       
    );
  }
}





const HomeScreenTabNavigator = TabNavigator ({
    HomeScreen : {
        screen: HomeScreen
    },
    Notifications: {
        screen: Notifications
    },
    

}); 

export default HomeScreenTabNavigator;