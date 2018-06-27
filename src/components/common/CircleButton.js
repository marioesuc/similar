import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const CircleButton = ({ onPress, children, style }) => {
  const { buttonStyle, textStyle } = styles;

  return (
    <TouchableOpacity onPress={onPress} style={[buttonStyle, style]}>
      <Text style={textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    fontSize: 35,
    color: 'blue'
  },
  buttonStyle: {
    backgroundColor: 'white',
    borderColor: 'blue',
    width: 60,
    height: 60,
    borderWidth: 2,
    borderRadius: 50,
    alignItems: 'center'
  }
};

export { CircleButton };
