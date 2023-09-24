import {StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    width: '40%',
    height: 60,
    backgroundColor: colors.thickGrey,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 14,
    alignSelf: 'center',
  },
  image: {
    width: 28,
    height: 28,
  },
});
