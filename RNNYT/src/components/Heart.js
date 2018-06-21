import React, { Component }  from 'react';
import { View, StyleSheet } from 'react-native';

export class Heart extends Component {
    render() {
        return (
            <View {...this.props} style={[styles.heart]}>
                <View style={styles.leftHeart} />
                <View style={styles.rightHeart} />
            </View>
        )
    }
}

const styles = StyleSheet.create( {

      heartShape: {
        width: 30,
        height: 45,

      },
      leftHeart: {
        transform: [
            {rotate: '-45deg'}
        ],
        left: 5
      },
      rightHeart: {
        transform: [
            {rotate: '45deg'}
        ],
        right: 5
      }
})

