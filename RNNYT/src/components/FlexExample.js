import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LargeText from './LargeText';
import { Arrow } from './Arrow';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation'

export default class FlexExample extends Component {

    render() {
        return(
            <View style = { styles.container}>
                <View style = { [styles.boxContainer, styles.firstBox]}>
                    <View style={{backgroundColor: '#f00', alignItems: 'flex-end'}}>
                        <LargeText > First BOX </LargeText>
                    </View>
                    <LargeText > alignItems - flex-start </LargeText>
                    <LargeText > justifyContent - space-between </LargeText>
                    <View style={{ alignSelf: 'stretch'}}>
                        <View style={{flexDirection: 'row', justifyContent: 'center', }}>
                         <View style = { { width: 200, height: 1, backgroundColor: 'red', alignSelf: 'center'}}/>
                          <Arrow type = "LEFT"/>
                        </View>
                    </View>
                </View>
                <View style = { [styles.boxContainer, styles.secondBox] }>
                     <LargeText> SECOND BOX </LargeText>
                     <LargeText> alignItems - flex-end </LargeText>
                     <LargeText> justifyContent - space-around </LargeText>
                </View>
                <View style = { [styles.boxContainer, styles.thirdBox] }>
                    <LargeText> THIRD BOX </LargeText>   
                    <LargeText> alignItems - flexStart </LargeText>   
                    <LargeText> justifyContent - center </LargeText>                  
                </View>
                <View style = { [styles.boxContainer, styles.fourthBox] }>
                    <LargeText> FOURTH BOX </LargeText>   
                    <LargeText> alignItems - flexStart </LargeText>   
                    <LargeText> justifyContent - flex-start </LargeText>                  
                </View>
                <View style = { [styles.boxContainer, styles.fifthBox] }>
                    <LargeText> FIFTh BOX </LargeText>   
                    <LargeText> alignItems - flexStart </LargeText>   
                    <LargeText> justifyContent - flex-end </LargeText>                  
                </View>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
    },

    boxContainer: {
        flex: 1,
    },

    firstBox: {
        backgroundColor: '#C7DFC5',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },
    secondBox: {
        backgroundColor: '#DFFDFF',
        justifyContent: 'space-around',
        alignItems: 'center',
        
    },
    thirdBox: {
        backgroundColor: '#A9FFF7',
        justifyContent: 'center',
        alignItems: 'flex-end',
    },

    fourthBox: {
        backgroundColor: '#76FFC2',
        justifyContent: 'flex-start'
    },
    fifthBox: {
        backgroundColor: '#FCE694',
        justifyContent: 'flex-end'
    }
})



// Two Ways to achieve - 
//1. Give Align Items, and then where everever you want to achieve the other alignment, 
// do it with with alignSelf = 'stretch'
// Now you have full width of that and nest it with whatever alignment or distrubtion you want

//2. DOnt give alignment, by default it is stretch.. 
//so if you want to have nexted flexDireciton with diff alignment or distribution
// create its own alignment