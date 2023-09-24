import React, {useState} from 'react';
import {Text, View} from 'react-native';
import AuthHeader from '../../../components/AuthHeader/authHeader';
import Input from '../../../components/Input/input';
import {styles} from './styles';
import Checkbox from '../../../components/CheckBox/checkbox';
import Button from '../../../components/Button/button';
import Seperator from '../../../components/Seperator/seperator';
import GoogleLogin from '../../../components/GoogleLogin/GoogleLogin';

const SignUp = ({navigation}) => {
  const [checked, setChecked] = useState(false);
  const onSignIn = () => {
    navigation.navigate('SignIn');
    console.log('hello');
  };
  return (
    <View style={styles.container}>
      <AuthHeader title="Sign Up" />
      <Input label="Name" placeholder="John Doe" />
      <Input label="Email" placeholder="example@gmail.com" />
      <Input isPassword label="Password" placeholder="**********" />
      <View style={styles.agreeRow}>
        <Checkbox checked={checked} onCheck={setChecked} />
        <Text style={styles.agreeText}>
          I agree with <Text style={styles.agreeTextBold}>Terms </Text>&
          <Text style={styles.agreeTextBold}> Privacy </Text>
        </Text>
      </View>
      <Button title={'Sign Up'} style={styles.button} />
      <Seperator text="Or signup with" />
      <GoogleLogin />
      <Text style={styles.FooterText}>
        Already have an account?
        <Text onPress={onSignIn} style={styles.FooterTextBold}>
          Sign In
        </Text>
      </Text>
    </View>
  );
};

export default SignUp;
