import React, { Component } from 'react';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation'
import FlexExample from './FlexExample'
import Login from './Login'

// export default Navigation = createStackNavigator({
//     FlexExample: {
//         navigationOptions: {
//             title: 'Flex'
//         },
//         screen: FlexExample,
//     },
// })

export default tabNavigation = createBottomTabNavigator({
    FlexExample: {
        navigationOptions: {
            title: 'Flex'
        },
        screen: FlexExample,
    },
    Login: {
        navigationOptions: {
            title: 'Login'
        },
        screen: Login,
    },
})