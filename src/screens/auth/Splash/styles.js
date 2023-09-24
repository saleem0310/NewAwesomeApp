import {StyleSheet} from 'react-native';
import {colors} from '../../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    height: '100%',
    padding: 24,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 200,
  },
  titleContainer: {
    marginTop: 54,
  },
  title: {
    fontSize: 40,
    color: 303030,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  innerTitle: {
    fontSize: 40,
    color: colors.orange,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    textAlign: 'center',
  },
  footerText: {
    color: 'colors.blue',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 30,
  },
});
