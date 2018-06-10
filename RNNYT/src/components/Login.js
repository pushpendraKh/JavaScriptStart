import React, { Component } from 'react';

import { View , Text, StyleSheet,Image, KeyboardAvoidingView } from 'react-native';
import LoginForm from './LoginForm';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { login } from '../actions/newsActions';
import { allNewsSelector } from '../selectors/newsSelectors';

class Login extends Component {

    constructor(props){
        super(props)
    }

    renderLoginInfo(isloggedIn){
        if(isloggedIn){
            console.log("logged in")
            return (<Text> Ansu Jain </Text>)
        }else {
            console.log("not logged in")
            return (<Text> Guest </Text>)
        }
    }

    render(){
        return (
            <KeyboardAvoidingView behavior = "padding" style = {loginStyles.container}>
                <View style= {loginStyles.logoContainer}>
                    <Image style = { loginStyles.logo} source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}/>
                    {this.renderLoginInfo(this.props.isLoggedIn)}
                </View>
               <View style= { loginStyles.formContainer}>
                <LoginForm buttonTapped={this.props.login}/>
               </View>
            </KeyboardAvoidingView>
        )
    }
    

}

const mapStateToProps = state => ({
    isLoggedIn: state.userInfo.isLoggedIn,
    temp: state.userInfo.temp
});
const mapDispatchToProps = dispatch => (
    bindActionCreators({
        login
    }, dispatch)
);

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

export default connect(mapStateToProps, mapDispatchToProps)(Login);