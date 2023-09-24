import {StyleSheet} from 'react-native';
import {colors} from '../../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  agreeRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  agreeText: {
    color: colors.blue,
    marginHorizontal: 8,
    fontSize: 14,
  },
  agreeTextBold: {
    fontWeight: 'bold',
  },
  button: {
    marginVertical: 20,
    width: 360,
    height: 60,
    fontSize: 16,
  },
  FooterText: {
    color: colors.blue,
    marginHorizontal: 8,
    fontSize: 14,
    textAlign: 'center',
    marginVertical: 10,
  },
  FooterTextBold: {
    fontWeight: 'bold',
  },
});
