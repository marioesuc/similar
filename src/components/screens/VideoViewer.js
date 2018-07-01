import React, { Component } from 'react';
import { View, WebView, Text, StyleSheet } from 'react-native';

class VideoViewer extends Component {

  render() {
    return (

      <View style={styles.container}>
        <View style={styles.viewer}>
         <WebView
            javaScriptEnabled={true}
            domStorageEnabled={true}
            source={{uri: 'https://www.youtube.com/embed/3wmVgKjMpC8' }}
          />
          </View>

          <View style={styles.textBox}>
            <Text style={styles.titleText}> Título del vídeo </Text>
            <Text> Descripción del vídeo. Descripción del vídeo. Descripción del vídeo. Descripción del vídeo. Descripción del vídeo. Descripción del vídeo. Descripción del vídeo.  </Text>
          </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccf1f3'
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
