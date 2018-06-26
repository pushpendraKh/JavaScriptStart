import React, { Component }  from 'react';
import { View, StyleSheet } from 'react-native';

export class Arrow extends Component {

    render() {
        switch (this.props.type) {
            case "TOP":
                return( <View style = {[styles.arrowProperty, styles.topArrowProperty]} /> )
            case "RIGHT":
                return( <View style = {[styles.arrowProperty, styles.rightArrowProperty]} /> )
            case "LEFT":
                return( <View style = {[styles.arrowProperty,styles.leftArrowProperty]} /> )    
            case "BOTTOM":
                return( <View style = {[styles.arrowProperty,styles.bottomArrowProperty]} /> )
        }
        
    }
}

const styles = StyleSheet.create( {

    arrowProperty: {
        width: 10,
        height: 10,
        borderLeftWidth: 5,
        borderRightWidth: 5,
        borderTopWidth: 5,
        borderBottomWidth: 5,
    },

    leftArrowProperty: {
        borderLeftColor: 'black',
        borderRightColor: 'transparent',
        borderTopColor: 'transparent',
        borderBottomColor: 'transparent',
    },

    rightArrowProperty: {
        borderLeftColor: 'transparent',
        borderRightColor: 'black',
        borderTopColor: 'transparent',
        borderBottomColor: 'transparent',
    },

    topArrowProperty: {
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderTopColor: 'black',
        borderBottomColor: 'transparent',
    },
    bottomArrowProperty: {
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderTopColor: 'transparent',
        borderBottomColor: 'black',
    },

})