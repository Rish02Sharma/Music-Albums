import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
return (
	<View style={styles.containerStyle}>
	{props.children}
	</View>
	);
};

const styles = {
	containerStyle: {
		borderWidth: 2,
		borderColor: '#ddd',
		borderRadius: 2,
		borderBottomWidth: 1,
		elevation: 3,
		marginLeft: 5,
		marginRight: 5,
		marginTop: 10
	},
};

export default Card;
