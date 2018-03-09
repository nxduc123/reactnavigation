import React from 'react';
import {StyleSheet, Text, Image, View} from "react-native"
import { StackNavigator, DrawerNavigator, DrawerItems } from "react-navigation";
import SettingScreen from './Screens/SettingScreen'
import HomeScreen from './Screens/HomeScreen'
import { Icon, Button, Container, Header, Content, Left, Body} from 'native-base';

export default class App extends React.Component {
  render() {
    return (
     <AppDrawnavi/>
    );
  }
}
/* const Appnavi = StackNavigator ({
  LoginScreen: {screen : LoginScreen},
  HomeScreem: {screen: HomeScreen}
}) */



const CustomDrawerContentCompoment = (props) =>(
  <Container>
       <Header style= {{height:200}}>
         <Body>
           <Image
           style={styles.drawImg}
           source={require('./assets/icon.jpg')}
           />
         </Body>
       </Header>
       <Content>
         <DrawerItems {...props}/>
       </Content>
  </Container>
)

const AppDrawnavi = DrawerNavigator(
  {
    HomeScreem: {screen: HomeScreen},
    SettingScreen: {screen : SettingScreen}
  },
  {
    initialRouteName : 'HomeScreem',
    drawerPosition: 'left',
    contentComponent : CustomDrawerContentCompoment
   // drawerOpenRoute : 'DrawOpen',
    //drawerCloseRoute : 'DrawClose',
   // drawerToggleRoute : 'DrawerToggle'
  })

styles = StyleSheet.create({
  drawImg : {
    height: 150,
    width: 150,
    borderRadius: 75
  }
})
