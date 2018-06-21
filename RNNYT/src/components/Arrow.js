import React, { Component }  from 'react';
import { View, StyleSheet } from 'react-native';
import * as globalStyles from '../styles/global';

export class LeftArrow extends Component {

    render() {
        return(
            <View style = { styles.leftArrowProperty} />
        )
    }

}



const styles = StyleSheet.create( {
    leftArrowProperty: {
        width: 0,
        height: 0,
        //borderRadius: 25,
       // backgroundColor: 'white'
        borderLeftWidth: 5,// '25px solid #093A3E',
        borderRightWidth: 5,//'25px solid transparent',
        borderTopWidth: 5,//'25px solid transparent',
        borderBottomWidth: 5,//'25px solid transparent',
        borderLeftColor: 'red',
        borderRightColor: 'transparent',
        borderTopColor: 'transparent',
        borderBottomColor: 'transparent',
    }
})