import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
const Button = ({onPress, children, bgcolor}) => {
  const {buttonStyle, textStyle} = styles;
  return (
    <TouchableOpacity
      onPress={() => console.log('Tıklandı!')}
      style={buttonStyle}>
      <Text style={textStyle}>{children} </Text>
    </TouchableOpacity>
  );
};
const styles = {
  textStyle: {
    alignSelf: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10,
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: 'rgba(0, 0, 0, .7)',
    borderRadius: 5,
    marginLeft: 5,
    marginRight: 5,
  },
};
export default Button;
