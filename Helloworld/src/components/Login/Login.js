import React, { Component } from 'react';

import { View , Text, StyleSheet,Image, KeyboardAvoidingView } from 'react-native';
import LoginForm from './LoginForm';
export default class Login extends Component {

    render(){
        return (
            <KeyboardAvoidingView behavior = "padding" style = {loginStyles.container}>
                <View style= {loginStyles.logoContainer}>
                    <Image style = { loginStyles.logo} source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}/>
                    <Text > Ansu </Text>
                </View>
               <View style= { loginStyles.formContainer}>
                <LoginForm />
               </View>
            </KeyboardAvoidingView>
        )
    }
}

const loginStyles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor:'#3498db'
    },
    logoContainer:{
        alignItems: 'center',
        flexGrow : 1,
        justifyContent:'center',
        backgroundColor:'red'

    },
    logo:{
        width:100,
        height:100
    }
})