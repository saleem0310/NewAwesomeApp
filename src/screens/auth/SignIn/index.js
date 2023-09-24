import React, {useState} from 'react';
import {Text, View} from 'react-native';
import AuthHeader from '../../../components/AuthHeader/authHeader';
import Input from '../../../components/Input/input';
import {styles} from './styles';
import Checkbox from '../../../components/CheckBox/checkbox';
import Button from '../../../components/Button/button';
import Seperator from '../../../components/Seperator/seperator';
import GoogleLogin from '../../../components/GoogleLogin/GoogleLogin';

const SignIn = ({navigation}) => {
  const [checked, setChecked] = useState(false);
  const onSignUp = () => {
    navigation.navigate('SignUp');
  };
  return (
    <View style={styles.container}>
      <AuthHeader title="Sign In" />
      <Input label="Email" placeholder="example@gmail.com" />
      <Input isPassword label="Password" placeholder="**********" />
      <Button title={'Sign In'} style={styles.button} />
      <Seperator text="Or signin with" />
      <GoogleLogin />
      <Text style={styles.FooterText}>
        Don't have an account ?
        <Text onPress={onSignUp} style={styles.FooterTextBold}>
          Sign Up
        </Text>
      </Text>
    </View>
  );
};

export default SignIn;
