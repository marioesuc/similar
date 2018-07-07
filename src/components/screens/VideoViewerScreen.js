// Component that renders screen related to the video viewer

import React, { Component } from 'react';
import { View, WebView, Text, StyleSheet } from 'react-native';
import * as Colors from './styles/Colors';

class VideoViewer extends Component {

  render() {
    console.log(this.props.videoUrl);
    console.log(this.props.videoTitle);
    console.log(this.props.desc);
    return (

      <View style={styles.container}>
        <View style={styles.viewer}>
         <WebView
            javaScriptEnabled={true}
            domStorageEnabled={true}
            source={{uri: this.props.videoUrl }}
          />
          </View>

          <View style={styles.textBox}>
            <Text style={styles.titleText}> {this.props.videoTitle} </Text>
            <Text>{this.props.desc}</Text>
          </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.appBackground
  },
  viewer: { height: 200 },
  textBox: {
    backgroundColor: 'white',
    width: '95%',
    margin: 10,
    padding: 10,
    elevation: 2,
    borderWidth: 0
  },
  titleText: {
    fontSize: 22,
    fontWeight: 'bold'
  }
});

export default VideoViewer;
