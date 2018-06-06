import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({ album }) => {
	const { url,title, artist, thumbnail_image, image } = album;
	const { thumbnailStyle, 
		headerTextStyle, 
		thumbnailContainerStyle, 
		headerTextSize,
		albumCoverImageStyle } = styles;

return (
<Card>
<CardSection>
<View style={thumbnailContainerStyle}>
<Image
style={thumbnailStyle}
source={{ uri: thumbnail_image }} 
/>
</View>
<View style={headerTextStyle}>
<Text style={headerTextSize}>{title}</Text>
<Text>{artist}</Text>
</View>
</CardSection>

<CardSection>
<Image 
	style={albumCoverImageStyle}
	source={{ uri: image }}
/>		
</CardSection>

<CardSection>
<Button onPress={() => Linking.openURL(url)}>
Buy Now!
</Button>
</CardSection>
</Card>
);
};

const styles = {
	headerTextStyle: {
		flexDirection: 'column',
		justifyContent: 'space-around'
	},
	headerTextSize: {
		fontSize: 20,
		fontWeight: 'bold',
		color: '#0509F9'
	},
	thumbnailStyle: {
		height: 50,
		width: 50
	},
	thumbnailContainerStyle: {
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: 10,
		marginRight: 10
	},
	albumCoverImageStyle: {
		height: 300,
		flex: 1,
		width: null
	}
};


export default AlbumDetail;
