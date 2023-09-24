import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import {styles} from './styles';
import Button from '../../../components/Button/button';

const Splash = ({navigation}) => {
  const onSignUp = () => {
    navigation.navigate('SignUp');
  };
  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require('../../../assets/splash_image.png')}
      />
      <View style={styles.textContainer}>
        <Text style={styles.title}>You'll Find </Text>
        <Text style={styles.innerTitle}> All you need </Text>
        <Text style={styles.title}>Here!</Text>
      </View>
      <View>
        <Button onPress={onSignUp} title="Sign up" />
      </View>
      <View>
        <Pressable hitSlop={20}>
          <Text style={styles.footerText}>Sign In</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Splash;
