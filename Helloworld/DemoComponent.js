import React from 'react';
import {
    View,
  Text,
  StyleSheet
} from 'react-native';
import PropTypes from 'prop-types';

const BasicType = (props) => {
    return (
    <View style = { styles.container}>
  <Text style={styles.headline}>
    Welcome to <Text style={styles.bold}>React</Text> Native {'\n'}
    <Text style={styles.subheader}>This is <Text style={styles.bold}>{props.text}</Text></Text>
  </Text>
  </View>
    )
};

BasicType.propTypes ={
    text : PropTypes.string.isRequired
}


const styles = StyleSheet.create({
    container : {
        flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red'
    },
  headline: {
    fontFamily: 'Georgia',
    fontSize: 20,
    margin:5
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