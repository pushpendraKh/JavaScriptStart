import React from 'react';
import { StyleSheet, Text} from 'react-native';
import AppText from './AppText';
import PropTypes from 'prop-types';

const LargeText = ({ children, style, ...rest }) => (
     <AppText style={[styles.large, style]} {...rest}>
       {children}
     </AppText>
);
LargeText.propTypes = {
     children: PropTypes.node,
     style: Text.propTypes.style
};
const styles = StyleSheet.create({
    large: {
    fontSize: 15,
    fontFamily: 'Palatino',
    color: 'black'
    }
});

export default LargeText;