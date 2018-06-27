import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import ListItem from './common/ListItem';

class Grammar extends Component {

  render() {
    return (

      <View style={styles.container}>
        <FlatList
          data={[
            { picUrl: 'https://img.youtube.com/vi/3wmVgKjMpC8/0.jpg', title: 'Título del vídeo' },
            { picUrl: 'https://img.youtube.com/vi/3wmVgKjMpC8/0.jpg', title: 'Título del vídeo' },
            { picUrl: 'https://img.youtube.com/vi/3wmVgKjMpC8/0.jpg', title: 'Título del vídeo' },
            { picUrl: 'https://img.youtube.com/vi/3wmVgKjMpC8/0.jpg', title: 'Título del vídeo' },
            { picUrl: 'https://img.youtube.com/vi/3wmVgKjMpC8/0.jpg', title: 'Título del vídeo' },
            { picUrl: 'https://img.youtube.com/vi/3wmVgKjMpC8/0.jpg', title: 'Título del vídeo' },
            { picUrl: 'https://img.youtube.com/vi/3wmVgKjMpC8/0.jpg', title: 'Título del vídeo' },
            { picUrl: 'https://img.youtube.com/vi/3wmVgKjMpC8/0.jpg', title: 'Título del vídeo' },
            { picUrl: 'https://img.youtube.com/vi/3wmVgKjMpC8/0.jpg', title: 'Título del vídeo' },
            { picUrl: 'https://img.youtube.com/vi/3wmVgKjMpC8/0.jpg', title: 'Título del vídeo' },
            { picUrl: 'https://img.youtube.com/vi/3wmVgKjMpC8/0.jpg', title: 'Título del vídeo' }
          ]}
          renderItem={({ item }) => <ListItem picUrl={item.picUrl} text={item.title} />}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#ccf1f3',
  }
};

export default Grammar;
