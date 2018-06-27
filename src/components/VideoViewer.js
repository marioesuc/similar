import React, { Component } from 'react';
import { View, WebView, Text } from 'react-native';

class VideoViewer extends Component {

  render() {
    return (

      <View style={styles.container}>
        <View style={{ height: 200 }}>
         <WebView
            javaScriptEnabled={true}
            domStorageEnabled={true}
            source={{uri: 'https://www.youtube.com/embed/3wmVgKjMpC8' }}
          />
          </View>
          <View style={{ alignItems: 'center' }}>
            <View style={styles.textBox}>
              <Text style={{ fontSize: 22, fontWeight: 'bold' }}> Título del vídeo </Text>
              <Text> Descripción del vídeo. Descripción del vídeo. Descripción del vídeo. Descripción del vídeo. Descripción del vídeo. Descripción del vídeo. Descripción del vídeo.  </Text>
            </View>
          </View>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#ccf1f3'
  },
  textBox: {
    backgroundColor: 'white',
    width: '95%',
    margin: 10,
    padding: 10,
    elevation: 2,
    borderWidth: 0
  }
};

export default VideoViewer;
