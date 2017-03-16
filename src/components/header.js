// Import libraries for making a component
import React from 'react';
import { Text } from 'react-native';

//  Make a component, name will always be the same as the file name
const Header = () => {
    const { textStyle } = styles;

    return <Text style={textStyle}>Albums!</Text>;
};

const styles = {
    textStyle: {
      fontSize: 20
    }
};
// Make the component available to other parts of the application
export default Header;
