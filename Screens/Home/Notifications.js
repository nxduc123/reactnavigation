import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';

class Notifications extends Component{
    render(){
        return (
        <Container>
            <Header>
             <Left/>
             <Body>
             <Title>Header</Title>
             </Body>
             <Right />
            </Header>
         <Content>
                <Text> This Is the notifications</Text>
        </Content>
        </Container>
        )
    }
}


export default Notifications;