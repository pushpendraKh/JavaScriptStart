import React , { Component} from 'react';
import { TextInput, View, StyleSheet, TouchableOpacity, Text} from 'react-native';



export default class LoginForm extends Component {
    render(){
        return(
            <View  style = {styles.container}>
                <TextInput style = {styles.input} placeholder = "User or Email"
                  placeholderTextColor = "rgba(255,255,255,0.7)"
                  returnKeyType = "next" 
                  onSubmitEditing = {() => this.passwordInput.focus}
                  />
                <TextInput secureTextEntry returnKeyType = "go"
                 placeholder = "password" style = {styles.input}  placeholderTextColor = "rgba(255,255,255,0.7)"
                 ref={(input) => this.passwordInput = input}/>
                <TouchableOpacity style = {styles.btnContainer} >
                    <Text style = {styles.btnText}> Login </Text>
                </TouchableOpacity>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container:{
        padding:20
    },
    input: {
        height:40,
        backgroundColor: 'rgba(255,255,255,0.2)',
        marginBottom:20,
        color: '#fff',
        paddingHorizontal: 10
    },
    btnContainer:{
        backgroundColor:'#2980b9',
        paddingVertical:20
    },
    btnText:{
        textAlign:'center',
        fontWeight:'700',
        color:'#FFFFFF'

    }
})