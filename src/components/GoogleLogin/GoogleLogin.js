import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {styles} from './GoogleStyle';

const GoogleLogin = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image style={styles.image} source={require('../../assets/Google.png')} />
    </TouchableOpacity>
  );
};

export default GoogleLogin;
