import React from 'react';
import {TouchableOpacity, Image, View} from 'react-native';
import {styles} from './checkboxstyle';

const Checkbox = ({checked, onCheck}) => {
  return (
    <TouchableOpacity
      onPress={() => onCheck(!checked)}
      style={styles.container}>
      {checked ? (
        <View style={styles.innerContainer}>
          <Image
            style={styles.checkIcon}
            source={require('../../assets/icon.png')}
          />
        </View>
      ) : null}
    </TouchableOpacity>
  );
};

export default Checkbox;
