import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {styles} from './buttonstyle';

const Button = ({title, onPress, style}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={onPress}
      style={[styles.container, style]}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
