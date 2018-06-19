import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
  return (
    /* Si utilizamos la sintaxis de array, el argumento de la derecha
    tiene prioridad en caso de que se le pase como argumento en la prop*/
    <View style={[styles.containerStyle, props.style]}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    height: 60,
    padding: 10,
    backgroundColor: '#fff',
    justifyContent: 'center',
    flexDirection: 'row',
    position: 'relative',
    alignContent: 'center'
  }
};

export { CardSection };
