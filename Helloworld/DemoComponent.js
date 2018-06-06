import React from 'react';
import {
    View,
  Text,
  StyleSheet,
  TouchableHighlight
} from 'react-native';
import PropTypes from 'prop-types';

const BasicType = (props) => {
    const { container , btn, btnPrimary }  = styles
    return (
    <View style = { container}>
  <Text style={styles.headline}>
    Welcome to <Text style={styles.bold}>React</Text> Native {'\n'}
    <Text style={styles.subheader}>This is <Text style={styles.bold}>{props.text}</Text></Text>
  </Text>
  <TouchableHighlight style={[btn, btnPrimary]}>
         <Text>Submit</Text>
    </TouchableHighlight>
  </View>
    )
};

BasicType.propTypes ={
    text : PropTypes.string.isRequired
}


const styles = StyleSheet.create({
    btn:{
        borderStyle: 'solid',
        borderColor: '#d5d5d5',
        borderWidth: 1,
        backgroundColor: '#eee',
        borderRadius: 3,
        padding: 3,
        paddingLeft: 5,
        paddingRight: 5,
        flex:1
    },
    btnPrimary:{
        backgroundColor: '#60b044',
        borderColor: 'yellow'
   
    },
    container : {
        flex: 1,
    backgroundColor: 'red',
    justifyContent:'space-around'
    },
  headline: {
    fontFamily: 'Georgia',
    fontSize: 20,
    margin:5,
    flex:3

  },
  subheader: {
    color: 'blue',
    margin:50
  },
  bold: {
    fontWeight: 'bold',
    margin:5
  }
});

export default BasicType;