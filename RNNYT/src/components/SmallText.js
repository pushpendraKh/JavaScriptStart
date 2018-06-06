import React from 'react';
import { StyleSheet, Text} from 'react-native';
import AppText from './AppText';
import PropTypes from 'prop-types';

const SmallText = ({ children, style, ...rest }) => (
     <AppText style={[styles.small, style]} {...rest}>
       {children}
     </AppText>
);
SmallText.propTypes = {
     children: PropTypes.node,
     style: Text.propTypes.style
};
const styles = StyleSheet.create({
    small: {
    fontSize: 11
    }
});

export default SmallText;