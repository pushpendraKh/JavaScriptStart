import {
    Dimensions
  } from 'react-native';
  const getDimensions = () => {
    const { width, height, scale } = Dimensions.get('window');
    console.log(`width: ${width}, height: ${height}, scale: ${scale}`);
};

export default  getDimensions