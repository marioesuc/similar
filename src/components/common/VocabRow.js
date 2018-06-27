import React from 'react';
import { View, Text } from 'react-native';

const VocabRow = (props) => {
  return (
    /* Si utilizamos la sintaxis de array, el argumento de la derecha
    tiene prioridad en caso de que se le pase como argumento en la prop*/
    <View style={[styles.containerStyle, props.style]}>
      <View style={styles.columnStyle}>
        <Text>{props.children.col1}</Text>
      </View>
      <View style={styles.columnStyle}>
        <Text>{props.children.col2}</Text>
      </View>
      <View style={styles.columnStyle}>
        <Text>{props.children.col3}</Text>
      </View>
    </View>
  );
};

const styles = {
  containerStyle: {
    width: '100%',
    padding: 10,
    flex: 1,
    height: 50,
    backgroundColor: '#fff',
    justifyContent: 'center',
    flexDirection: 'row',
    position: 'relative',
    alignContent: 'center',
    borderBottomWidth: 1,
    borderColor: '#ddd'
  },
  columnStyle: {
    width: '33%',
    alignItems: 'center',
    justifyContent: 'center'
  }
};

export { VocabRow };
