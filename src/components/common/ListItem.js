import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection } from './CardSection';

class ListItem extends Component {
	onRowPress() {
		Actions.videoViewer({ videoUrl: this.props.videoUrl, videoTitle: this.props.title, desc: this.props.desc });
	}

	render() {
		return (
			<TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
				<View style={styles.rowStyle}>
					<CardSection style={{ height: 100, justifyContent: 'flex-start' }}>
						<Image 
						style={{ width: 100, height: 75, minWidth: 100 }}
						source={{ uri: this.props.picUrl }} />

						<Text style={styles.titleStyle}>
							{this.props.title}
						</Text>
					</CardSection>
				</View>
			</TouchableWithoutFeedback>
			
		);
	}
}

const styles = {
	titleStyle: {
		fontSize: 20,
		padding: 15
	},
	rowStyle: {
		elevation: 2,
		borderWidth: 0,
		margin: 10
	}
};

export default ListItem;
