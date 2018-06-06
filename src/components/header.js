// Importing libraries to create header
import React from 'react';
import { Text, View } from 'react-native';

// Creating the component by creating a JS function

const Header = (props) => {
const { textStyles, viewStyles } = styles;
  return ( 
 <View style={viewStyles}>
 <Text style={textStyles}>{props.headerText}</Text>
 </View>
);
};

const styles = {
	viewStyles: {
			justifyContent: 'center',
			alignItems: 'center',	
			height: 70,
			paddingTop: 15,	
			elevation: 5,
			backgroundColor: '#F8F8F8'
	},
 textStyles: {
          fontSize: 30
 }
};

// Rendering componts to different componts so that a single file can display on mobile screen
export default Header;
